import { Button, Input, Spinner } from '@nextui-org/react'
import React from 'react'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import TextField from 'ui/TextField'

const SentOtpForm = ({SendOtpHandler , register , errors , isPendingOtp}:any) => {
  return (
    <form className="w-full space-y-6" onSubmit={SendOtpHandler}>
    <div className="flex w-full flex-wrap md:flex-nowrap my-4">
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
