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
          <Input labelPlacement="outside" variant="bordered" color="primary" classNames={{inputWrapper: "border-primary-500", label: "group-data-[filled-within=true]:right-2 group-data-[filled-within=true]:left-auto" }} {...register(name, validationSchema)} autoComplete="off" size="lg" type={isVisible ? "text" : type } label={label} isRequired={required && true} placeholder={placeholder && placeholder} className={`${ltr && "dir-ltr placeholder:text-right"} placeholder:text-right ${customStyle}`} errorMessage={errors && errors[name] && errors[name]?.message} endContent={icon}/>
        </div>
      </div>
    );
  };
  
  export default TextField;