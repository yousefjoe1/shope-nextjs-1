'use client'
import { Inputs } from '@/app/_types/User';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    const [isSubmit, setIsSubmit] = useState(false);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //   let url = `${baseUrl}/api/users/login`;
    //   let userdata = {
    //     email: data.email,
    //     password: data.password,
    //   };
  
    //   setIsSubmit(true);
  
    //   let resp = await axios.post(url, userdata);
  
    //   console.log(resp,'login data');
      
    //   if (resp.data.code == 400) {
    //     msg(resp.data.msg, "error");
    //   } else {
    //     if(resp.data.data.role == 'vendor'){
    //       localStorage.setItem("vendorToken", resp.data.token);
    //       navigate("/vendor");
    //     }else {
    //       localStorage.setItem("userToken", resp.data.token);
    //       navigate("/");
    //     }
    //     msg(resp.data.msg);
    //   }
    //   setContextValue(!contextValue);
    //   setIsSubmit(false);
    };
  

    
  return (
    <section  className='min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl'>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Welcome back
            </h2>
            <p className="text-center text-sm text-gray-600">
                Sign in to access your account
            </p>
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
                    <p className="text-red-500 text-xs mt-1">This field is required</p>
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
                    <p className="text-red-500 text-xs mt-1">This field is required</p>
                )}
                </div>

                <div>

                    {isSubmit ? (
                    'loading .....'
                    ) : (
                    <input type='submit'  />
                    )}
                </div>
            </form>

        </div>
    </section>
  )
}

export default page