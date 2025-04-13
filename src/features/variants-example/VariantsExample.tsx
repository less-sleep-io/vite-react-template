import { capitalize } from "radash";
import { Fragment } from "react/jsx-runtime";

import Button from "~/components/Button";
import { ButtonProps } from "~/components/Button/Button";
import ViewLayout from "~/components/ViewLayout";
import cn from "~/utils/cn";

const buttonExamples: ButtonProps["intent"][] = [
  "primary",
  "secondary",
] as const;
const sizes: ButtonProps["size"][] = ["small", "medium", "large"] as const;
const variants: ButtonProps["variant"][] = [
  "contained",
  "outlined",
  "text",
] as const;
const cellClassName =
  "px-4 py-2 font-normal text-right text-sm text-neutral-500 dark:text-neutral-400";
const thClassName = "border-b border-neutral-200 dark:border-neutral-700";

const VariantsExample = () => {
  return (
    <ViewLayout>
      <ViewLayout.Header>
        <ViewLayout.Title>Variants Example</ViewLayout.Title>
      </ViewLayout.Header>
      <ViewLayout.Content alignContent="center" maxWidth="md">
        <table className="w-full self-start">
          <tbody>
            {buttonExamples.map((intent) => {
              if (!intent) {
                return null;
              }
              return (
                <Fragment key={`${intent}`}>
                  <tr>
                    <th className={cn(cellClassName, thClassName)}>
                      {capitalize(intent)}
                    </th>
                    {sizes.map((size) => {
                      if (!size) {
                        return null;
                      }
                      return (
                        <th
                          className={cn(
                            cellClassName,
                            thClassName,
                            "text-left",
                          )}
                          key={size}
                        >
                          {capitalize(size)}
                        </th>
                      );
                    })}
                  </tr>
                  {variants.map((variant) => {
                    if (!variant) {
                      return null;
                    }
                    return (
                      <tr key={variant}>
                        <th className={cellClassName}>{capitalize(variant)}</th>
                        {sizes.map((size) => (
                          <td className="px-4 py-2" key={size}>
                            <Button
                              intent={intent}
                              size={size}
                              variant={variant}
                            >
                              Button
                            </Button>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </ViewLayout.Content>
    </ViewLayout>
  );
};

export default VariantsExample;
