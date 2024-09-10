import { Button, Input, Spinner } from '@nextui-org/react'
import React from 'react'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import TextField from 'ui/TextField'

const SentOtpForm = ({SendOtpHandler , register , errors}:any) => {
  return (
    <form className="w-full space-y-6" onSubmit={SendOtpHandler}>
    <div className="flex w-full flex-wrap md:flex-nowrap">
   <Input variant="bordered" color="primary" name='phone' label="شماره موبایل" isRequired classNames={{inputWrapper: "border-primary-500"}} endContent={<HiMiniDevicePhoneMobile className='size-7 text-gray-600'/>} />
   <TextField name="phoneNumber" label=" شماره موبایل" register={register} required={true} errors={errors}  validationSchema={{
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
          }} ltr icon={<HiMiniDevicePhoneMobile className='size-7 text-gray-600'/>}/>
 </div>   
     {/* <Button disabled={isPendingOtp && true} fullWidth color="primary" className="py-6 disabled:opacity-50">
        {
            isPendingOtp ? <p className='flex-center gap-x-4'><Spinner color='white' size='md' /> در حال ارسال کد تایید</p> : "ارسال کد تایید"
        }
     </Button> */}
 </form>
  )
}

export default SentOtpForm
