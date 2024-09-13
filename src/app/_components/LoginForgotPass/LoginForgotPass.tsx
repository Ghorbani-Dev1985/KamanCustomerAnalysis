import React, { useState } from 'react'
import LoginWithEmail from './LoginWithEmail';
import ForgotPass from './ForgotPass';

const LoginForgotPass = () => {
    const [step, setStep] = useState(1);
    const LoginWithEmailForgotPassRender = () => {
        switch (step) {
            case 1:
                return <LoginWithEmail setStep={setStep}/>
            case 2:
                return <ForgotPass setStep={setStep}/>
            default:
                return null
        }
    }
  return LoginWithEmailForgotPassRender()
}

export default LoginForgotPass
