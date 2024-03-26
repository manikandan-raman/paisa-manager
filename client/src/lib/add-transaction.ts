"use server";
import { httpCall } from "@/utils/api-helper";
import { redirect } from "next/navigation";
import { IError } from "@/interfaces/common";
import { ITransactionForm, ITransactions } from "@/interfaces/transaction-list";
import { cookies } from "next/headers";

export async function addTransaction(
  payload: ITransactionForm
): Promise<IError | void> {
  const user_id = cookies().get("current_user_id")?.value;
  const res = await httpCall.post<ITransactions>(
    `/user/${user_id}/transactions`,
    payload
  );
  const data: ITransactions | IError = await res.json();
  console.log(data);
  if (Array.isArray(data) && "id" in data[0]) {
    redirect("/");
  }
  if (!Array.isArray(data) && "message" in data) {
    return data;
  }
}
