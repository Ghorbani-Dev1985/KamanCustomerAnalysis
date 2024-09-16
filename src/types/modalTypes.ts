import { ReactNode } from "react";

export type ModalHeaderProps = {
   children?: ReactNode;
   onClose?: () => void;
   containerClass?: string;
   iconClass?: string;
   titleClass?: string;
 };
 
export type ModalBodyProps = {
   children: ReactNode;
   containerClass?: string;
 };
 
export type ModalProps = {
   children?: ReactNode;
   open: boolean;
   containerClasses?: string;
   onClose: () => void;
 };