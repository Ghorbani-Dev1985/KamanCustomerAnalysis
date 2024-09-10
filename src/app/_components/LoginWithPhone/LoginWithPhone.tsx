import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import SentOtpForm from './SentOtpForm';
import CheckOTPForm from './CheckOtpForm';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const LoginWithPhone = () => {
    const [step, setStep] = useState(1);
    const {getValues , register , errors , handleSubmit} = useForm();
    const SendOtpHandler = async (data) => {
        try {
        //   const { message } = await mutateGetOtp(data);
          setStep(2);
        //   toast.success(message);
        } catch (error) {
        //   toast.error(error?.response?.data?.message);
        }
      };
    const RenderLoginSteps = () => {
      switch (step) {
            case 1:
                return <SentOtpForm   register={register}
                SendOtpHandler={handleSubmit(SendOtpHandler)}
                // isPendingOtp={isPendingOtp}
                errors={errors}/>
            case 2:
                return <CheckOTPForm  onBack={() => setStep((s) => s - 1)}
                phoneNumber={getValues("PhoneNumber")}
                onResendOtp={SendOtpHandler}
                // otpResponse={OtpResponse} 
                />
            default:
                return null
        }
    }
  return RenderLoginSteps();
}

export default LoginWithPhone

