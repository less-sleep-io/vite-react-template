import { createFileRoute } from "@tanstack/react-router";

import VariantsExample from "~/features/variants-example";

const VariantsExampleComponent = () => {
  return <VariantsExample />;
};

export const Route = createFileRoute("/variants")({
  component: VariantsExampleComponent,
});
