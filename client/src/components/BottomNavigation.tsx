import { AddSVG } from "../../public/add";
import { BudgetSVG } from "../../public/budget";
import { HomeSVG } from "../../public/home";
import { ProfileSVG } from "../../public/profile";
import { TransactionSVG } from "../../public/transaction";

export default function BottomNavigation() {
  return (
    <div className="relative h-[10%] flex items-start w-full">
      <div className="w-[50%] mr-5 flex justify-around gap-2 items-center">
        <HomeSVG className="cursor-pointer" />
        <TransactionSVG className="cursor-pointer" />
      </div>
      <AddSVG className="absolute cursor-pointer left-44 -top-4" />
      <div className="w-[50%] ml-20 flex justify-around items-end">
        <BudgetSVG />
        <ProfileSVG />
      </div>
    </div>
  );
}
