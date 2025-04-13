import { createFileRoute } from "@tanstack/react-router";

import Home from "~/features/home";

const IndexComponent = () => {
  return <Home />;
};

export const Route = createFileRoute("/")({
  component: IndexComponent,
});
