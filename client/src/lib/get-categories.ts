"use server";
import { httpCall } from "@/utils/api-helper";
import { ICategory } from "@/interfaces/transaction-list";

export async function getCategories(): Promise<ICategory[]> {
  const res = await httpCall.get<ICategory[]>(`/category`);
  const data: ICategory[] = await res.json();
  console.log(data);
  return data;
}
