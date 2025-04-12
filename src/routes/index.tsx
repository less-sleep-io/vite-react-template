import { createFileRoute } from "@tanstack/react-router";

import Home from "~/features/home";

const Index = () => {
  return <Home />;
};

export const Route = createFileRoute("/")({
  component: Index,
});
