import { Slot } from "@radix-ui/react-slot";
import { Link } from "@tanstack/react-router";
import { ComponentProps, ComponentRef, forwardRef } from "react";

import cn from "~/utils/cn";

export interface AppLinkProps extends ComponentProps<typeof Link> {
  asChild?: boolean;
}

const AppLink = forwardRef<ComponentRef<typeof Link>, AppLinkProps>(
  ({ asChild = false, className, ...rest }, ref) => {
    const Comp = (asChild ? Slot : Link) as typeof Link;

    return (
      <Comp
        className={cn("text-sky-700 dark:text-sky-500", className, {
          type: ["underline"],
        })}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default AppLink;
