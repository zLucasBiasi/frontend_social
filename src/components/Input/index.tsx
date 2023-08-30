"use client";

import { forwardRef } from "react";
import { InputProps } from "./types";

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, ...rest } = props;
  return (
    <>
      <label
        htmlFor="text"
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        {label}
      </label>
      <div className="mt-0.5">
        <input
          ref={ref}
          {...rest}
          className="block w-full p-2 rounded-md border-0 py-2.5 text-gray-300 shadow-sm ring-1 ring-inset bg-[#1d2432] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
});
