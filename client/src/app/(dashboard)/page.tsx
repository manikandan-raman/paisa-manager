import TransactionsList from "@/components/TransactionList";
import DashboardCard from "@/components/DashboardCard";

export default async function Home() {
  return (
    <>
      <div className="h-[40%] w-full bg-primary rounded-bl-[25%] rounded-br-[25%] relative text-white">
        <div className="px-5 pt-6">
          <div>
            <p>Good Afternoon,</p>
            <p className="text-xl">Manikandan Raman</p>
          </div>
          {/* TODO: Notification Logo */}
        </div>
        <DashboardCard />
      </div>
      <div className="h-[50%] text-black pt-16 px-5 z-2">
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Transactions History</p>
          <p>See all</p>
        </div>
        <TransactionsList limit={3} offset={0} />
      </div>
    </>
  );
}
