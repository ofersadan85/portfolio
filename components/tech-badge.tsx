import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TechBadgeProps = {
  image: string;
  text: string;
  className?: string;
};

const TechBadge = ({ image, text, className }: TechBadgeProps) => {
  return (
    <Badge variant="outline" className={cn("items-center justify-center", className)}>
      <Image src={image} alt={text} width={32} height={32} className="mr-2" />
      {text}
    </Badge>
  );
};

export default TechBadge;
