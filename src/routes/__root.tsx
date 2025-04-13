import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
  linkOptions,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import NavLink from "~/components/NavLink";

const options = linkOptions([
  {
    activeOptions: { exact: true },
    label: "Home",
    to: "/",
  },
  {
    label: "API Example",
    to: "/pokemon",
  },
  {
    label: "Variants Example",
    to: "/variants",
  },
]);

const RouteComponent = () => {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <header className="w-full border-b border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <nav className="flex gap-4">
          {options.map((option) => {
            return (
              <NavLink {...option} key={option.to} to={option.to}>
                {option.label}
              </NavLink>
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
};

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
