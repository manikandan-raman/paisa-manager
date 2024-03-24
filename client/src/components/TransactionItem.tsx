import { ITransactions } from "@/interfaces/transaction-list";

export default function TransactionItem({
  transaction,
}: {
  transaction: ITransactions;
}) {
  return (
    <div className="item flex justify-between items-center">
      <div>
        <p>{transaction.category.name}</p>
        <p className="text-gray-400">{transaction.date}</p>
      </div>
      <div>
        <p
          className={
            transaction.type === "income"
              ? `text-primary text-lg`
              : `text-red-500 text-lg`
          }
        >
          {" "}
          {transaction.type === "income" ? "+" : "-"} &#8377;{" "}
          {transaction.amount ?? 0}
        </p>
      </div>
    </div>
  );
}
