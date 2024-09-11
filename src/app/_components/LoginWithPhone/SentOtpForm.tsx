import { LoginWithPhoneValidationSchema } from '@/constants/FormValidations'
import { Button, Input, Spinner } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import TextField from 'ui/TextField'
import { yupResolver } from "@hookform/resolvers/yup";

const SentOtpForm = ({SendOtpHandler , isPendingOtp}:any) => {
  const {register , formState: { errors }, handleSubmit} = useForm({ mode: "onChange" , resolver: yupResolver(LoginWithPhoneValidationSchema)});
  return (
    <form className="w-full" onSubmit={handleSubmit(SendOtpHandler)}>
    <div className="flex w-full flex-wrap md:flex-nowrap my-6">
   <TextField name="phone" type='tel' label=" شماره موبایل" register={register} required={true} errors={errors} ltr icon={<HiMiniDevicePhoneMobile className='size-6 text-primary-700'/>}/>
 </div>   
     <Button disabled={isPendingOtp && true} fullWidth color="primary" size='lg' className="disabled:bg-gray-500 disabled:opacity-70">
        {
            isPendingOtp ? <p className='flex-center gap-x-4'><Spinner color='white' size='md' /> در حال ارسال کد تایید</p> : "ارسال کد تایید"
        }
     </Button>
 </form>
  )
}

export default SentOtpForm
