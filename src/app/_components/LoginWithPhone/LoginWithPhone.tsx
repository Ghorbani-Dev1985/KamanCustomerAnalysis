import React, { useState } from 'react'
import SentOtpForm from './SentOtpForm';
import CheckOTPForm from './CheckOtpForm';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { SendOtp } from 'services/AuthServices';

const LoginWithPhone = () => {
    const [step, setStep] = useState(2);
   const {getValues} = useForm()
    const {
      isPending: isPendingOtp,
      data: OtpResponse,
      mutateAsync: mutateGetOtp,
    } = useMutation({
      mutationFn: SendOtp,
    });
    const SendOtpHandler = async (data) => {
        try {
          const { userInfo } = await mutateGetOtp(data);
          if(userInfo.isSuccess){
            toast.success("کد با موفقیت ارسال شد")
            setStep(2);
            console.log(userInfo.data)
           // console.log(location.state.userinfo.key)
          }else{
            toast.error("لطفا شماره موبایل خود را به درستی وارد نمایید")
          }
        } catch (error) {
          toast.error("خطایی رخ داده است")
          console.log(error)
        }
      };
    const RenderLoginSteps = () => {
      switch (step) {
            case 1:
                return <SentOtpForm 
                SendOtpHandler={SendOtpHandler}
                 isPendingOtp={isPendingOtp}
                />
            case 2:
                return <CheckOTPForm  onBack={() => setStep((s) => s - 1)}
                phoneNumber={getValues("PhoneNumber")}
                onResendOtp={SendOtpHandler}
                 otpResponse={OtpResponse} 
                />
            default:
                return null
        }
    }
  return RenderLoginSteps();
}

export default LoginWithPhone

