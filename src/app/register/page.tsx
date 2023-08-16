"use client";
import { Input } from "@/components/input";

import Image from "next/image";
import Link from "next/link";

import { useFormatedData } from "./hook/formatData";

const Register = () => {
  const { handleChange, inputDate } = useFormatedData();
  return (
    <>
      <div className="flex h-screen flex-1 flex-col  justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <Image
              width={10}
              height={10}
              className="mx-auto h-10 w-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <Input label="firstname" type="text" />
            <Input label="lastname" type="text" />
            <Input label="email" type="email" />
            <Input label="password" type="password" />
            <Input label="repeat password" type="password" />
            <Input
              label="age"
              type="text"
              maxLength={10}
              value={inputDate}
              onChange={handleChange}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#6366f1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4f46e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            do you have an account?
            <a
              href="/login"
              className="font-semibold leading-6 text-[#6366f1] hover:text-indigo-500"
            >
              Sig in now!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
