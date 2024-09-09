import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeSlash, HiMiniUser } from 'react-icons/hi2';
import TextField from 'ui/TextField';

const LoginWithEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({ mode: "onChange" });
      const [isVisible, setIsVisible] = useState(false);
      const HandleLoginWithEmail = (data) => {
         console.log(data)
      }
  return (
    <>
       <form className="w-full space-y-6" onSubmit={handleSubmit(HandleLoginWithEmail)}>
                <TextField name="email" label=" ایمیل" register={register} required={true} errors={errors} validationSchema={{
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
            }} icon={<HiMiniUser className="size-7 text-gray-600"/>}/>
                <TextField name="password" type="password" label="کلمه عبور " register={register} required={true} errors={errors} validationSchema={{
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
              }} icon={
                <button type="button" className="focus:outline-none" onClick={() => setIsVisible(!isVisible)}>
                   {
                       isVisible ? <HiEyeSlash className="size-7 text-gray-600"/> : <HiEye className="size-7 text-gray-600"/>
                    }
                </button>
              }/>
              <Button type="submit" fullWidth className="py-6" color="primary">ورود به حساب کاربری</Button>
            </form>
            <div className='flex-between my-3 text-sm md:text-base'>
            <p>فراموشی رمز عبور</p>
            <Link href="/register">
                ایجاد حساب کاربری       </Link>
            </div>
                    </>
  )
}

export default LoginWithEmail
