"use client";
import ContactForm from "@/components/contact";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

type ContactDialogProps = {
  children?: React.ReactNode;
};

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [open, setOpen] = useState<boolean | undefined>(undefined);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <ContactForm onSuccess={() => setOpen(false)} className="border-0" />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
