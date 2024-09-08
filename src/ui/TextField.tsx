import { TextFieldType } from "@/types/textFieldType";
import { Input } from "@nextui-org/react";


const TextField = ({
    label,
    name,
    register,
    placeholder,
    ltr,
    type = "text",
    required,
    validationSchema = {},
    errors,
    customStyle,
    isVisible,
    icon
  }: TextFieldType) => {
    return (
      <div className="w-full">
       
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input variant="bordered" color="primary" classNames={{inputWrapper: "border-primary-500"}} {...register(name, validationSchema)} autoComplete="off" size="md" type={type} label={label} isRequired={required && true} placeholder={placeholder && placeholder} className={`${ltr && "dir-ltr placeholder:text-right"} placeholder:text-right ${customStyle}`} errorMessage={errors && errors[name] && errors[name]?.message} endContent={icon}/>
        </div>
      </div>
    );
  };
  
  export default TextField;