import { Button } from '@nextui-org/react';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiSolidUserDetail } from 'react-icons/bi';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { AiOutlineUser } from "react-icons/ai";
import { RegisterUser } from 'services/AuthServices';
import TextField from 'ui/TextField';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidationSchema } from '@/constants/FormValidations';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<RegisterType>({ mode: "onChange" , resolver: yupResolver(RegisterValidationSchema) });
     
      const RegisterHandler: SubmitHandler<RegisterType> = async (data) => {
        let formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        try { 
          const {data: userInfo} =  await RegisterUser(formData)
          if(userInfo.isSuccess){
            toast.success("ثبت نام با موفقیت انجام شد")
            console.log(userInfo.data)
           // console.log(location.state.userinfo.key)
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
        className="w-full space-y-4"
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
        <TextField name="phone" type='tel' label="شماره موبایل یا ایمیل" register={register} required={true} errors={errors} ltr icon={<HiMiniDevicePhoneMobile className='size-6 text-primary-700'/>}/>
         <TextField
          name="password"
          type="password"
          label="کلمه عبور "
          register={register}
          required={true}
          errors={errors}
          showPassword={true}
        />
          <Button type="submit" fullWidth size="lg" color="primary">
           ایجاد حساب کاربری
        </Button>
      </form>
    </div>
  )
}

export default Register
