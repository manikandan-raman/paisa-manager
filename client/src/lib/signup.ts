"use server";
import { httpCall } from "@/utils/api-helper";
import { redirect } from "next/navigation";
import { IError } from "@/interfaces/common";
import { IRegistrationForm, ISignUpResponse } from "@/interfaces/signup";

export async function signUp(
  payload: IRegistrationForm
): Promise<IError | void> {
  const res = await httpCall.post<ISignUpResponse>("/auth/signup", payload);
  const data: ISignUpResponse[] | IError = await res.json();
  console.log(data);
  if (Array.isArray(data) && "id" in data[0]) {
    redirect("/signin?isNewUser=true");
  }
  if (!Array.isArray(data) && "message" in data) {
    return data;
  }
}
