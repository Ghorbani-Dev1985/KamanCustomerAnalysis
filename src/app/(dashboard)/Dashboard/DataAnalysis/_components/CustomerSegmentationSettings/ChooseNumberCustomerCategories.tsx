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
        {" "}
        در این قسمت می توانید انتخاب کنید که پس از محاسبه متد RFM، مشتریان شما
        به چند دسته تقسیم‌بندی شوند.
      </p>
      <div className="flex items-center gap-x-4">
        <div className="size-30 bg-gray-50 flex flex-col items-center rounded-md p-5">
          <div className="grid grid-cols-3 gap-x-1">
            <div className="min-h-16 min-w-8 bg-gray-200 rounded-sm"></div>
            <div className="min-h-16 min-w-8 bg-gray-200 rounded-sm"></div>
            <div className="min-h-16 min-w-8 bg-gray-200 rounded-sm"></div>
          </div>
          <p className="text-zinc-700">3 دسته</p>
        </div>
        <div className="size-30 bg-gray-50 flex flex-col items-center rounded-md p-5">
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            <div className="w-8 row-span-2 bg-gray-200 rounded-sm"></div>
            <div className="row-span-3 bg-gray-200 rounded-sm"></div>
            <div className="row-span-2 col-start-3 min-h-6 bg-gray-200 rounded-sm"></div>
            <div className="row-span-2 col-start-1 row-start-3 bg-gray-200 rounded-sm"></div>
            <div className="col-start-2 row-start-4 min-h-6 bg-gray-200 rounded-sm"></div>
            <div className="row-span-2 col-start-3 min-h-6 bg-gray-200 rounded-sm"></div>
          </div>
          <p className="text-zinc-700">6 دسته</p>
        </div>
      </div>
    </Fieldset>
  );
};

export default ChooseNumberCustomerCategories;
