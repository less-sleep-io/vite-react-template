import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";

import cn from "~/utils/cn";

const containerVariants = cva(["flex"], {
  defaultVariants: {
    alignContent: "center",
  },
  variants: {
    alignContent: {
      center: ["justify-center w-full"],
      end: ["justify-end w-full"],
      start: ["justify-start w-full"],
    },
  },
});

const contentVariants = cva(["flex w-full"], {
  defaultVariants: {
    maxWidth: "default",
  },
  variants: {
    maxWidth: {
      none: [],
      sm: ["max-w-xl"],
      md: ["max-w-2xl"],
      default: ["max-w-3xl"],
      lg: ["max-w-4xl"],
      xl: ["max-w-6xl"],
    },
  },
});

export type ContentProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof containerVariants> &
  VariantProps<typeof contentVariants>;

const Content = ({
  alignContent,
  children,
  className,
  maxWidth,
  ...rest
}: ContentProps) => {
  return (
    <div
      className={cn("grow", containerVariants({ alignContent }), className)}
      {...rest}
    >
      <div className={cn(contentVariants({ maxWidth }))}>{children}</div>
    </div>
  );
};

export type HeaderProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof containerVariants> &
  VariantProps<typeof contentVariants>;

const Header = ({
  alignContent,
  children,
  className,
  maxWidth,
  ...rest
}: HeaderProps) => {
  return (
    <div
      className={cn(containerVariants({ alignContent }), className)}
      {...rest}
    >
      <div className={cn(contentVariants({ maxWidth }), "px-3 py-4")}>
        {children}
      </div>
    </div>
  );
};

export type TitleProps = ComponentPropsWithRef<"h1">;

const Title = (props: TitleProps) => {
  return <h1 className="text-2xl text-neutral-300" {...props} />;
};

export type ViewLayoutProps = ComponentPropsWithRef<"div">;

const ViewLayout = ({ children, ...rest }: ViewLayoutProps) => {
  return (
    <div className="flex grow flex-col" {...rest}>
      {children}
    </div>
  );
};

ViewLayout.Content = Content;
ViewLayout.Header = Header;
ViewLayout.Title = Title;

export default ViewLayout;
