import TransactionsList from "@/components/TransactionList";

export default function Transactions() {
  return (
    <div className="h-[90%] w-full px-4">
      <div className="pt-6">
        <select
          className="p-2 bg-white border-2 border-primary rounded-lg"
          name="transaction-filter"
          id="transaction-filter"
        >
          <option value="">Last 10 trans</option>
          <option value="">This month</option>
          <option value="">Last month</option>
          <option value="">Six months</option>
          <option value="">All</option>
        </select>
        <input
          className="block w-full border-2 border-primary mt-2 p-2 rounded-lg"
          type="text"
          name="search"
          id="search"
          placeholder="search"
        />
      </div>
      <div>
        <TransactionsList limit={100} offset={0} />
      </div>
    </div>
  );
}
