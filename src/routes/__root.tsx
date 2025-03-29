import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
  linkOptions,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import cn from "~/utils/cn";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RouteComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

const options = linkOptions([
  {
    activeOptions: { exact: true },
    label: "Home",
    to: "/",
  },
  {
    label: "Docs",
    to: "/docs",
  },
  {
    label: "API Example",
    to: "/pokemon",
  },
]);

function RouteComponent() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <header className="w-full bg-neutral-50 p-4 dark:bg-neutral-700">
        <nav className="flex gap-4">
          {options.map((option) => {
            return (
              <Link
                {...option}
                activeProps={{
                  className: cn(
                    "text-neutral-900",
                    "hover:text-neutral-800",
                    "dark:text-sky-400",
                    "dark:hover:text-sky-300",
                  ),
                }}
                inactiveProps={{
                  className: cn(
                    "text-neutral-700",
                    "hover:text-neutral-900",
                    "dark:text-neutral-300",
                    "dark:hover:text-neutral-100",
                  ),
                }}
                key={option.to}
                to={option.to}
              >
                {option.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="flex grow">
        <Outlet />
      </div>
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools />
    </div>
  );
}
