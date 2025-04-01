import { Link, LinkProps } from "@tanstack/react-router";

import cn from "~/utils/cn";

export interface NavLinkProps
  extends Omit<LinkProps, "activeProps" | "inactiveProps"> {
  className?: string;
}

const NavLink = ({ children, className, to, ...rest }: NavLinkProps) => {
  return (
    <Link
      activeOptions={{ exact: true }}
      activeProps={{
        className: cn(
          "text-neutral-900",
          "hover:text-neutral-800",
          "dark:text-sky-400",
          "dark:hover:text-sky-300",
          className,
        ),
      }}
      inactiveProps={{
        className: cn(
          "text-neutral-700",
          "hover:text-neutral-900",
          "dark:text-neutral-300",
          "dark:hover:text-neutral-100",
          className,
        ),
      }}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
