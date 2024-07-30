"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechBadge from "./tech-badge";
import { useEffect, useRef, useState } from "react";

const MainTabs = () => {
  const interval = useRef<NodeJS.Timeout | number>();
  const [currentTab, setCurrentTab] = useState("cloud");
  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentTab(prev => {
        switch (prev) {
          case "cloud":
            return "frontend";
          case "frontend":
            return "backend";
          case "backend":
            return "languages";
          case "languages":
            return "cloud";
          default:
            return "cloud";
        }
      });
    }, 2000);
    return () => {
      if (interval) clearInterval(interval.current);
    };
  }, []);

  return (
    <section className="flex items-center justify-center mt-4">
      <Tabs defaultValue="cloud" value={currentTab} className="w-full">
        <TabsList className="w-[400px]">
          <TabsTrigger value="cloud">Cloud & Tools</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
        </TabsList>
        <TabsContent value="cloud" className="grid grid-cols-2 gap-2 w-[400px]">
          <TechBadge image="./logos/aws.svg" text="Amazon Web Services" />
          <TechBadge image="./logos/gcp.svg" text="Google Cloud Platform" />
          <TechBadge image="./logos/docker.svg" text="Docker" />
          <TechBadge image="./logos/nginx.svg" text="Nginx" />
          <TechBadge image="./logos/git.svg" text="Git" />
          <TechBadge image="./logos/github.svg" text="GitHub" />
          <TechBadge image="./logos/jira.svg" text="Jira" />
          <TechBadge image="./logos/bitbucket.svg" text="BitBucket" />
          <TechBadge image="./logos/linux.svg" text="Linux" />
          <TechBadge image="./logos/ubuntu.svg" text="Ubuntu" />
          <TechBadge image="./logos/alpine.svg" text="Alpine Linux" />
          <TechBadge image="./logos/windows.svg" text="Windows" />
          <TechBadge image="./logos/vscode.svg" text="Visual Studio Code" />
          <TechBadge image="./logos/bash.svg" text="Bash / Shell" />
        </TabsContent>
        <TabsContent value="frontend" className="grid grid-cols-2 gap-2 w-[400px]">
          <TechBadge image="./logos/react.svg" text="React.js" />
          <TechBadge image="./logos/next.svg" text="Next.js" />
          <TechBadge image="./logos/javascript.svg" text="JavaScript" />
          <TechBadge image="./logos/typescript.svg" text="TypeScript" />
          <TechBadge image="./logos/tailwind.svg" text="Tailwind CSS" />
          <TechBadge image="./logos/github.svg" text="GitHub Pages" />
        </TabsContent>
        <TabsContent value="backend" className="grid grid-cols-2 gap-2 w-[400px]">
          <TechBadge image="./logos/node.svg" text="Node.js" />
          <TechBadge image="./logos/postgres.svg" text="PostgreSQL" />
          <TechBadge image="./logos/fastapi.svg" text="FastAPI" />
          <TechBadge image="./logos/python.svg" text="Python" />
          <TechBadge image="./logos/docker.svg" text="Docker" />
          <TechBadge image="./logos/nginx.svg" text="Nginx" />
        </TabsContent>
        <TabsContent value="languages" className="grid grid-cols-2 gap-2 w-[400px]">
          <TechBadge image="./logos/python.svg" text="Python" />
          <TechBadge image="./logos/javascript.svg" text="JavaScript" />
          <TechBadge image="./logos/rust.svg" text="Rust" />
          <TechBadge image="./logos/typescript.svg" text="TypeScript" />
          <TechBadge image="./logos/bash.svg" text="Bash / Shell" />
          <TechBadge image="./logos/powershell.svg" text="Powershell" />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MainTabs;
