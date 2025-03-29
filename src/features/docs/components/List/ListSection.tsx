import { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";

import cn from "~/utils/cn";

export interface ListSectionListProps extends ComponentProps<typeof Slot> {
  asChild?: boolean;
}

const ListSectionList = ({
  asChild = false,
  className,
  ...rest
}: ListSectionListProps) => {
  const Comp = (asChild ? Slot : "ul") as typeof Slot;

  return (
    <Comp
      className={cn(
        "ml-4 flex list-disc flex-col items-center gap-1",
        className,
      )}
      {...rest}
    />
  );
};

export interface ListSectionListItemProps extends ComponentProps<typeof Slot> {
  asChild?: boolean;
}

const ListSectionListItem = ({
  asChild = false,
  children,
  className,
}: ListSectionListItemProps) => {
  const Comp = (asChild ? Slot : "li") as typeof Slot;

  return (
    <Comp className={cn("flex flex-col gap-1 text-neutral-400", className)}>
      {children}
    </Comp>
  );
};

export interface ListSectionTitleProps extends ComponentProps<typeof Slot> {
  asChild?: boolean;
}

const ListSectionTitle = ({
  asChild = false,
  className,
  ...rest
}: ListSectionTitleProps) => {
  const Comp = (asChild ? Slot : "h3") as typeof Slot;

  return (
    <Comp className={cn("text-lg text-neutral-300", className)} {...rest} />
  );
};

export interface ListSectionProps extends ComponentProps<typeof Slot> {
  asChild?: boolean;
}

const ListSection = ({
  asChild = false,
  className,
  ...rest
}: ListSectionProps) => {
  const Comp = (asChild ? Slot : "div") as typeof Slot;

  return <Comp className={cn("flex flex-col gap-1", className)} {...rest} />;
};

ListSection.List = ListSectionList;
ListSection.ListItem = ListSectionListItem;
ListSection.Title = ListSectionTitle;

export default ListSection;
