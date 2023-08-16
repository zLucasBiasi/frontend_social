"use client";

import { InputProps } from "./types";

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <>
      <label
        htmlFor="text"
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...props}
          required
          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset bg-[#1d2432] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};
