import { portraitSrc } from "@/lib/portrait";

export function PortraitImage({ className = "" }: { className?: string }) {
  return (
    // Native img bypasses Next.js image optimizer cache entirely
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={portraitSrc()}
      src={portraitSrc()}
      alt="John Mthembu — Digital Designer and Creative Director"
      width={764}
      height={885}
      className={className}
      decoding="async"
    />
  );
}
