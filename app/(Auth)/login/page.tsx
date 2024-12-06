"use client";

import Login from "@/app/_components/Auth/Login";
import Register from "@/app/_components/Auth/Register";
import { Button } from "@nextui-org/button";
import {  LogIn } from "lucide-react";
import { useState } from "react";

const Page = () => {

const [authType, setauthType] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">

        <div className="flex">

          <Button onClick={()=> setauthType(!authType)}>
            {authType ? 'Register' : 'Login'} <LogIn size={15} />
          </Button>
        </div>

        {
          authType ?
          <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome back
            </h2>
            <Login />
          </>:
          <Register />
        }
      </div>
    </section>
  );
};

export default Page;
