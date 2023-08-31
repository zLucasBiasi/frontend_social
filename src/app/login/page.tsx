"use client";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input/index";
import { getApiData } from "@/services/api";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const schema = z.object({
    email: z.string().email({ message: "digite um email válido" }),
    password: z
      .string()
      .min(8, { message: "sua senha precisa ter no minimo 8 digitos" }),
  });

  type FormType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: FormType) => {
    const dataApi = await getApiData("login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(dataApi);
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
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            {" "}
            <Input label="email" type="email" {...register("email")} />
            {errors.email?.message && <span>{errors.email?.message}</span>}
            <Input label="password" type="text" {...register("password")} />
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </div>
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
