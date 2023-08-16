import { ComponentProps } from "react";

export type InputProps = {
  label: string;
} & ComponentProps<"input">;
