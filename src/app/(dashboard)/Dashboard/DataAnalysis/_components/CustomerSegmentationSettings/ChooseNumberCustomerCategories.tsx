import Fieldset from "@/common/Fieldset";
import { Switch } from "@nextui-org/react";
import React, { Dispatch, SetStateAction } from "react";

const ChooseNumberCustomerCategories = ({
  numCustomerCategories,
  setNumCustomerCategories,
}: {
  numCustomerCategories: string;
  setNumCustomerCategories: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Fieldset title="  انتخاب تعداد دسته بندی مشتریان ">
      <p>
        در این قسمت می توانید انتخاب کنید که پس از محاسبه متد RFM، مشتریان شما
        به چند دسته تقسیم‌بندی شوند.
      </p>
      <div className="flex items-center gap-x-4">
        <div onClick={() => setNumCustomerCategories("3")} className={`${numCustomerCategories === "3" && "border border-primary"} w-44 h-36 bg-gray-50 flex flex-col items-center rounded-md p-5 cursor-pointer`}>
          <div className="grid grid-cols-3 gap-x-1">
            <div className={`${numCustomerCategories === "3" ? "bg-primary" : "bg-gray-200"} min-h-[5.6rem] min-w-8  rounded-sm`}></div>
            <div className={`${numCustomerCategories === "3" ? "bg-primary" : "bg-gray-200"} min-w-8  rounded-sm`}></div>
            <div className={`${numCustomerCategories === "3" ? "bg-primary" : "bg-gray-200"} min-w-8  rounded-sm`}></div>
          </div>
          <p className={`${numCustomerCategories === "3" ? "text-primary" : "text-zinc-700"}`}>3 دسته</p>
        </div>
        <div onClick={() => setNumCustomerCategories("6")} className={`${numCustomerCategories === "6" && "border border-primary"} w-44 h-36 bg-gray-50 flex flex-col items-center rounded-md p-5 cursor-pointer`}>
          <div className="grid grid-cols-3 grid-rows-4 gap-1">
            <div className={`${numCustomerCategories === "6" ? "bg-primary" : "bg-gray-200"} w-8 row-span-2 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "6" ? "bg-primary" : "bg-gray-200"} row-span-3 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "6" ? "bg-primary" : "bg-gray-200"} row-span-2 col-start-3 min-h-5 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "6" ? "bg-primary" : "bg-gray-200"} row-span-2 col-start-1 row-start-3 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "6" ? "bg-primary" : "bg-gray-200"} col-start-2 row-start-4 min-h-5 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "6" ? "bg-primary" : "bg-gray-200"} row-span-2 col-start-3 min-h-5 rounded-sm`}></div>
          </div>
          <p className={`${numCustomerCategories === "6" ? "text-primary" : "text-zinc-700"}`}>6 دسته</p>
        </div>
        <div onClick={() => setNumCustomerCategories("11")} className={`${numCustomerCategories === "11" && "border border-primary"} w-44 h-36 bg-gray-50 flex flex-col items-center rounded-md p-5 cursor-pointer`}>
          <div className="grid grid-cols-4 grid-rows-4 gap-1 dir-ltr">
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} rounded-sm w-8 min-h-5`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-span-2 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-start-2 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-span-2 row-start-2 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-start-2 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-span-2 row-start-3 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-span-2 col-start-3 row-start-3 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} row-span-2 col-start-4 row-start-3 rounded-sm`}></div>
            <div className={`${numCustomerCategories === "11" ? "bg-primary" : "bg-gray-200"} col-start-2 row-start-4 rounded-sm`}></div>
          </div>
          <p className={`${numCustomerCategories === "11" ? "text-primary" : "text-zinc-700"}`}>11 دسته</p>
        </div>
      </div>
    </Fieldset>
  );
};

export default ChooseNumberCustomerCategories;
