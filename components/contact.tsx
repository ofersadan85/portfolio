"use client";

import EmailButton from "@/components/email-button";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email(),
  message: z.string().min(4, "Message must be at least 10 characters long"),
});

type ContactFormProps = {
  messageRows?: number;
  className?: string;
};

const ContactForm = ({ messageRows = 4, className }: ContactFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (process.env.NODE_ENV === "development") {
      toast.success("Values: " + JSON.stringify(values));
    }

    const url = "https://ooxa-site-contact-us-zrbwmmramq-uc.a.run.app";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(form.getValues()),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      toast.success("Message sent successfully");
      form.reset();
    } catch (error) {
      form.setError("root", { message: "Failed to send message, please try again" });
    }
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Let&apos;s talk about your project</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">
                    <span className="text-red-500 text-xs m-1">*</span>Name
                  </FormLabel>
                  <Input placeholder="John Doe" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">
                    {" "}
                    <span className="text-red-500 text-xs m-1">*</span>Email
                  </FormLabel>
                  <Input placeholder="email@example.com" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message">
                    <span className="text-red-500 text-xs m-1">*</span>Message
                  </FormLabel>

                  <Textarea rows={messageRows} placeholder="Tell me about your project" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormDescription>Let me know what you&apos;re looking for</FormDescription>
            <FormMessage>{form.formState.errors.root?.message}</FormMessage>
            <FormItem>
              <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                {form.formState.isSubmitting ? <Spinner /> : "Send"}
              </Button>
            </FormItem>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-sm items-center justify-center">
        Or contact me directly - <EmailButton email="ofersadan85@gmail.com" />
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
