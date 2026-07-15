import Image from "next/image";

import { Z_INDEX } from "@/lib/constants";

export function InsuranceBadge() {
  return (
    <div
      className="fixed top-32 right-4 w-[168px] sm:right-6 sm:w-[216px]"
      style={{ zIndex: Z_INDEX.badge }}
    >
      <Image
        src="/fully-licensed-fully-insured-stamp.png"
        alt="Fully licensed and fully insured"
        width={416}
        height={238}
        className="h-auto w-full"
      />
    </div>
  );
}
