import { ImageResponse } from "next/og";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 64,
          background: "linear-gradient(135deg, #f6f2ea 0%, #dae7ff 100%)",
          color: "#111827",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "#163a72", marginBottom: 18 }}>MEI x PJ</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
          Ferramenta e guias para decisão financeira
        </div>
        <div style={{ fontSize: 28, lineHeight: 1.35, maxWidth: 850, marginTop: 16, color: "#4b5563" }}>
          Conteúdo útil, mobile first e pronto para monetização híbrida.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
