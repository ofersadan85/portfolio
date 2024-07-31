import MainMenu from "@/components/navbar/main-menu";
import { DarkModeToggle } from "@/components/theme-dark-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RowsIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  return (
    <nav className="flex w-full p-4 items-center gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="sm:hidden p-1">
            <RowsIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <Separator className="my-4" />
          <SheetDescription>
            <MainMenu sidebar />
          </SheetDescription>
        </SheetContent>
      </Sheet>
      <MainMenu />
      <DarkModeToggle className="ml-auto" />
    </nav>
  );
};

export default NavBar;
