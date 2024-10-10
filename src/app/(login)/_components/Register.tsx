import { Button, Spinner } from '@nextui-org/react';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLogoGmail, BiSolidUserDetail } from 'react-icons/bi';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { AiOutlineUser } from "react-icons/ai";
import { RegisterUser } from 'services/AuthServices';
import TextField from 'ui/TextField';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidationSchema } from '@/constants/FormValidations';
import { RegisterType } from '@/types/loginRegisterFormType';
import { useMutation } from '@tanstack/react-query';

const Register = () => {
    const {
        register,
        handleSubmit,
       reset,
        formState: { errors },
      } = useForm<RegisterType>({ mode: "onChange" , resolver: yupResolver(RegisterValidationSchema)});
      const {isPending ,mutateAsync: mutateRegisterUser} = useMutation({mutationFn : RegisterUser})
      const RegisterHandler: SubmitHandler<RegisterType> = async (data) => {
        let formData = new FormData();
        formData.append("username", data.phone);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        try { 
          const userInfo = await mutateRegisterUser(formData)
          if(userInfo.isSuccess){
            toast.success("ثبت نام انجام شد و اطلاعات ورود پیامک شد")
            reset()
          }else{
            toast.error("ثبت نام انجام نشد")
          }
        } catch (error) {
          toast.error("خطایی رخ داده است")
          console.log(error)
        }   
      };
  return (
    <div>
      <form
        className="w-full space-y-4 my-3"
        onSubmit={handleSubmit(RegisterHandler)}
      >
         <TextField
          name="first_name"
          label=" نام"
          register={register}
          required={true}
          errors={errors}
          icon={<BiSolidUserDetail className="size-6 text-primary-700" />}
        />
          <TextField
          name="last_name"
          label=" نام خانوادگی"
          register={register}
          required={true}
          errors={errors}
          icon={<AiOutlineUser className="size-6 text-primary-700" />}
        />
        <TextField name="phone" type='tel' label="شماره موبایل " register={register} required={true} errors={errors} ltr icon={<HiMiniDevicePhoneMobile className='size-6 text-primary-700'/>}/>
        <TextField name="email" label=" ایمیل" register={register} required={true} errors={errors} ltr icon={<BiLogoGmail className='size-6 text-primary-700'/>}/>
          <Button type="submit" disabled={isPending && true} fullWidth size="lg" color="primary">
          {
            isPending ? <Spinner size='md' color='white'/> : " ایجاد حساب کاربری"
          }
        </Button>
      </form>
    </div>
  )
}

export default Register
