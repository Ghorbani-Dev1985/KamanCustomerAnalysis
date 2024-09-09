'use client';
import React, { useState } from 'react'
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, CardFooter} from "@nextui-org/react";
import Image from 'next/image';
import LoginWithEmail from './LoginWithEmail';
import LoginWithPhone from './LoginWithPhone/LoginWithPhone';

const LoginRegister = () => {
 
      
      const [selected, setSelected] = useState<React.Key>("login");
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
      size="md"
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

    </Tabs>
  </CardBody>
   <CardFooter className="flex-center"> 
   <p className="text-zinc-500 font-normal mb-3">
       © کپی رایت کمان <span className="font-sans">{new Date().getUTCFullYear()}</span>
            </p>
   </CardFooter>
</Card>

        </div>
        </section>
  )
}

export default LoginRegister
