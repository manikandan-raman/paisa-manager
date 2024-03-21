export default function TransactionItem({
  isIncome = true,
}: {
  isIncome: boolean;
}) {
  return (
    <div className="item flex justify-between items-center">
      <div>
        <p>Upwork</p>
        <p className="text-gray-400">Today</p>
      </div>
      <div>
        <p
          className={isIncome ? `text-primary text-lg` : `text-red-500 text-lg`}
        >
          {" "}
          {isIncome ? "+" : "-"} &#8377; 2000.00
        </p>
      </div>
    </div>
  );
}
