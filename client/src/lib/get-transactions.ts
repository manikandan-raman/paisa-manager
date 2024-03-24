import { IFilterOptions } from "@/interfaces/common";
import { ITransactions } from "@/interfaces/transaction-list";
import { httpCall } from "@/utils/api-helper";
import { cookies } from "next/headers";

export async function getTransactionsListByUser({
  limit,
}: IFilterOptions): Promise<ITransactions[]> {
  const user_id = cookies().get("current_user_id")?.value;
  const res = await httpCall.get<ITransactions>(
    `/user/${user_id}/transactions?limit=${limit}`
  );
  const data: ITransactions[] = await res.json();
  return data;
}
