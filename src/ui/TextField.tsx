import { TextFieldType } from "@/types/textFieldType";
import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

const TextField = ({
  label,
  name,
  register,
  ltr,
  type = "text",
  required,
  validationSchema = {},
  errors,
  customStyle,
  showPassword,
  icon,
}: TextFieldType) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="w-full">
      {showPassword ? (
        <div className="relative">
          <input
            {...register(name, validationSchema)}
            autoComplete="off"
            type={isVisible ? "text" : "password"}
            name={name}
            id={name}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            placeholder=" "
          />
          <label
            htmlFor={name}
            className={`${customStyle} absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            {label}
          </label>
          <div className="bg-primary-50 flex-center absolute inset-y-0 end-1.5 rounded-lg top-1 bottom-1 p-1.5">
            <button
              type="button"
              className=""
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <HiEyeSlash className="size-6 text-primary-700" />
              ) : (
                <HiEye className="size-6 text-primary-700" />
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <input
            {...register(name, validationSchema)}
            autoComplete="off"
            type={type}
            name={name}
            id={name}
            className={`${ltr && "text-left pl-[2.9rem]"} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor={name}
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            {label}
          </label>
          <div className="bg-primary-50 flex-center absolute inset-y-0 rounded-lg end-1.5 top-1 bottom-1 p-1.5 pointer-events-none">
            {icon}
          </div>
        </div>
      )}

      {errors && errors[name] && (
        <span className="block text-right text-rose-500 my-3.5 text-xs">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
