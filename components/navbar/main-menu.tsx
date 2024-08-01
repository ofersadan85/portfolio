import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ContactDialog from "../contact-dialog";

const menuItems = [
  { title: "Home", href: "/" },
  // { title: "About", href: "/about" },
  // { title: "Projects", href: "/projects" },
  // { title: "Blog", href: "/blog" },
];

const MainMenu = ({ sidebar = false }: { sidebar?: boolean }) => {
  const buttonVariant = sidebar ? "link" : "ghost";
  return (
    <ul className={cn("flex items-center gap-4", sidebar ? "flex-col" : "max-sm:hidden")}>
      {menuItems.map(item => (
        <li key={item.title}>
          <Button variant={buttonVariant} className="w-full">
            <Link href={item.href} className="text-lg w-full">
              {item.title}
            </Link>
          </Button>
        </li>
      ))}
      <li>
        <ContactDialog>
          <Button variant={buttonVariant} className="text-lg w-full">
            Contact
          </Button>
        </ContactDialog>
      </li>
    </ul>
  );
};

export default MainMenu;
