import {
  ChangeEvent,
  ComponentProps,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";

export type InputProps = {
  label: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>;
} & ComponentProps<"input">;
