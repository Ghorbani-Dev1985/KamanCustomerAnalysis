import { JSXElementConstructor } from "react";
import { UseFormRegister } from "react-hook-form";

export interface TextFieldType {
   label: string,
   name: any,
   register: UseFormRegister<ContactUsType>,
   placeholder?: string,
   ltr?: boolean,
   type?: string,
   required: boolean,
   validationSchema: {},
   errors: any,
   customStyle?: string,
   showPassword?: boolean,
   icon?: JSXElementConstructor
}