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
import LoginWithEmail from "./LoginWithEmail";
import LoginWithPhone from "./LoginWithPhone/LoginWithPhone";
import Register from "./Register";

const LoginRegister = () => {
  const [selected, setSelected] = useState<Key>("login");
  return (
    <section className="w-full h-screen bg-loginBg bg-cover bg-center flex-center">
      <div className="container flex-center">
        <Card className="w-full md:max-w-lg">
          <CardHeader className="flex-center">
            <Image
              width={224}
              height={300}
              alt="کمان"
              placeholder="blur"
              blurDataURL={`/images/logo/logo.png`}
              src={`/images/logo/logo.png`}
            />
          </CardHeader>
          <CardBody className="overflow-hidden ">
            <Tabs
              fullWidth
              size="lg"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="ورود با موبایل">
                <LoginWithPhone />
              </Tab>
              <Tab key="sign-up" title="ورود با ایمیل">
                <LoginWithEmail />
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
