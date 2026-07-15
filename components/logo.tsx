import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function Logo({ className, imageClassName, priority = false }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md bg-background p-1.5",
        className
      )}
    >
      <Image
        src="/rebel-removal-logo.png"
        alt="Rebel Removal, junk hauling, cleanouts, and moving help in Oxford, MS"
        width={806}
        height={454}
        priority={priority}
        className={cn("h-10 w-10 object-contain", imageClassName)}
      />
    </span>
  );
}
