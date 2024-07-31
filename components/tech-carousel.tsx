"use client";

import TechBadge from "@/components/tech-badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import Autoplay from "embla-carousel-autoplay"; // cSpell:ignore embla
import { useEffect, useRef, useState } from "react";

const badges = [
  { image: "./logos/typescript.svg", text: "TypeScript" },
  { image: "./logos/python.svg", text: "Python" },
  { image: "./logos/rust.svg", text: "Rust" },
  { image: "./logos/aws.svg", text: "Amazon Web Services" },
  { image: "./logos/gcp.svg", text: "Google Cloud Platform" },
  { image: "./logos/docker.svg", text: "Docker" },
  { image: "./logos/nginx.svg", text: "Nginx" },
  { image: "./logos/git.svg", text: "Git" },
  { image: "./logos/github.svg", text: "GitHub" },
  { image: "./logos/jira.svg", text: "Jira" },
  { image: "./logos/bitbucket.svg", text: "BitBucket" },
  { image: "./logos/linux.svg", text: "Linux" },
  { image: "./logos/ubuntu.svg", text: "Ubuntu" },
  { image: "./logos/alpine.svg", text: "Alpine Linux" },
  { image: "./logos/windows.svg", text: "Windows" },
  { image: "./logos/vscode.svg", text: "Visual Studio Code" },
  { image: "./logos/bash.svg", text: "Bash / Shell" },
  { image: "./logos/react.svg", text: "React.js" },
  { image: "./logos/next.svg", text: "Next.js" },
  { image: "./logos/javascript.svg", text: "JavaScript" },
  { image: "./logos/tailwind.svg", text: "Tailwind CSS" },
  { image: "./logos/github.svg", text: "GitHub Pages" },
  { image: "./logos/node.svg", text: "Node.js" },
  { image: "./logos/postgres.svg", text: "PostgreSQL" },
  { image: "./logos/fastapi.svg", text: "FastAPI" },
];

const TechCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    api?.on("select", event => {
      setProgress(event.slidesInView()[0]);
    });
  }, [api]);

  return (
    <section className="flex flex-col w-1/2 items-center justify-center mt-4">
      <Carousel
        className="mt-4 w-full"
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {badges.map((badge, index) => (
            <CarouselItem key={index}>
              <TechBadge image={badge.image} text={badge.text} className="w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <Progress max={badges.length - 1} value={progress * 4} />
    </section>
  );
};

export default TechCarousel;
