import ContactDialog from "@/components/contact-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MainCards = () => {
  return (
    <section className="flex flex-col w-full sm:w-1/2 gap-4 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Backend Expert</CardTitle>
          <CardDescription>Because efficiency matters</CardDescription>
        </CardHeader>
        <CardContent>
          API design is the key to ensuring functionality and scalability. While any developer can create an API, only a
          few can create an efficient & scalable one.
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
        <CardFooter>
          <ContactDialog>
            <Button variant="ghost" className="text-primary text-lg">
              Let&apos;s find the right tools for<i>&nbsp;you</i>.
              <EnvelopeClosedIcon className="w-4 h-4 ml-2" />
            </Button>
          </ContactDialog>
        </CardFooter>
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
          advantage. It means that your project will be easier to maintain and easier to find developers to work on it.
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
        <CardFooter>
          <ContactDialog>
            <Button variant="ghost" className="text-primary text-lg">
              Let&apos;s create<i>&nbsp;satisfied&nbsp;</i> users.
              <EnvelopeClosedIcon className="w-4 h-4 ml-2" />
            </Button>
          </ContactDialog>
        </CardFooter>
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
        <CardFooter>
          <ContactDialog>
            <Button variant="ghost" className="text-primary text-lg">
              Let&apos;s make your team a <i>&nbsp;success</i>.
              <EnvelopeClosedIcon className="w-4 h-4 ml-2" />
            </Button>
          </ContactDialog>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">DevOps Expert</CardTitle>
          <CardDescription>Because your money matters</CardDescription>
        </CardHeader>
        <CardContent>
          The more time your developers spend on infrastructure, the less time they spend on developing features. Bugs,
          poor code quality, and slow development are all symptoms of a poor DevOps setup, that ultimately translates to
          increased expenses.
        </CardContent>
        <CardContent>
          Scaling up from 100 users to 100 million users is a challenge that requires a deep understanding of network
          architecture, security, and cloud services. Cloud services like{" "}
          <Link href="/blog/aws" className="text-primary underline-offset-4 hover:underline">
            AWS (Amazon Web Services)
          </Link>{" "}
          and{" "}
          <Link href="/blog/gcp" className="text-primary underline-offset-4 hover:underline">
            GCP (Google Cloud Platform)
          </Link>{" "}
          are <i>not</i> cheap, and it&apos;s important to know how to use them efficiently. The same goes for
          on-premises setups.
        </CardContent>
        <CardContent>
          Make your developers faster, better, and more efficient by setting up the right DevOps pipeline and automation
          techniques. Make technology work for your team, not against them. Expert guidance can be a huge financial win,
          and get you to market faster.
        </CardContent>
        <CardFooter>
          <ContactDialog>
            <Button variant="ghost" className="text-primary text-lg">
              Pay less
              <Separator orientation="vertical" decorative className="h-6 mx-2" />
              get more
              <Separator orientation="vertical" decorative className="h-6 mx-2" />
              <i>faster</i>.
              <EnvelopeClosedIcon className="w-4 h-4 ml-2" />
            </Button>
          </ContactDialog>
        </CardFooter>
      </Card>
    </section>
  );
};

export default MainCards;
