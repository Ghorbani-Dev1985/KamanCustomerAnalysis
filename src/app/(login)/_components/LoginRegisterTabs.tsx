"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import Image from "next/image";
import { Key } from '@react-types/shared';
import Register from "./Register";
import LoginForgotPass from "./LoginForgotPass/LoginForgotPass";

const LoginRegister = () => {
  const [selected, setSelected] = useState<Key>("login");
  return (
    <section className="w-full h-screen bg-loginBg bg-cover bg-center flex-center">
      <div className="container flex-center">
        <Card className="w-full md:max-w-lg">
          <CardHeader className="flex-center">
            <div className="min-h-36">
          <Image
        width={250}
        height={115}
        alt="کمان"
        className="my-4"
        placeholder="blur"
        blurDataURL="/images/logo/logo.png"
        src="/images/logo/logo.png"
      />
            </div>
          </CardHeader>
          <CardBody className="overflow-hidden ">
            <Tabs
              fullWidth
              size="lg"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="ورود به حساب کاربری">
                <LoginForgotPass />
              </Tab>
              <Tab key="register" title=" ایجاد حساب کاربری">
                <Register />
              </Tab>
            </Tabs>
          </CardBody>
          <CardFooter className="flex-center">
            <p className="text-zinc-500 font-normal mb-3">
              © کپی رایت کمان
              <span className="font-sans">{new Date().getUTCFullYear()}</span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default LoginRegister;
