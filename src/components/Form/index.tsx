"use client";
import { FormType } from "./types";

export const Form = ({ children, onSubmit }: FormType) => {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
