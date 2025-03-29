import { ReactNode } from "react";

import NavLink from "~/components/NavLink";
import PageLayout from "~/components/PageLayout";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayout>
      <PageLayout.Content alignContent="start" maxWidth="none">
        <div className="flex min-h-full w-full">
          <nav className="h-full w-64 border-r border-neutral-700 bg-neutral-800 p-5">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to="/docs">Overview</NavLink>
              </li>
              <li>
                <NavLink to="/docs/routing">Routing</NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex">{children}</div>
        </div>
      </PageLayout.Content>
    </PageLayout>
  );
};

export default Layout;
