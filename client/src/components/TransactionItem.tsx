import { ITransactions } from "@/interfaces/transaction-list";
import { ShoppingSVG } from "../../public/shopping";

export default function TransactionItem({
  transaction,
}: {
  transaction: ITransactions;
}) {
  return (
    <div className="item flex justify-between items-center bg-gray-50 p-2 rounded-lg">
      <div className="flex gap-2">
        <ShoppingSVG
          className="bg-red-200 p-3 rounded-lg"
          width={45}
          height={45}
        />
        <div>
          <p>{transaction.category.name}</p>
          <p className="text-sm text-start text-gray-400">{transaction.date}</p>
          {/* <p className="text-sm text-gray-400">{transaction.description}</p> */}
        </div>
      </div>
      <div>
        <p
          className={
            transaction.type === "income"
              ? `text-primary text-md`
              : `text-red-500 text-md`
          }
        >
          {" "}
          {transaction.type === "income" ? "+" : "-"} &#8377;{" "}
          {transaction.amount ?? 0}
        </p>
        {/* <p className="text-sm text-end text-gray-400">{transaction.date}</p> */}
      </div>
    </div>
  );
}
