import TechCarousel from "@/components/tech-carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
      <TechCarousel />
      <section className="flex flex-col sm:w-1/2 gap-4 items-center justify-center mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Backend Expert</CardTitle>
            <CardDescription>Because efficiency matters</CardDescription>
          </CardHeader>
          <CardContent>
            API design is the key to ensuring functionality and scalability. While any developer can create an API, only
            a few can create an efficient & scalable one.
          </CardContent>
          <CardContent>
            The right tool for the job is different for every project. Personally, I tend to select{" "}
            <Link href="/blog/fastapi" className="text-primary underline-offset-4 hover:underline">
              Python with FastAPI
            </Link>{" "}
            for most projects that require a RESTful API. And{" "}
            <Link href="/blog/nextjs" className="text-primary underline-offset-4 hover:underline">
              Node.js with Next.js
            </Link>{" "}
            for projects that require server-side rendering, or are mostly intended to service frontend{" "}
            <Link href="/blog/react" className="text-primary underline-offset-4 hover:underline">
              React
            </Link>{" "}
            applications.
          </CardContent>
          <CardFooter>Let&apos;s find the right tools for you.</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Frontend Expert</CardTitle>
            <CardDescription>Because your users matter</CardDescription>
          </CardHeader>
          <CardContent>
            The frontend is the first thing your users see. It&apos;s important to make sure it&apos;s fast, responsive,
            and accessible. Otherwise, you&apos;ll lose users and <i>you&apos;ll never even know it.</i>
          </CardContent>
          <CardContent>
            There are many UI frameworks, but in my experience, none compare to{" "}
            <Link href="/blog/react" className="text-primary underline-offset-4 hover:underline">
              React.
            </Link>
          </CardContent>
          <CardContent>
            Don&apos;t get me wrong, there are many great frameworks out there, but the most popular one is a great
            advantage. It means that your project will be easier to maintain and easier to find developers to work on
            it.
          </CardContent>
          <CardContent>
            Combine that with{" "}
            <Link href="/blog/tailwind" className="text-primary underline-offset-4 hover:underline">
              Tailwind CSS
            </Link>{" "}
            for style, and{" "}
            <Link href="/blog/typescript" className="text-primary underline-offset-4 hover:underline">
              TypeScript
            </Link>{" "}
            for safety, and you&apos;ve got a winning combination.
          </CardContent>
          <CardFooter>Let&apos;s create satisfied users.</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Fullstack Expert</CardTitle>
            <CardDescription>Because your developers matter</CardDescription>
          </CardHeader>
          <CardContent>
            It&apos;s much easier to maintain a project when the same developer works on both the frontend and the
            backend. However, that can&apos;t always be the case. That&apos;s why it&apos;s important to have key
            developers on your team that have a deep understanding of both.
          </CardContent>
          <CardContent>
            I&apos;ve worked on many projects where the frontend and backend were developed by different teams. The more
            successful of these projects mainly reduce to two aspects:
          </CardContent>
          <CardContent>
            <ol className="list-decimal list-inside">
              <li>Good communication (which includes documentation)</li>
              <li>
                Following expert advice - what are common pitfalls? What are the best practices? What external tools can
                help us?
              </li>
            </ol>
          </CardContent>
          <CardFooter>Let&apos;s make your team set up for success.</CardFooter>
        </Card>
      </section>
    </main>
  );
}
