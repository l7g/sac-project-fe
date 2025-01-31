"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton: React.FC = () => {
  const handleDownloadButton = () => {
    window.open("/assets/cv/Cv_Laurent_Gagne.pdf", "_blank");
    return true;
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownloadButton}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
