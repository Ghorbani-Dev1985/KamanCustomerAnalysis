import { Button } from '@nextui-org/react';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLogoGmail, BiSolidUserDetail } from 'react-icons/bi';
import { HiMiniDevicePhoneMobile, HiMiniUser } from 'react-icons/hi2';
import { AiOutlineUser } from "react-icons/ai";
import { RegisterUser } from 'services/AuthServices';
import TextField from 'ui/TextField';
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<RegisterType>({ mode: "onChange" });
     
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
          ltr
          validationSchema={{
            required: "لطفا نام خود را وارد نمایید",
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
          icon={<BiSolidUserDetail className="size-6 text-primary-700" />}
        />
          <TextField
          name="last_name"
          label=" نام خانوادگی"
          register={register}
          required={true}
          errors={errors}
          ltr
          validationSchema={{
            required: "لطفا نام خانوادگی خود را وارد نمایید",
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
          icon={<AiOutlineUser className="size-6 text-primary-700" />}
        />
        <TextField name="phone" type='tel' label=" شماره موبایل" register={register} required={true} errors={errors}  validationSchema={{
            required: "لطفا شماره موبایل را وارد نمایید",
            minLength: {
              value: 11,
              message: "حداقل ۱۱ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 11,
              message: "حداکثر ۱۱ کاراکتر وارد نمایید",
            },
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
              message: "لطفا شماره موبایل صحیح وارد نمایید",
            },
          }} ltr icon={<HiMiniDevicePhoneMobile className='size-6 text-primary-700'/>}/>
           <TextField
          name="username"
          label=" ایمیل"
          type='email'
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
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
              message: "لطفا ایمیل صحیح وارد نمایید",
            },
          }}
          icon={<BiLogoGmail className="size-6 text-primary-700" />}
        />
         <TextField
          name="username"
          label=" نام کاربری"
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
            pattern: {
                value: /^[a-zA-Z0-9_-]{8,15}$/g,
                message: "نام کاربری معتبر نمی باشد کاراکترهای (a-zA-Z0-9_-) مجاز می باشند",
              },
          }}
          icon={<HiMiniUser className="size-6 text-primary-700" />}
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
            pattern: {
              value: /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
              message: "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد",
            },
          }}
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
