"use client";
import Link from "next/link";
import { AddSVG } from "../../public/add";
import { BudgetSVG } from "../../public/budget";
import { HomeSVG } from "../../public/home";
import { ProfileSVG } from "../../public/profile";
import { TransactionSVG } from "../../public/transaction";
import { useState } from "react";

export default function BottomNavigation() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className="bottom-navigation relative h-[10%] flex items-center w-full">
      <div className="w-[50%] mr-5 flex justify-around gap-2 items-center">
        <Link onClick={() => setCurrentPage("home")} href="/">
          <HomeSVG
            fill={currentPage === "home" ? "#429690" : undefined}
            className="cursor-pointer"
          />
        </Link>
        <Link
          onClick={() => setCurrentPage("transactions")}
          href="/transactions"
        >
          <TransactionSVG
            fill={currentPage === "transactions" ? "#429690" : undefined}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <Link onClick={() => setCurrentPage("")} href="/add-transaction">
        <AddSVG className="absolute cursor-pointer left-44 -top-4" />
      </Link>
      <div className="w-[50%] ml-20 flex justify-around items-end">
        <Link onClick={() => setCurrentPage("budget")} href="/budget">
          <BudgetSVG fill={currentPage === "budget" ? "#429690" : undefined} />
        </Link>
        <Link onClick={() => setCurrentPage("profile")} href="/profile">
          <ProfileSVG
            fill={currentPage === "profile" ? "#429690" : undefined}
          />
        </Link>
      </div>
    </div>
  );
}
