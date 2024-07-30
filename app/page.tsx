import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <div className="flex flex-col gap-5 items-center w-full">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          Ofer Sadan
        </h1>
        <Separator decorative className="w-2/3" />
        <div className="flex lg:text-xl font-semibold w-full items-center justify-center lg:gap-10 gap-5">
          <span className="text-center">DevOps Engineer</span>
          <Separator orientation="vertical" decorative className="h-10" />
          <span className="text-center">Full-Stack Developer</span>
          <Separator orientation="vertical" decorative className="h-10" />
          <span className="text-center">Tech Consultant</span>
        </div>
      </div>
    </main>
  );
}
