import * as yup from "yup";
export const RegisterValidationSchema = yup.object().shape({
    first_name: yup
      .string()
      .matches(/^[\u0600-\u06FF\s]+$/ , "فقط حروف فارسی مجاز است")
      .trim()
      .min(3, "نام باید حداقل 3 کاراکتر باشد")
      .max(30, "نام باید حداکثر 30 کاراکتر باشد")
      .required("لطفا نام را وارد نمایید"),
      last_name: yup
      .string()
      .matches(/^[\u0600-\u06FF\s]+$/ , "فقط حروف فارسی مجاز است")
      .trim()
      .min(3, "نام باید حداقل 3 کاراکتر باشد")
      .max(30, "نام باید حداکثر 30 کاراکتر باشد")
      .required("لطفا نام خانوادگی را وارد نمایید"),
      phone: yup
      .string()
      .test('validPhoneEmail' , 'لطفا شماره موبایل یا ایمیل را به درستی وارد نمایید', 
        function(value : string | undefined){
          const phoneRegex = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          let isValidPhone = phoneRegex.test(value || "");
          let isValidEmail = emailRegex.test(value || "");
          if(!isValidPhone && !isValidEmail){
            return false;
          }
          return true
        }
      )
      .trim()
      .min(3, "نام باید حداقل 3 کاراکتر باشد")
      .max(30, "نام باید حداکثر 30 کاراکتر باشد")
      .required("لطفا شماره موبایل یا ایمیل را وارد نمایید"),
      password: yup
      .string()
      .matches(/^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g , "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد")
      .trim()
      .min(8, "کلمه عبور باید حداقل 8 کاراکتر باشد")
      .max(30, "کلمه عبور باید حداکثر 30 کاراکتر باشد")
      .required("لطفا کلمه عبور را وارد نمایید"),
      
  });

  export const LoginWithEmailValidationSchema = yup.object().shape({
    email: yup
    .string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , "لطفا ایمیل را به درستی وارد نمایید")
    .trim()
    .min(3, "نام باید حداقل 3 کاراکتر باشد")
    .max(30, " نام باید حداکثر 30 کاراکتر باشد")
    .required("لطفا ایمیل را وارد نمایید"),
    password: yup
    .string()
    .matches(/^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g , "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد")
    .trim()
    .min(8, "کلمه عبور باید حداقل 8 کاراکتر باشد")
    .required("لطفا کلمه عبور را وارد نمایید"),
  });

  export const SendOtpValidationSchema = yup.object().shape({
    phone: yup
    .string()
  })

  export const LoginWithPhoneValidationSchema = yup.object().shape({
    phone: yup
    .string()
    .matches(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/ , "لطفا شماره موبایل را به درستی وارد نمایید")
    .trim()
    .min(10, "نام باید حداقل 10 کاراکتر باشد")
    .max(11, " نام باید حداکثر 11 کاراکتر باشد")
    .required("لطفا شماره موبایل را وارد نمایید"),
  });