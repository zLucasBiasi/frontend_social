import { ButtonProps } from "./type";

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      className="flex w-full justify-center rounded-md bg-[#6366f1] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4f46e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      type={type}
    >
      {children}
    </button>
  );
};
