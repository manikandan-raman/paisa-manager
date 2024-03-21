import TransactionItem from "./TransactionItem";

export default function TransactionsList() {
  return (
    <div className="mt-4 list flex flex-col gap-2">
      <TransactionItem isIncome={true} />
      <TransactionItem isIncome={false} />
      <TransactionItem isIncome={true} />
    </div>
  );
}
