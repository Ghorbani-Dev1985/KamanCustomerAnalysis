"use client";

import { Button, Spinner } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiAlarm, BiChevronRight } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import OTPInput from "react-otp-input";
import { CheckOtp } from "services/AuthServices";
const RESEND_TIME = 90;

const CheckOTPForm = ({ phoneNumber, onResendOtp, otpResponse, onBack }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();
  const { isPending, mutateAsync: mutateCheckOtp } = useMutation({
    mutationFn: CheckOtp,
  });
  const CheckOtpHandler = async (event) => {
    event.preventDefault();
    try {
      // const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.replace("/");
      } else {
        router.replace("/completeProfile");
      }
    } catch (error) {
      // toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  return (
    <>
      <div className="absolute right-2 text-slate-500 hover:text-slate-300 transition-colors">
        <button onClick={onBack}>
          <BiChevronRight className="size-7" />
        </button>
      </div>
      <p className="flex-center font-normal my-5"> لطفا کد تایید را وارد نمایید </p>
      {/* {otpResponse && (
        <p className="flex-center gap-1.5 my-4">
          {otpResponse?.message}
          <button onClick={onBack}>
            <CiEdit className="size-6 text-sky-500" />
          </button>
        </p>
      )} */}
      <form onSubmit={CheckOtpHandler} className="w-full">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderInput={(props) => (
            <input type="number" className="appearance-none" {...props} />
          )}
          renderSeparator={<span> - </span>}
          containerStyle="flex flex-row-reverse justify-center mb-7"
          inputStyle={{
            width: "2.2rem",
            padding: "0.5rem",
            borderRadius: ".5rem",
            margin: "0 .2rem",
            border: "1px solid #2c51a3",
            outline: "none",
          }}
        />
        <Button disabled={isPending && true} fullWidth color="primary" size='lg' className="disabled:bg-gray-500 disabled:opacity-70">
        {
            isPending ? <p className='flex-center gap-x-4'><Spinner color='white' size='md' /> در حال ارسال کد تایید</p> : "ارسال کد تایید"
        }
     </Button>
        <div className="flex-center my-4 text-zinc-600 text-sm font-normal">
          {time > 0 ? (
            <p className="flex-center gap-1">
              <BiAlarm className="size-4" /> {time} ثانیه تا ارسال مجدد کد
            </p>
          ) : (
            <button onClick={onResendOtp}>ارسال مجدد کد؟</button>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckOTPForm;