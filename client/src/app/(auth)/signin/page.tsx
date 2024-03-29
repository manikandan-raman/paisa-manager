"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import { ILoginForm } from "@/interfaces/signin";
import { signIn } from "@/lib/signin";

export default function SignIn() {
  // const params = useSearchParams();
  const schema = yup.object({
    email: yup
      .string()
      .email("please enter valid email")
      .required("please enter email"),
    password: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: "please enter strong password" }
      )
      .required("please enter password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <h1 className="mt-8 text-2xl font-semibold text-primary">
        Paisa Manager
      </h1>
      {/* {params.get("isNewUser") && (
          <p className="mt-4 p-2 bg-primary text-white">
            Registration Success!!!, Login Now
          </p>
        )} */}
      <p className="mt-8 text-lg">Sign In</p>
      <form
        onSubmit={handleSubmit(async (data) => {
          const errors = await signIn(data);
          if (errors) {
            setError("password", { message: errors.message });
          }
        })}
        className="mt-6 w-full px-12 sm:px-36 md:px-[25%]"
      >
        <input
          className="mt-4 block w-full border rounded-lg p-4 focus:outline-none"
          autoComplete="email"
          type="text"
          id="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-red-500">{errors.email.message}</p>
        )}
        <input
          className="mt-4 block w-full border rounded-lg p-4 focus:outline-none"
          autoComplete="off"
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-1 text-red-500">{errors.password.message}</p>
        )}
        <button
          className="mt-4 p-4 text-white rounded-lg bg-primary w-full"
          type="submit"
        >
          Sign In
        </button>
      </form>

      <p className="mt-2">Or</p>
      <p className="mt-1">
        Are you new here?{" "}
        <Link href="/signup" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
}
