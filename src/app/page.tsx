import React from "react";

export const dynamic = "force-dynamic";
import LoginRegister from "./_components/LoginRegisterTabs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ورود / ثبت نام",
  description: "در این پلتفرم می توانید اطلاعات فروش خود را وارد نمایید تا بتوانید مشتریان خود را بر اساس رفتار خریدشان دسته بندی نمایید",
};

const HomePage = ({
  searchParams,
}: {
  searchParams: Record<string, any>;
}) => {


  return (
     <LoginRegister />
  );
};

export default HomePage;
