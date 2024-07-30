import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type TechBadgeProps = {
  image: string;
  text: string;
};

const TechBadge = ({ image, text }: TechBadgeProps) => {
  return (
    <Badge variant="outline" className="w-full items-center justify-center">
      <Image src={image} alt={text} width={32} height={32} className="mr-2" />
      {text}
    </Badge>
  );
};

export default TechBadge;
