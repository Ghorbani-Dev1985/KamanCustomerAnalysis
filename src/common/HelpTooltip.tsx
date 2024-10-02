import { Button, Tooltip } from "@nextui-org/react";
import React from "react";

const HelpTooltip = ({content} : {content:string}) => {
  return (
    <Tooltip content={content} placement="top" showArrow color="warning" classNames={{content: "max-w-56 text-center text-xs leading-6"}}>
      <Button className="bg-transparent min-w-6 max-w-fit px-0.5">
        <p className="size-4 opacity-40 flex-center bg-zinc-800 text-white rounded-full">
          ؟
        </p>
      </Button>
    </Tooltip>
  );
};

export default HelpTooltip;
