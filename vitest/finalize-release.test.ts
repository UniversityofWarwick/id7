import { readFileSync } from 'node:fs';
import { expect, test, vi } from 'vitest';

const workflow = readFileSync(new URL('../.github/workflows/finalize-release.yml', import.meta.url), 'utf8');
const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;

function script(name: string) {
  const step = workflow.split(`      - name: ${name}\n`)[1].split('\n      - ')[0];
  return step.split('          script: |\n')[1]
    .split('\n')
    .filter(line => line.startsWith('            '))
    .map(line => line.slice(12))
    .join('\n');
}

function fixture(eventName = 'issue_comment') {
  const pr = {
    number: 362,
    state: 'open',
    title: 'Release v4.0.3',
    mergeable: true,
    mergeable_state: 'clean',
    head: {
      ref: 'release/v4.0.3',
      sha: 'release-commit',
      repo: { full_name: 'UniversityofWarwick/id7' },
    },
  };
  const github = {
    rest: {
      pulls: { get: vi.fn().mockResolvedValue({ data: pr }) },
      repos: { getCollaboratorPermissionLevel: vi.fn().mockResolvedValue({ data: { permission: 'write' } }) },
      actions: { createWorkflowDispatch: vi.fn() },
    },
  };
  const context = {
    eventName,
    repo: { owner: 'UniversityofWarwick', repo: 'id7' },
    issue: { number: 362 },
    payload: {
      comment: { user: { login: 'maintainer' } },
      repository: { default_branch: 'develop' },
    },
  };
  const core = { setOutput: vi.fn() };
  const run = (name: string, env = {}) =>
    new AsyncFunction('github', 'context', 'core', 'process', script(name))(
      github, context, core, { env },
    );
  return { pr, github, context, core, run };
}

test('only dispatch runs can publish, after authorization succeeds', () => {
  expect(workflow).toContain('  workflow_dispatch:\n    inputs:\n      pr-number:');
  expect(workflow).toContain(
    "  finalize:\n    needs: authorize\n    if: github.event_name == 'workflow_dispatch'",
  );
  const authorize = workflow.split('  authorize:')[1].split('\n  finalize:')[0];
  expect(authorize).not.toContain('npm publish');
  expect(authorize).not.toContain('id-token: write');
  expect(authorize).toContain('actions: write');
  expect(authorize).toContain("if: steps.check-permissions.outputs.can-merge == 'false'");
  expect(authorize).toContain("if: github.event_name == 'issue_comment'");
  expect(workflow).toContain('id-token: write');
  expect(workflow).toContain('ref: ${{ needs.authorize.outputs.head-sha }}');
  expect(workflow).toContain("sha: '${{ needs.authorize.outputs.head-sha }}'");
});

test('authorized comments dispatch the same trusted workflow on the default branch', async () => {
  const { run, core, github } = fixture();
  await run('Check merge permissions', { PR_NUMBER: '362' });
  expect(core.setOutput).toHaveBeenCalledWith('can-merge', 'true');
  await run('Dispatch finalization', { PR_NUMBER: '362' });
  expect(github.rest.actions.createWorkflowDispatch).toHaveBeenCalledWith({
    owner: 'UniversityofWarwick',
    repo: 'id7',
    workflow_id: 'finalize-release.yml',
    ref: 'develop',
    inputs: { 'pr-number': '362' },
  });
});

test('comments without write access are blocked', async () => {
  const { run, core, github } = fixture();
  github.rest.repos.getCollaboratorPermissionLevel.mockResolvedValue({ data: { permission: 'read' } });
  await run('Check merge permissions', { PR_NUMBER: '362' });
  expect(core.setOutput).toHaveBeenCalledWith('can-merge', 'false');
  expect(github.rest.actions.createWorkflowDispatch).not.toHaveBeenCalled();
});

test('dispatch resolves the PR input instead of relying on a comment payload', async () => {
  const { run, core, github, context } = fixture('workflow_dispatch');
  Reflect.deleteProperty(context, 'issue');
  Reflect.deleteProperty(context.payload, 'comment');
  await run('Get PR details', { PR_NUMBER: '362' });
  await run('Check merge permissions', { PR_NUMBER: '362' });
  expect(github.rest.pulls.get).toHaveBeenCalledWith({
    owner: 'UniversityofWarwick', repo: 'id7', pull_number: 362,
  });
  expect(core.setOutput).toHaveBeenCalledWith('head-sha', 'release-commit');
  expect(core.setOutput).toHaveBeenCalledWith('title', 'Release v4.0.3');
  expect(core.setOutput).toHaveBeenCalledWith('can-merge', 'true');
  expect(github.rest.repos.getCollaboratorPermissionLevel).not.toHaveBeenCalled();
});

test.each(['', 'abc', '0', '-1', '1.5'])('dispatch rejects invalid PR number %j', async number => {
  const { run, github } = fixture('workflow_dispatch');
  await expect(run('Get PR details', { PR_NUMBER: number })).rejects.toThrow('valid release pull request');
  expect(github.rest.pulls.get).not.toHaveBeenCalled();
});

test.each(['fork', 'closed', 'branch', 'title'])('rejects non-release PRs: %s', async kind => {
  const { run, pr } = fixture('workflow_dispatch');
  if (kind === 'fork') pr.head.repo.full_name = 'someone/id7';
  if (kind === 'closed') pr.state = 'closed';
  if (kind === 'branch') pr.head.ref = 'feature';
  if (kind === 'title') pr.title = 'Release v4.0.3"; echo unexpected';
  await expect(run('Get PR details', { PR_NUMBER: '362' })).rejects.toThrow('open release PR');
});

test.each(['conflicts', 'blocked'])('dispatch rechecks mergeability: %s', async state => {
  const { run, pr, core } = fixture('workflow_dispatch');
  if (state === 'conflicts') pr.mergeable = false;
  if (state === 'blocked') pr.mergeable_state = 'blocked';
  await run('Check merge permissions', { PR_NUMBER: '362' });
  expect(core.setOutput).toHaveBeenCalledWith('can-merge', 'false');
});
