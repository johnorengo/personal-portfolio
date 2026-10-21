import { Coffee, Sparkles } from "lucide-react";
import styles from "./CoffeeAction.module.css";

interface CoffeeActionProps {
  label?: string;
  compact?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
}

export default function CoffeeAction({ label = "Coffee", compact = false, fullWidth = false, onClick, href }: CoffeeActionProps) {
  const className = `${styles.action} ${compact ? styles.compact : ""} ${fullWidth ? styles.fullWidth : ""}`;
  const content = <>
    <span className={styles.cup} aria-hidden="true">
      <span className={styles.steam}><i /><i /><i /></span>
      <Coffee size={19} strokeWidth={1.8} />
    </span>
    {!compact && <span className={styles.label}>{label}</span>}
    {!compact && <Sparkles size={13} className={styles.sparkle} aria-hidden="true" />}
  </>;

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>{content}</a>
  ) : (
    <button type="button" onClick={onClick} className={className} aria-label={compact ? "Buy me a coffee" : undefined} title="Support with M-Pesa / Buy Me a Coffee">{content}</button>
  );
}
