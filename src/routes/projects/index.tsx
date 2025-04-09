import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import PageLayout from "~/components/PageLayout";
import ProjectsList from "~/features/project-list";
import { getProjectsListQueryOptions } from "~/features/project-list/api/getProjectsList";

const ProjectsComponent = () => {
  const { data, isError, isLoading } = useSuspenseQuery(
    getProjectsListQueryOptions,
  );

  return (
    <PageLayout>
      <PageLayout.Header>
        <PageLayout.Title>Choose a location:</PageLayout.Title>
      </PageLayout.Header>
      <PageLayout.Content>
        <ProjectsList isError={isError} isLoading={isLoading} projects={data} />
      </PageLayout.Content>
    </PageLayout>
  );
};

export const Route = createFileRoute("/projects/")({
  component: ProjectsComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getProjectsListQueryOptions),
});
