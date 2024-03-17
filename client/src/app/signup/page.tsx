"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IRegistrationForm, ISignUpResponse } from "@/interfaces/signup";
import { httpCall } from "@/utils/api-helper";

export default function SignUp() {
  const router = useRouter();
  const schema = yup.object({
    name: yup.string().required("please enter name"),
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
  const handleRegistration = async (payload: IRegistrationForm) => {
    const data = await httpCall.post<ISignUpResponse[]>(
      "/api/auth/signup",
      payload
    );
    if (data[0].id) {
      router.push("/signin?isNewUser=true");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
  });
  return (
    <main className="flex w-screen min-h-svh flex-col justify-center items-center">
      <h1 className="mt-8 text-2xl font-semibold text-primary">
        Paisa Manager
      </h1>
      <p className="mt-6 text-lg">Sign Up</p>
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="mt-8 w-full px-12 sm:px-36 md:px-[25%]"
      >
        <input
          className="block w-full border rounded-lg p-4 focus:outline-none"
          autoComplete="name"
          type="text"
          id="name"
          placeholder="Enter name"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-red-500">{errors.name.message}</p>
        )}
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
          Sign Up
        </button>
      </form>

      <p className="mt-2">Or</p>
      <p className="mt-1">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary">
          Login
        </Link>
      </p>
    </main>
  );
}
