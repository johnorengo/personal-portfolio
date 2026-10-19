export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark relative inline-flex shrink-0 ${className}`} aria-hidden="true">
      {/* The adjacent wordmark supplies the accessible brand name. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/jo-monogram.svg"
        alt=""
        width={49}
        height={32}
        className="relative z-10 h-full w-auto"
      />
    </span>
  );
}
