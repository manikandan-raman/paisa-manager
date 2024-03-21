export default function DashboardCard() {
  return (
    <div className="card flex flex-col justify-center gap-4 absolute p-4 mx-5 h-56 bg-primaryDark top-28 left-0 right-0 rounded-3xl shadow-sm shadow-gray-200">
      <div className="mt-3 flex justify-between">
        <div>
          <p className="text-md">Total Balance ^</p>
          <p className="text-3xl font-semibold">&#8377; 2000.00</p>
        </div>
        <div>
          <p className="text-4xl">...</p>
        </div>
      </div>
      <div>
        <div className="mt-3 flex justify-between">
          <div>
            <p className="text-md">&uarr; Income</p>
            <p className="text-xl font-semibold">&#8377; 2000.00</p>
          </div>
          <div>
            <p className="text-md">&darr; Expense</p>
            <p className="text-xl font-semibold">&#8377; 2000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
