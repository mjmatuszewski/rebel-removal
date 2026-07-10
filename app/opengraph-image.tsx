import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Rebel Removal, junk hauling, cleanouts, and moving help in Oxford, MS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/rebel-removal-logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori requires a plain img element */}
        <img src={logoSrc} width={520} height={520} style={{ objectFit: "contain" }} alt="" />
      </div>
    ),
    { ...size }
  );
}
