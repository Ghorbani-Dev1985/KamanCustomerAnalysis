'use client';
import { UserPassType } from "@/types/loginRegisterFormType";
import { Button, Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLogoGmail } from "react-icons/bi";
import { LoginWithEmailFN } from "services/AuthServices";
import TextField from "ui/TextField";

const LoginWithEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserPassType>({ mode: "onChange" });
 
  const LoginWithEmailHandler: SubmitHandler<UserPassType> = async (data) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    try { 
      const {data: userInfo} =  await LoginWithEmailFN(formData)
      if(userInfo.isSuccess){
        toast.success("ورود با موفقیت انجام شد")
        console.log(userInfo.data)
       // console.log(location.state.userinfo.key)
      }else{
        toast.error("نام کاربری یا کلمه عبور نادرست می باشد")
      }
    } catch (error) {
      toast.error("خطایی رخ داده است")
      console.log(error)
    }   
  };
  return (
    <>
      <form
        className="w-full space-y-4"
        onSubmit={handleSubmit(LoginWithEmailHandler)}
      >
        <TextField
          name="username"
          label=" ایمیل"
          type="email"
          register={register}
          required={true}
          errors={errors}
          ltr
          validationSchema={{
            required: "لطفا ایمیل خود را وارد نمایید",
            minLength: {
              value: 3,
              message: "حداقل ۳ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 30,
              message: "حداکثر ۳۰ کاراکتر وارد نمایید",
            },
            // pattern: {
            //   value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
            //   message: "لطفا ایمیل صحیح وارد نمایید",
            // },
          }}
          icon={<BiLogoGmail className="size-6 text-primary-700" />}
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
              value: 8,
              message: "حداقل ۸ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 30,
              message: "حداکثر ۳۰ کاراکتر وارد نمایید",
            },
            // pattern: {
            //   value: /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
            //   message: "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد",
            // },
          }}
          showPassword={true}
        />
        <Spacer y={6}/>
        <Button type="submit" fullWidth size="lg" color="primary">
          ورود به حساب کاربری
        </Button>
      </form>
      <div className="flex my-3 text-zinc-500 font-normal">
        <p> رمز عبور خود را فراموش کرده اید؟ </p>
      </div>
    </>
  );
};

export default LoginWithEmail;
