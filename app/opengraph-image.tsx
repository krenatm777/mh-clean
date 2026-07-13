import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "MusharaqaHub — institutional infrastructure for real economic assets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#003D27";
const GOLD = "#EFCC04";
const GOLD_DEEP = "#B8901F";
const PAPER = "#F6F3EA";
const BODY = "#2E3A34";

const gem = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 340" fill="none">
<g stroke="${INK}" stroke-width="1.6" stroke-linejoin="round">
<path d="M160 20 L288 92 V236 L160 308 L32 236 V92 Z"/>
<path d="M160 20 V96 M288 92 L224 128 M32 92 L96 128 M160 308 V232"/>
<path d="M96 128 L96 272 M224 128 L224 272 M96 272 L160 308 L224 272"/>
<path d="M96 128 L160 96 L224 128"/>
</g>
<path d="M160 130 L206 170 L160 258 L114 170 Z" fill="rgba(239,204,4,0.14)" stroke="${GOLD_DEEP}" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M114 170 L160 188 L206 170 M160 130 L160 188 M160 188 L160 258" stroke="${GOLD_DEEP}" stroke-width="1.4"/>
<circle cx="160" cy="188" r="4" fill="${GOLD}"/>
</svg>`;

const gemDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(gem)}`;

export default async function Image() {
  const marcellus = await readFile(
    join(process.cwd(), "assets/Marcellus-Regular.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          fontFamily: "Marcellus",
          position: "relative",
        }}
      >
        {/* gold hairline frame */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: `1px solid rgba(184,144,31,0.45)`,
          }}
        />
        {/* deep-green base bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 10,
            background: INK,
          }}
        />

        {/* left column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "78px 64px 74px",
            width: 760,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: 3,
              color: GOLD_DEEP,
            }}
          >
            ASTANA INTERNATIONAL FINANCIAL CENTRE
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 62,
              lineHeight: 1.06,
              color: INK,
            }}
          >
            <span style={{ marginRight: 16 }}>Institutional</span>
            <span style={{ marginRight: 16 }}>infrastructure for</span>
            <span style={{ color: GOLD_DEEP }}>real economic assets</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 40, color: INK }}>
              <span>Musharaqa</span>
              <span style={{ color: GOLD_DEEP }}>Hub</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                letterSpacing: 2,
                color: BODY,
                marginTop: 6,
              }}
            >
              musharaqahub.com
            </div>
          </div>
        </div>

        {/* right: signature */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={gemDataUri} width={360} height={382} alt="" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Marcellus",
          data: marcellus,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
