"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { ReactNode, useEffect, useState } from "react";
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

  let timeout: NodeJS.Timeout | number;

  const doCopy = () => {
    navigator.clipboard.writeText(copyText);
    toast(toastText);
    setIcon(<CheckIcon className={className} color="green" />);
    timeout = setTimeout(() => setIcon(originalIcon), 1200);
  };

  const originalIcon = <CopyIcon className={className} onClick={doCopy} />;
  const [icon, setIcon] = useState(originalIcon);

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;
