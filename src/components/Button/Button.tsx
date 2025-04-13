import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, ComponentRef, forwardRef } from "react";

import cn from "~/utils/cn";

const variants = cva(["border", "flex", "cursor-pointer"], {
  variants: {
    intent: {
      primary: [],
      secondary: [],
    },
    size: {
      large: ["px-4", "py-1.5", "text-base"],
      medium: ["px-3", "py-1.5", "text-sm"],
      small: ["px-2", "py-1.5", "text-xs"],
    },
    variant: {
      contained: [],
      outlined: [],
      text: [],
    },
  },
  compoundVariants: [
    {
      class: [
        "bg-sky-600",
        "hover:bg-sky-500",
        "dark:bg-sky-300",
        "dark:hover:bg-sky-200",
        "border-sky-600",
        "hover:border-sky-500",
        "dark:border-sky-300",
        "dark:hover:border-sky-200",
        "text-white",
        "hover:text-sky-white",
        "dark:text-sky-900",
        "dark:hover:text-sky-900",
      ],
      intent: "primary",
      variant: "contained",
    },
    {
      class: [
        "bg-transparent",
        "hover:bg-sky-100",
        "dark:hover:bg-sky-900",
        "border-sky-700",
        "hover:border-sky-900",
        "dark:border-sky-300",
        "dark:hover:border-sky-900",
        "text-sky-700",
        "hover:text-sky-900",
        "dark:text-sky-200",
        "dark:hover:text-sky-100",
      ],
      intent: "primary",
      variant: "outlined",
    },
    {
      class: [
        "border-transparent",
        "bg-transparent",
        "hover:bg-sky-100",
        "dark:hover:bg-sky-900",
        "text-sky-800",
        "hover:text-sky-700",
        "dark:text-sky-300",
        "dark:hover:text-sky-100",
      ],
      intent: "primary",
      variant: "text",
    },
    {
      class: [
        "bg-neutral-200",
        "hover:bg-neutral-300",
        "dark:bg-neutral-600",
        "dark:hover:bg-neutral-500",
        "border-neutral-200",
        "hover:border-neutral-300",
        "dark:border-neutral-600",
        "dark:hover:border-neutral-500",
        "text-neutral-800",
        "hover:text-neutral-900",
        "dark:text-neutral-300",
        "dark:hover:text-neutral-200",
      ],
      intent: "secondary",
      variant: "contained",
    },
    {
      class: [
        "bg-transparent",
        "hover:bg-neutral-100",
        "dark:hover:bg-neutral-700",
        "border-neutral-400",
        "hover:border-neutral-500",
        "dark:border-neutral-600",
        "text-neutral-600",
        "hover:text-neutral-800",
        "dark:text-neutral-400",
        "dark:hover:text-neutral-100",
      ],
      intent: "secondary",
      variant: "outlined",
    },
    {
      class: [
        "border-transparent",
        "bg-transparent",
        "hover:bg-neutral-100",
        "dark:hover:bg-neutral-700",
        "text-neutral-600",
        "hover:text-neutral-800",
        "dark:text-neutral-300",
        "dark:hover:text-neutral-200",
      ],
      intent: "secondary",
      variant: "text",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    variant: "contained",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof variants> & {
    asChild?: boolean;
  };

const Button = forwardRef<ComponentRef<typeof Slot>, ButtonProps>(
  ({ asChild = false, className, intent, size, variant, ...rest }, ref) => {
    const Comp = (asChild ? Slot : "button") as typeof Slot;

    return (
      <Comp
        className={cn(
          "flex items-center justify-center rounded-none text-center focus-visible:outline-2 focus-visible:outline-blue-800 dark:focus-visible:outline-blue-300",
          variants({ intent, size, variant }),
          className,
        )}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default Button;
