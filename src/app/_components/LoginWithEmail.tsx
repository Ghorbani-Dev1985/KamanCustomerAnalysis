'use client';
import { UserPassType } from "@/types/loginRegisterFormType";
import { Button, Spacer } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLogoGmail } from "react-icons/bi";
import { LoginWithEmailFN } from "services/AuthServices";
import TextField from "ui/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginWithEmailValidationSchema } from "@/constants/FormValidations";

const LoginWithEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserPassType>({ mode: "onChange" , resolver: yupResolver(LoginWithEmailValidationSchema)});
 
  const LoginWithEmailHandler: SubmitHandler<UserPassType> = async (data) => {
    let formData = new FormData();
    formData.append("username", data.email);
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
          name="email"
          label=" ایمیل"
          register={register}
          required={true}
          errors={errors}
          ltr
          icon={<BiLogoGmail className="size-6 text-primary-700" />}
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
