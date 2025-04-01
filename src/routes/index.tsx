import { createFileRoute } from "@tanstack/react-router";

import PageLayout from "~/components/PageLayout";
import Home from "~/features/home";

const Index = () => {
  return (
    <PageLayout>
      <PageLayout.Content alignContent="center" maxWidth="md">
        <Home />
      </PageLayout.Content>
    </PageLayout>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
