import { createFileRoute } from "@tanstack/react-router";

import PageLayout from "~/components/PageLayout";
import Home from "~/features/home";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      <PageLayout.Content alignContent="center" maxWidth="md">
        <Home />
      </PageLayout.Content>
    </PageLayout>
  );
}
