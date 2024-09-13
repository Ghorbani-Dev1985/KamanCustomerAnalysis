import React, { ReactNode } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

function CustomModal({children, btnText , startContent , btnVariant , btnColor , modalHeader, acceptHandler} : {children?: ReactNode, btnText: string, startContent: ReactNode , btnVariant: "light" | "shadow" | "solid" | "bordered" | "flat" | "faded" | "ghost" | undefined , btnColor: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined , modalHeader: string, acceptHandler: () => void}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
       <Button onPress={onOpen} color={btnColor} variant={btnVariant} startContent={startContent}>{btnText}</Button>
      <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{modalHeader}</ModalHeader>
              <ModalBody>
               {children}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  انصراف
                </Button>
                <Button color="primary" onPress={acceptHandler}>
                  تایید
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CustomModal
