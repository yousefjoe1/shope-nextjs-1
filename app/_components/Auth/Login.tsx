"use client";
import { login } from "@/app/_actions/login";
import { Inputs } from "@/app/_types/User";
import { Chip, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmit(true);
    try {
      const res = await login(data);
      if (res.code == 400) {
        setError(res.msg);
      } else {
        setError(`success`);
        router.push('/')
      }
    } catch (error) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<Inputs>= ~ error:", error);
    }
    setIsSubmit(false);
  };

  return (
    <>
        <p className="text-center text-sm text-gray-600">
          Sign in to access your account
        </p>
        {error && <Chip color="danger">{error}</Chip>}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              type="email"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: true })}
              type="password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>

          <div className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out">
            <input disabled={isSubmit} className="cursor-pointer" type="submit" />
            {isSubmit && <Spinner size="sm" color="warning" />}
          </div>
        </form>
    </>
  );
};

export default Login;
