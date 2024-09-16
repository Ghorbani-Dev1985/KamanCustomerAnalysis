'use client';
import { UserPassType } from "@/types/loginRegisterFormType";
import { Button, Spacer } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginWithEmailFN } from "services/AuthServices";
import TextField from "ui/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginWithEmailValidationSchema } from "@/constants/FormValidations";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { StoreTokenInCookie } from "@/utils/StoreTokenInCookie";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const LoginWithEmail = ({setStep} : {setStep: (step: number) => void}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPassType>({ mode: "onChange" , resolver: yupResolver(LoginWithEmailValidationSchema)});
  const {mutateAsync: mutateLogin} = useMutation({mutationFn : LoginWithEmailFN})
  const LoginWithEmailHandler: SubmitHandler<UserPassType> = async (data) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    try { 
      const userInfo =  await mutateLogin(formData)
      console.log(userInfo)
      if(userInfo.isSuccess){
      router.replace("/Overview")
      toast.success("ورود با موفقیت انجام شد")
      await StoreTokenInCookie(userInfo.access_token , userInfo.refresh_token)
      }else{
        toast.error("اطلاعات وارد شده صحیح نمی باشد")
      }
    } catch (error) {
      toast.error("خطایی رخ داده است")
      console.log(error)
    }   
  }
  return (
    <>
      <form
        className="w-full space-y-4 my-3"
        onSubmit={handleSubmit(LoginWithEmailHandler)}
      >
        <TextField
          name="username"
          label=" شماره موبایل یا ایمیل"
          register={register}
          required={true}
          errors={errors}
          ltr
          icon={<HiMiniDevicePhoneMobile className="size-6 text-primary-700" />}
        />
        <TextField
          name="password"
          type="password"
          label="کلمه عبور "
          register={register}
          required={true}
          errors={errors}
          showPassword={true}
        />
        <Spacer y={2.5}/>
        <Button type="submit" fullWidth size="lg" color="primary">
          ورود به حساب کاربری
        </Button>
      </form>
      <div onClick={() => setStep(2)} className="flex cursor-pointer my-3 text-zinc-500 hover:text-primary font-normal transition-colors">
        <p> رمز عبور خود را فراموش کرده اید؟ </p>
      </div>
    </>
  );
};

export default LoginWithEmail;
