import { ImageIcon } from "lucide-react";

const GALLERY_ITEMS = [
  { id: "garage", label: "Garage Cleanout" },
  { id: "yard", label: "Yard Debris" },
  { id: "furniture", label: "Furniture Removal" },
];

function PlaceholderBlock({ tag }: { tag: "Before" | "After" }) {
  return (
    <div className="flex aspect-square flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/40">
      <ImageIcon className="size-6 text-muted-foreground" aria-hidden="true" />
      <span className="font-heading text-[10px] uppercase tracking-wide text-muted-foreground">
        {tag}
      </span>
    </div>
  );
}

export function BeforeAfterGallery() {
  return (
    <section id="gallery" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            Before &amp; After
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            See the difference a Rebel Removal job makes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PlaceholderBlock tag="Before" />
                <PlaceholderBlock tag="After" />
              </div>
              <span className="text-center font-heading text-xs uppercase tracking-wide text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
