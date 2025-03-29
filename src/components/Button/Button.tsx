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
        "border-sky-700",
        "text-sky-200",
        "hover:border-sky-800",
        "hover:text-sky-100",
      ],
      intent: "primary",
      variant: "contained",
    },
    {
      class: [
        "border-sky-700",
        "text-sky-400",
        "hover:border-sky-500",
        "hover:text-sky-300",
      ],
      intent: "primary",
      variant: "outlined",
    },
    {
      class: ["border-transparent", "text-sky-500", "hover:text-sky-300"],
      intent: "primary",
      variant: "text",
    },
    {
      class: [
        "bg-neutral-700",
        "border-neutral-600",
        "text-neutral-200",
        "hover:bg-neutral-600",
        "hover:border-neutral-500",
        "hover:text-neutral-100",
      ],
      intent: "secondary",
      variant: "contained",
    },
    {
      class: [
        "border-neutral-600",
        "text-neutral-400",
        "hover:border-neutral-500",
        "hover:text-neutral-200",
      ],
      intent: "secondary",
      variant: "outlined",
    },
    {
      class: [
        "border-transparent",
        "text-neutral-400",
        "hover:text-neutral-100",
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

export type ButtonProps = ComponentProps<typeof Slot> &
  VariantProps<typeof variants> & {
    asChild?: boolean;
  };

const Button = forwardRef<ComponentRef<typeof Slot>, ButtonProps>(
  ({ asChild = false, className, intent, size, variant, ...rest }, ref) => {
    const Comp = (asChild ? Slot : "button") as typeof Slot;

    return (
      <Comp
        className={cn(variants({ intent, size, variant }), className)}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default Button;
