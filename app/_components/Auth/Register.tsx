
import { useState} from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "@/app/_types/User";
import { registerUser } from "@/app/_actions/registerUser";
import { Chip, Spinner } from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";
type CheckboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");

  const [isVendor, setIsVendor] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const userdata = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: isVendor ? "vendor" : "user",
    };
    setIsSubmit(true);
    try {
        const resp = await registerUser(userdata);
        if(resp.code == 201){
            if(resp.data.role == 'user'){
                router.push('/')
            }else {
                router.push('/vendor-dashbaord')
            }

        }else {
            setError(resp.msg);
        }
    } catch (er: unknown) {
        if (er instanceof Error) {
            console.error(er.message);
            setError(er.message);
          } else if (typeof er === 'object' && er !== null && 'msg' in er) {

          } else {
            setError('An unexpected error occurred');
          }
    }
    setIsSubmit(false);
  };



const onChange: CheckboxChangeHandler = (event) => {
  const isChecked = event.target.checked;
    setIsVendor(isChecked)
};

  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Welcome back
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {error && <Chip color="danger">{error}</Chip>}

        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("username", { required: true })}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
            placeholder="Name"
          />
          {errors.username && (
            <span className="text-red-500 text-xs mt-1">
              This field is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            {...register("email", { required: true,pattern: {
                // Comprehensive email regex validation
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address"
              }, })}
            type="email"
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>

        {isVendor && (
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              {...register("phone", { required: true })}
              type="phone"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm transition duration-300 ease-in-out"
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        )}

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
        {/* <Checkbox className="text-xl text-red-400"  onChange={onChange}>Register as a Vendor</Checkbox> */}
        <Checkbox onChange={onChange} size="sm" color="success">Register as a Vendor</Checkbox>
        <div>
          <motion.button
            type="submit"
            disabled={isSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          >
            {isSubmit ? (
              <Spinner size="sm" color="warning" />
            ) : (
              <span>Register</span>
            )}
          </motion.button>
        </div>
      </form>
    </>
  );
};

export default Register;
