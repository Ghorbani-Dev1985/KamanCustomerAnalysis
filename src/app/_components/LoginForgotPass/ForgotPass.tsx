import { ForgotPassValidationSchema } from '@/constants/FormValidations';
import { PhoneType } from '@/types/loginRegisterFormType';
import React from 'react'
import { useForm } from 'react-hook-form';
import { ChangePassword } from 'services/AuthServices'
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from 'ui/TextField';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { Button, Spacer } from '@nextui-org/react';
import toast from 'react-hot-toast';
import { BiChevronRight } from 'react-icons/bi';
const ForgotPass = ({setStep} : {setStep: (step: number) => void}) => {
    const {
        register,
        handleSubmit,
       reset,
        formState: { errors },
      } = useForm<PhoneType>({ mode: "onChange" , resolver: yupResolver(ForgotPassValidationSchema)});
    const ChangePasswordHandler = async (data: PhoneType) => {
        let formData = new FormData();
        formData.append("phone", data.phone);
        try {
          const {data} = await ChangePassword(formData);
          if(data.isSuccess){
              toast.success("رمز عبور جدید برای شما پیامک شد")
              setStep(1);
              reset();
          }else{
            toast.error("شماره وارد شده موجود نمی باشد")
          }
        } catch (error) {
            toast.error("خطایی رخ داده است")
        }

    }
  return (
    <>
    <form
    className="w-full space-y-4 my-3"
    onSubmit={handleSubmit(ChangePasswordHandler)}
    >  
    <div className="flex text-slate-500 hover:text-slate-300 transition-colors">
        <button onClick={() => setStep(1)} className='flex-center'>
          <BiChevronRight className="size-7" /> بازگشت
        </button>
      </div>
   
    <TextField name="phone" type='tel' label=" شماره موبایل" register={register} required={true} errors={errors} ltr icon={<HiMiniDevicePhoneMobile className='size-6 text-primary-700'/>}/>
    <Spacer y={2.5}/>
    <Button type="submit" fullWidth size="lg" color="primary">
         دریافت رمز عبور جدید
        </Button>
  </form>
    </>
  )
}

export default ForgotPass
