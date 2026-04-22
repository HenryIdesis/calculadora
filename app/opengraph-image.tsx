import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0f172a 0%, #163a72 60%, #0f2b57 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.75 }}>
            {site.shortName}
          </div>
          <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.02, maxWidth: 980 }}>
            Finanças para MEI/PJ no Brasil
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, maxWidth: 930, opacity: 0.88 }}>
            Calculadora, guias práticos e conteúdo para decisão financeira.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, opacity: 0.9 }}>
          <div style={{ padding: "14px 22px", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 999 }}>
            Comparador MEI x PJ
          </div>
          <div style={{ padding: "14px 22px", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 999 }}>
            Conteúdo útil
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
