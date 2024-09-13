import React from "react";
import { Metadata } from "next";
import LoginRegister from "./_components/LoginRegisterTabs";
export const metadata: Metadata = {
  title: "ورود / ثبت نام",
  description:
    "در این پلتفرم می توانید اطلاعات فروش خود را وارد نمایید تا بتوانید مشتریان خود را بر اساس رفتار خریدشان دسته بندی نمایید",
};

const LoginRegisterPage = () => {
  return <LoginRegister />;
};

export default LoginRegisterPage;
