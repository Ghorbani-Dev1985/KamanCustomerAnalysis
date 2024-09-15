import React from "react";
import { Metadata } from "next";
import LoginRegister from "./_components/LoginRegisterTabs";
export const metadata: Metadata = {
  title: "ورود / ثبت نام",
};

const LoginRegisterPage = () => {
  return <LoginRegister />;
};

export default LoginRegisterPage;
