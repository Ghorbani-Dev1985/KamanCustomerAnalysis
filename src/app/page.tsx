'use client';
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "ui/TextField";
export const dynamic = "force-dynamic";

const HomePage = ({
  searchParams,
}: {
  searchParams: Record<string, any>;
}) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all" });
  return (
    <section className="w-full h-screen bg-loginBg bg-cover bg-center flex-center">
      <div className="container flex-center">
 <div className="w-full max-w-md bg-white flex flex-col items-center gap-y-6 rounded-2xl p-4">
    <Image
                width={224}
                height={300}
                alt="کمان"
                placeholder="blur"
                blurDataURL={`/images/logo/logo.png`} 
                src={`/images/logo/logo.png`}
                />
                 <h4 className="font-bold text-xl">
              ورود به حساب کاربری
            </h4>
            <form className="w-full">
                <TextField name="username" label="نام کاربری" register={register} required={true} errors={errors} validationSchema={{
                required: "لطفا نام و نام خانوادگی را وارد نمایید",
                minLength: {
                  value: 3,
                  message: "حداقل ۳ کاراکتر وارد نمایید  ",
                },
                maxLength: {
                  value: 30,
                  message: "حداکثر ۳۰ کاراکتر وارد نمایید",
                },
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/g,
                  message: "لطفا فقط حروف فارسی وارد نمایید",
                },
              }} />
            </form>
            <p className="text-zinc-500 font-normal mb-3">
              © کپی رایت کمان <span className="font-sans">{new Date().getUTCFullYear()}</span>
            </p>
    </div>
      </div>
   
  </section>
  );
};

export default HomePage;
