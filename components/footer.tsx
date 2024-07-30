import { Button } from "@/components/ui/button";
import CopyButton from "./copy-button";

const Footer = () => {
  const email = "ofersadan85@gmail.com";

  return (
    <footer className="flex items-center justify-between bottom-0 w-full p-4 text-muted-foreground text-sm">
      <p>© 2024 All rights reserved by Ofer Sadan</p>
      <div className="items-center text-center">
        <Button variant="link" className="p-2">
          <a href="mailto:ofersadan85@gmail.com" target="_blank" className="text-base">
            {email}
          </a>
        </Button>
        <CopyButton
          copyText={email}
          tooltipText="Copy email address to clipboard"
          toastText="Copied email address to clipboard"
        />
      </div>
    </footer>
  );
};

export default Footer;
