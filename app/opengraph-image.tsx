import { ImageResponse } from "next/og";

export const alt = "MusharaqaHUB";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at 18% 20%, rgba(0,255,106,0.14), transparent 22%), radial-gradient(circle at 82% 0%, rgba(0,255,106,0.08), transparent 24%), linear-gradient(180deg, #0a0a0a 0%, #090b0a 42%, #0a0a0a 100%)",
          color: "#f5f5f5",
          padding: "64px",
          fontFamily: "Arial",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "48px",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "36px",
            background:
              "linear-gradient(rgba(0,255,106,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,106,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "999px",
                border: "1px solid rgba(0,255,106,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00ff6a",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.22em",
              }}
            >
              MH
            </div>
            <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
              <span>Musharaqa</span>
              <span style={{ color: "#00ff6a" }}>HUB</span>
            </div>
          </div>
          <div style={{ maxWidth: "840px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                color: "#00ff6a",
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
              }}
            >
              Institutional Digital Asset Infrastructure
            </div>
            <div style={{ fontSize: "68px", lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.05em" }}>
              Shariah-compliant infrastructure for real-world asset tokenization
            </div>
            <div style={{ maxWidth: "760px", color: "rgba(245,245,245,0.78)", fontSize: "28px", lineHeight: 1.4 }}>
              MusharaqaHUB is focused on structuring participation in selected real economic sectors through ethical principles and blockchain-based infrastructure.
            </div>
          </div>
          <div style={{ display: "flex", gap: "28px", fontSize: "18px", color: "rgba(245,245,245,0.62)", textTransform: "uppercase", letterSpacing: "0.18em" }}>
            <span>Shariah-aligned</span>
            <span>Real asset focused</span>
            <span>Compliance-oriented</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
