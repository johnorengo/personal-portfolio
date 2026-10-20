export default function SectionBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-chapter-badge">
      <span className="font-mono">{number}</span>
      <span className="section-chapter-dot" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
