"use server";
import { ILoginForm, ILoginResponse } from "@/interfaces/signin";
import { httpCall } from "@/utils/api-helper";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IError } from "@/interfaces/common";

export async function signIn(payload: ILoginForm): Promise<IError | void> {
  const res = await httpCall.post<ILoginResponse>("/auth/signin", payload);
  const data: ILoginResponse | IError = await res.json();
  if ("access_token" in data && data.access_token) {
    cookies().set("access_token", data.access_token);
    cookies().set("current_user_id", data.user.id);
    redirect("/");
  } else if ("message" in data) {
    return data;
  }
}
