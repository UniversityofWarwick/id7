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

  private static final String NODE_VERSION = "Node 22";

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
                    .description("npm ci")
                    .nodeExecutable(NODE_VERSION)
                    .command("ci"),
                  new ScriptTask()
                    .description("Remove old test results from previous builds")
                    .interpreter(ScriptTaskProperties.Interpreter.BINSH_OR_CMDEXE)
                    .inlineBody("rm -rf _build"),
                  new NpmTask()
                    .description("Build assets")
                    .nodeExecutable(NODE_VERSION)
                    .command("run build"),
                  new NpmTask()
                    .description("Test")
                    .nodeExecutable(NODE_VERSION)
                    .command("run test"),
                  new TestParserTask(TestParserTaskProperties.TestType.JUNIT)
                    .description("Parse JUnit results")
                    .resultDirectories("_build/test-reports/*.xml")
                )
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
