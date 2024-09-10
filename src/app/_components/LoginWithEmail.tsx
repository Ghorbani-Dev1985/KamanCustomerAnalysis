'use client';
import { LoginWhitEmailType } from "@/types/loginRegisterFormType";
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiEye, HiEyeSlash, HiMiniUser } from "react-icons/hi2";
import { LoginWithEmailFN } from "services/AuthServices";
import TextField from "ui/TextField";

const LoginWithEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginWhitEmailType>({ mode: "onChange" });
  const [isVisible, setIsVisible] = useState(false);
  const HandleLoginWithEmail:SubmitHandler<LoginWhitEmailType> = async (data) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    try { 
      const {data: userInfo} =  await LoginWithEmailFN(formData)
      if(userInfo.isSuccess){
        toast.success("ورود با موفقبت انجام شد")
        console.log(userInfo.data)
       // console.log(location.state.userinfo.key)
      }else{
        toast.error("نام کاربری یا کلمه عبور نادرست می باشد")
      }
    } catch (error) {
      toast.error("خطایی رخ داده است")
    }   
  };
  return (
    <>
      <form
        className="w-full space-y-4"
        onSubmit={handleSubmit(HandleLoginWithEmail)}
      >
        <TextField
          name="username"
          label=" ایمیل"
          register={register}
          required={true}
          errors={errors}
          validationSchema={{
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
          }}
          icon={<HiMiniUser className="size-7 text-gray-600" />}
        />
        <TextField
          name="password"
          type="password"
          label="کلمه عبور "
          register={register}
          required={true}
          errors={errors}
          validationSchema={{
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
          }}
          icon={
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <HiEyeSlash className="size-7 text-gray-600" />
              ) : (
                <HiEye className="size-7 text-gray-600" />
              )}
            </button>
          }
        />
        <Spacer y={6}/>
        <Button type="submit" fullWidth size="lg" color="primary">
          ورود به حساب کاربری
        </Button>
      </form>
      <div className="flex-between my-3 text-sm md:text-base">
        <p>فراموشی رمز عبور</p>
        <Link href="/register">ایجاد حساب کاربری </Link>
      </div>
    </>
  );
};

export default LoginWithEmail;
