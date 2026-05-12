# Releasing ID7

ID7 uses an automated release process powered by GitHub Actions. All you need to do is choose a version - a release PR is created for you. When that PR is approved and merged, the release process is finalised for you.

## Quick instructions

1. Go to the [create release workflow](https://github.com/UniversityofWarwick/id7/actions/workflows/create-release-pr.yml) and click **Run workflow**
2. Type in the version and submit
3. Get the PR reviewed, approved and merged

## Detailed release process

If you love instructions, this is for you. Otherwise just keep reading the section above.

### Step 1: Initiate Release (Automated)

1. Go to the repository's **Actions** tab
2. Select **Create Release PR** workflow
3. Click **Run workflow**
4. Enter a version number in one of these formats:
   - `3.8.1` (regular release)
   - `3.8.1-rc.1` (release candidate)
   - `3.8.1-alpha` (alpha/beta/other prerelease)
5. Click **Run workflow**

The workflow will:
- ✓ Validate the version format (X.Y.Z with optional prerelease suffix)
- ✓ Update `package.json` and `_config.yml`
- ✓ Create a new `release/vX.Y.Z` branch
- ✓ Create a pull request titled "Release vX.Y.Z"

### Step 2: Review and Approve (Manual)

1. Review the pull request in **Pull Requests** tab
2. Verify the version bump is correct in both files
3. Request approval from maintainers
4. Once approved, **merge the pull request**

### Step 3: Finalize Release (Automated)

When the release PR is merged to `main`, the **Finalize Release** workflow automatically:

- ✓ Creates a GitHub release with tag `vX.Y.Z`
- ✓ Marks prerelease versions (e.g., `-rc.1`) appropriately
- ✓ Runs `npm run build` to generate production artifacts
- ✓ Uploads distribution ZIP files to the release
- ✓ Publishes the package to npmjs.org with `npm publish --access=public`
- ✓ Posts a summary comment on the PR with install instructions

**Monitoring:** Watch the **Actions** tab > **Finalize Release** workflow.

### Handling Publish Failures

If NPM publish fails:

1. The GitHub release is **moved to draft** status (not published)
2. A comment is posted on the PR with:
   - The error details
   - Steps to resolve (usually checking authentication)
   - Instructions to re-run or manually publish
   - 
---

## Netlify Deploy

Netlify will deploy the static site at https://id7.warwick.ac.uk automatically when `main` is updated. No manual action required.

---

## Version Format

Follow [semantic versioning](http://semver.org/):

- **Patch:** `3.8.1` (bug fixes)
- **Minor:** `3.9.0` (new features, backward compatible)
- **Major:** `4.0.0` (breaking changes)
- **Prerelease:** `3.8.1-rc.1`, `3.8.1-beta`, `3.8.1-alpha`

The version is stored in:
- `package.json` (line 3)
- `_config.yml` (line 20)

---

## Troubleshooting

| Issue | Solution                                                                                                                                                                                                          |
|---|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **"Invalid version format"** | Use format `X.Y.Z` or `X.Y.Z-suffix`. Leading `v` is optional.                                                                                                                                                    |
| **PR already exists** | The workflow detects existing PRs and links to them instead of creating duplicates.                                                                                                                               |
| **NPM publish fails** | Check the publisher set up on npmjs.org. We have set up GitHub integration so that this specific workflow can publish to this specific package via Trusted Publishing (https://docs.npmjs.com/trusted-publishers) |
| **Release in draft status** | NPM publish failed. See PR comment for next steps.                                                                                                                                                                |
| **Can't merge PR** | Branch protection rules may require reviews or passing CI. Check repo settings.                                                                                                                                   |
