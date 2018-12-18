package uk.ac.warwick.id7;

import com.atlassian.bamboo.specs.api.BambooSpec;
import com.atlassian.bamboo.specs.api.builders.BambooKey;
import com.atlassian.bamboo.specs.api.builders.deployment.Deployment;
import com.atlassian.bamboo.specs.api.builders.plan.Job;
import com.atlassian.bamboo.specs.api.builders.plan.Plan;
import com.atlassian.bamboo.specs.api.builders.plan.Stage;
import com.atlassian.bamboo.specs.api.builders.plan.artifact.Artifact;
import com.atlassian.bamboo.specs.api.builders.project.Project;
import com.atlassian.bamboo.specs.api.builders.requirement.Requirement;
import com.atlassian.bamboo.specs.builders.task.*;
import com.atlassian.bamboo.specs.model.task.ScriptTaskProperties;
import com.atlassian.bamboo.specs.model.task.TestParserTaskProperties;
import uk.ac.warwick.bamboo.specs.AbstractWarwickBuildSpec;

import java.util.Collection;
import java.util.Collections;

/**
 * Plan configuration for Bamboo.
 * Learn more on: <a href="https://confluence.atlassian.com/display/BAMBOO/Bamboo+Specs">https://confluence.atlassian.com/display/BAMBOO/Bamboo+Specs</a>
 */
@BambooSpec
public class ID7PlanSpec extends AbstractWarwickBuildSpec {

  private static final Project PROJECT =
    new Project()
      .key("BRAND")
      .name("Brand");

  private static final String LINKED_REPOSITORY = "ID7";

  private static final String SLACK_CHANNEL = "#brand";

  public static void main(String[] args) throws Exception {
    new ID7PlanSpec().publish();
  }

  @Override
  protected Collection<Plan> builds() {
    return Collections.singletonList(
      build(PROJECT, "ID7", "ID7")
        .linkedRepository(LINKED_REPOSITORY)
        .description("Compile assets")
        .stage(
          new Stage("Default Stage")
            .jobs(
              new Job("Default Job",
                new BambooKey("JOB1"))
                .tasks(new VcsCheckoutTask()
                    .description("Checkout Default Repository")
                    .checkoutItems(new CheckoutItem().defaultRepository()),
                  new ScriptTask()
                    .description("git clean")
                    .interpreter(ScriptTaskProperties.Interpreter.BINSH_OR_CMDEXE)
                    .inlineBody("git clean -fdx"),
                  new NpmTask()
                    .description("npm prune")
                    .nodeExecutable("Node 8")
                    .command("prune"),
                  new NpmTask()
                    .description("npm ci")
                    .nodeExecutable("Node 8")
                    .command("ci"),
                  new ScriptTask()
                    .description("BUNDLE!!!!111111111")
                    .interpreter(ScriptTaskProperties.Interpreter.BINSH_OR_CMDEXE)
                    .inlineBody("if [[ `type -P scl` ]]; then\n  source scl_source enable rh-ruby24\nfi\nbundle install --path vendor/bundle"),
                  new ScriptTask()
                    .description("Remove old test results from previous builds")
                    .interpreter(ScriptTaskProperties.Interpreter.BINSH_OR_CMDEXE)
                    .inlineBody("rm -rf _build"),
                  new NpmTask()
                    .description("Build assets")
                    .nodeExecutable("Node 8")
                    .command("run-script build"),
                  new NpmTask()
                    .description("Test")
                    .nodeExecutable("Node 8")
                    .command("run-script test"),
                  new TestParserTask(TestParserTaskProperties.TestType.JUNIT)
                    .description("Parse JUnit results")
                    .resultDirectories("_build/test-reports/*.xml"),
                  new ScriptTask()
                    .description("Commit generated dist files back")
                    .interpreter(ScriptTaskProperties.Interpreter.BINSH_OR_CMDEXE)
                    .inlineBody("git config user.name \"Bamboo\"\ngit config user.email \"$USER@$HOSTNAME\"\ngit add dist\ngit commit -m \"Automated commit of built assets\"\ngit remote add github git@github.com:UniversityofWarwick/id7.git\nssh-keyscan -t rsa github.com > ~/.ssh/known_hosts\ngit push github\nexit 0"))
                )
        )
        .slackNotifications(SLACK_CHANNEL, false)
        .build()
      );
  }

  @Override
  protected Collection<Deployment> deployments() {
    return Collections.emptyList();
  }
}
