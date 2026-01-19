import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  variant?: "black" | "color";
  size?: number;
}

export function Logo({ href = "/", variant = "black", size = 28 }: LogoProps) {
  const src = variant === "color" ? "/vival_color.png" : "/vival_black.png";

  return (
    <Link href={href} className="flex items-center gap-2">
      <Image src={src} alt="" width={size} height={size} priority />
      <span className="text-xl font-bold text-primary">Vival</span>
    </Link>
  );
}
