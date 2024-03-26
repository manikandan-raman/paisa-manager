"use client";
import { ShoppingSVG } from "../../../../public/shopping";
import { SettingsSVG } from "../../../../public/settings";
import { LogoutSVG } from "../../../../public/logout";
import { useState } from "react";

export default function Profile() {
  const [bottomPosition, setBottomPosition] = useState("-bottom-72");
  const handleLogout = () => {
    setBottomPosition(
      bottomPosition === "-bottom-72" ? "bottom-0" : "-bottom-72"
    );
  };
  return (
    <div className="relative h-[90%] overflow-hidden w-full bg-gray-100">
      <div className="pt-8 flex gap-4 items-center px-6">
        <ShoppingSVG className="bg-red-200 p-4 rounded-full" />
        <div>
          <p>Username</p>
          <p>Manikandan Raman</p>
        </div>
      </div>
      <div className="mt-6 mx-6 bg-white flex flex-col gap-4 py-2 rounded-xl">
        <div className="flex gap-4 items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
          <SettingsSVG />
          <p>Settings</p>
        </div>

        <div
          onClick={handleLogout}
          className="flex gap-4 items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <LogoutSVG />
          <p>Logout</p>
        </div>
      </div>

      <div
        className={`absolute w-full flex flex-col justify-center gap-3 pb-6 bg-white ${bottomPosition} rounded-l-3xl rounded-r-3xl`}
      >
        <p className="bg-primary w-16 h-1 mx-auto mt-2"></p>
        <p className="font-bold text-center pt-6">Logout</p>
        <p className="text-center">Are you sure do you wanna logout?</p>
        <div className="flex gap-2 p-3">
          <button className="w-1/2 p-2 bg-gray-200">No</button>
          <button className="w-1/2 py-2 bg-primary text-white rounded-lg">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
