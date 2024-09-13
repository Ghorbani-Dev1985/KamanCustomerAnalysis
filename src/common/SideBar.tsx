"use client";
import React from "react";
import MenuItemView from "./MenuItemView";

const SideBar = () => {
  return (
    <aside className="hidden lg:flex flex-col items-center lg:col-span-5 xl:col-span-4 min-h-screen h-full overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary-100">
    <MenuItemView />
    </aside>
  );
};

export default SideBar;
