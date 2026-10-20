import { PhoneCall } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${personalInfo.phone}`}
      className="floating-call-button"
      aria-label={`Call John Orengo at ${personalInfo.phoneDisplay}`}
    >
      <span className="floating-call-pulse" aria-hidden="true" />
      <span className="floating-call-icon" aria-hidden="true">
        <PhoneCall className="h-4 w-4" />
      </span>
      <span className="floating-call-copy">
        <span className="floating-call-eyebrow">Available to talk</span>
        <span>Direct call</span>
      </span>
    </a>
  );
}
