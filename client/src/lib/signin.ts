"use server";
import { ILoginForm, ILoginResponse } from "@/interfaces/signin";
import { httpCall } from "@/utils/api-helper";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IError } from "@/interfaces/common";

export async function signIn(payload: ILoginForm): Promise<IError> {
  const res = await httpCall.post<ILoginResponse>("/auth/signin", payload);
  const data = await res.json();
  console.log(data);
  if (data.access_token) {
    cookies().set("access_token", data.access_token);
    redirect("/");
  }
  return data;
}
