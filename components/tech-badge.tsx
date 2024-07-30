import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

type TechBadgeProps = {
  image: string;
  text: string;
};

const TechBadge = ({ image, text }: TechBadgeProps) => {
  return (
    <Badge variant="outline">
      <Image src={image} alt={text} width={32} height={32} className="mr-2" />
      {text}
    </Badge>
  );
};

export default TechBadge;
