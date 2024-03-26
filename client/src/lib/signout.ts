"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOut(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete("current_user_id");
  cookieStore.delete("access_token");
  redirect("/signin");
}
