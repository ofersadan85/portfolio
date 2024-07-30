"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CopyIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { toast } from "sonner";

type CopyButtonProps = {
  copyText: string;
  tooltipText?: string | ReactNode;
  toastText?: string | ReactNode;
  className?: string;
};

const CopyButton = ({ copyText, tooltipText, toastText, className }: CopyButtonProps) => {
  tooltipText = tooltipText || "Copy to clipboard";
  toastText = (
    <>
      <CopyIcon />
      {toastText || "Copied to clipboard"}
    </>
  );

  const doCopy = () => {
    navigator.clipboard.writeText(copyText);
    toast(toastText);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CopyIcon className={className} onClick={doCopy} />
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;
