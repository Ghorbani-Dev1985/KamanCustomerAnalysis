import { Button, Tooltip } from "@nextui-org/react";
import React from "react";

const HelpTooltip = ({content , placement = "top"} : {content:string , placement?: "top" | "bottom" | "left" | "right"}) => {
  return (
    <Tooltip content={content} placement={placement} showArrow color="warning" classNames={{content: "max-w-56 text-center text-xs leading-6"}}>
      <Button className="bg-transparent min-w-6 max-w-fit px-0.5">
        <p className="size-3.5 opacity-40 flex-center bg-zinc-400 text-white rounded-full">
          ؟
        </p>
      </Button>
    </Tooltip>
  );
};

export default HelpTooltip;