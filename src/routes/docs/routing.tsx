import { createFileRoute } from "@tanstack/react-router";

import Routing from "~/features/docs/Routing";

export const Route = createFileRoute("/docs/routing")({
  component: DocsRoutingComponent,
});

function DocsRoutingComponent() {
  return (
    <main>
      <Routing />
    </main>
  );
}
