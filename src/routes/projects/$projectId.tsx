import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { capitalize } from "radash";

import PageLayout from "~/components/PageLayout";
import ProjectDetail, {
  getProjectDetailQueryOptions,
} from "~/features/project-detail";

const ProjectComponent = () => {
  const projectId = Route.useParams().projectId;
  const { data, isLoading } = useSuspenseQuery(
    getProjectDetailQueryOptions(projectId),
  );

  return (
    <PageLayout>
      <PageLayout.Header>
        <PageLayout.Title>{capitalize(projectId)}</PageLayout.Title>
      </PageLayout.Header>
      <PageLayout.Content>
        <ProjectDetail isLoading={isLoading} project={data} />
      </PageLayout.Content>
    </PageLayout>
  );
};

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectComponent,
  loader: ({ context: { queryClient }, params: { projectId } }) =>
    queryClient.ensureQueryData(getProjectDetailQueryOptions(projectId)),
});
