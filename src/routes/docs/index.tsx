import { createFileRoute } from "@tanstack/react-router";

import Overview from "~/features/docs/Overview";

export const Route = createFileRoute("/docs/")({
  component: DocsIndexComponent,
});

function DocsIndexComponent() {
  return (
    <main>
      <Overview />
    </main>
  );
}
