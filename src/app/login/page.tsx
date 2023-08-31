"use client";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input/index";
import { getApiData } from "@/services/api";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getApiData("login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    setMessage(data.mensagem);
  };

  return (
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
          Sign in to your account
        </h2>
      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <Form onSubmit={onSubmit}>
          <div>
            <Input
              label="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message !== null ? <span>{message}</span> : ""}

          <Button type="submit">Sig In</Button>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not have an account?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-[#6366f1] hover:text-indigo-500"
          >
            Create now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
