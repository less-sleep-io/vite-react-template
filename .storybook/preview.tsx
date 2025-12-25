import type { Preview } from "@storybook/react-vite";
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => {
      return (
        <RouterProvider
          router={createRouter({
            history: createMemoryHistory(),
            routeTree: createRootRoute({
              beforeLoad: async ({ location, cause }) => {
                // Don't alert on initial load
                if (cause === "enter") {
                  return;
                }
                alert(`Path: ${location.pathname}`);
                return null;
              },
              component: Story,
            }),
          })}
        />
      );
    },
  ],
};

export default preview;
