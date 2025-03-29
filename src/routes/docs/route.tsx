import { Outlet, createFileRoute } from "@tanstack/react-router";

import Layout from "~/features/docs/Layout";

export const Route = createFileRoute("/docs")({
  component: DocsRouteComponent,
});

function DocsRouteComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
