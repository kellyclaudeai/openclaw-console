import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            color: "white",
            fontWeight: 700,
          }}
        >
          {">{_"}
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          OpenClaw Console
        </div>
      </div>
      <div
        style={{
          fontSize: "24px",
          color: "#A5B4FC",
          maxWidth: "600px",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        The control plane for AI agents. Monitor, manage, and secure your agent fleet.
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
