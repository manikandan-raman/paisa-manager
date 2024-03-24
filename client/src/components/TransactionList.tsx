import { getTransactionsListByUser } from "@/lib/get-transactions";
import TransactionItem from "./TransactionItem";

export default async function TransactionsList() {
  const transactions = await getTransactionsListByUser({ limit: 3, offset: 0 });
  return (
    <div className="mt-4 list flex flex-col gap-2">
      {transactions &&
        transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
    </div>
  );
}
