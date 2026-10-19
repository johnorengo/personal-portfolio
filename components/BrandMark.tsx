export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    // The adjacent wordmark supplies the accessible brand name.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/jo-monogram.svg"
      alt=""
      aria-hidden="true"
      width={49}
      height={32}
      className={`shrink-0 ${className}`}
    />
  );
}
