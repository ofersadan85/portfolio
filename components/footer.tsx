import { Button } from "@/components/ui/button";
import CopyButton from "./copy-button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  const email = "ofersadan85@gmail.com";

  return (
    <footer className="flex max-sm:flex-col items-center justify-center gap-4 bottom-0 w-full p-4 text-muted-foreground text-sm">
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
      <Button variant="link" className="p-2">
        <a href="https://github.com/ofersadan85" target="_blank" rel="noreferrer" className="text-base flex gap-2">
          GitHub <GitHubLogoIcon className="w-6 h-6" />
        </a>
      </Button>
      <Button variant="link" className="p-2">
        <a
          href="https://www.linkedin.com/in/ofer-sadan"
          target="_blank"
          rel="noreferrer"
          className="text-base flex gap-2"
        >
          LinkedIn <LinkedInLogoIcon className="w-6 h-6" />
        </a>
      </Button>
      <p>© 2024 All rights reserved by Ofer Sadan</p>
    </footer>
  );
};

export default Footer;
