import CopyButton from "@/components/copy-button";
import { Button } from "@/components/ui/button";

const EmailButton = ({ email }: { email: string }) => {
  return (
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
  );
};

export default EmailButton;
