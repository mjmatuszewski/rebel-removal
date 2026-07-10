import { Logo } from "@/components/logo";
import { PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA_TOWNS } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6">
        <Logo imageClassName="h-24 w-24" />
        <p className="max-w-md text-sm text-muted-foreground">
          Serving {SERVICE_AREA_TOWNS.join(", ")} and surrounding areas.
        </p>
        <a href={PHONE_HREF} className="font-heading text-sm text-foreground">
          {PHONE_DISPLAY}
        </a>
        <p className="text-xs text-muted-foreground">
          &copy; {year} Rebel Removal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
