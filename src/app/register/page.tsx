"use client";

import { Input } from "@/components/Input";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form } from "@/components/Form";
import { Button } from "@/components/Button";
import { generateSecurePassword } from "./functions/generatePassword";
import { ChangeEvent, useState } from "react";

const schema = z.object({
  first_name: z.string().nonempty({ message: "nome requirido" }),
  last_name: z.string().nonempty({ message: "sobrenome requirido" }),
  email: z.string().email({ message: "digite um email válido" }),
  password: z
    .string()
    .min(8, { message: "sua senha precisa ter no minimo 8 digitos" }),
  age: z.coerce.date(),
});

type FormType = z.infer<typeof schema>;

const Register = () => {
  const [passwordGenerated, setPasswordGenerated] = useState("");

  const handleClick = () => {
    const hash = generateSecurePassword();
    setPasswordGenerated(hash);
  };

  // const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const data = await getApiData("register", {
  //     method: "POST",
  //     body: JSON.stringify({ email, password, first_name, last_name, age }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(data);
  // };

  // const { handleChange, inputDate } = useFormatedData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  console.log(errors);

  const handleFormSubmit = () => {
    console.log("enviado");
  };
  return (
    <>
      <div className="flex h-screen flex-1 flex-col  justify-c v  enter px-6 py-12 lg:px-8 ">
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
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-y-1">
              {" "}
              <Input
                label="firstname"
                type="text"
                {...register("first_name")}
              />
              {errors.first_name?.message && (
                <p>{errors.first_name?.message}</p>
              )}
              <Input label="lastname" type="text" {...register("last_name")} />
              {errors.first_name?.message && <p>{errors.last_name?.message}</p>}
              <Input label="email" type="email" {...register("email")} />
              {errors.email?.message && <p>{errors.email?.message}</p>}
              <Input
                label="age"
                type="date"
                maxLength={10}
                {...register("age")}
              />
              {errors.age?.message && <p>{errors.age?.message}</p>}
              <Input
                label="password"
                type="text"
                value={passwordGenerated}
                {...register("password")}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPasswordGenerated(e.target.value)
                }
              />
              {errors.password?.message && <p>{errors.password?.message}</p>}
              <span
                onClick={() => handleClick()}
                className="text-[0.8rem] flex flex-row-reverse w-full cursor-pointer"
              >
                generate password
              </span>
              <Input label="repeat password" type="password" />
            </div>
            <div>
              <Button type="submit">Register</Button>
            </div>
          </Form>

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
