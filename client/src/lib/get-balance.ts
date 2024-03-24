import { ITransactionBalanceResponse } from "@/interfaces/transaction-balance";
import { httpCall } from "@/utils/api-helper";
import { cookies } from "next/headers";

export async function getBalance(): Promise<ITransactionBalanceResponse> {
  const user_id = cookies().get("current_user_id")?.value;
  const res = await httpCall.get<ITransactionBalanceResponse>(
    `/user/${user_id}/transactions/balance`
  );
  const data: ITransactionBalanceResponse = await res.json();
  return data;
}
