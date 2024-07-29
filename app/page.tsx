import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-col gap-5 items-center w-full">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Ofer Sadan
        </h1>
        <Separator decorative className="w-2/3" />
        <div className="flex text-xl font-semibold w-full items-center justify-center gap-10">
          DevOps Engineer
          <Separator orientation="vertical" decorative className="h-10" />
          Full-Stack Developer
          <Separator orientation="vertical" decorative className="h-10" />
          Tech Consultant
        </div>
      </div>
    </main>
  );
}
