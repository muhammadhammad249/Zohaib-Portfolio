import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A060C",
          borderRadius: "40px",
          border: "4px solid #D9B77E",
          color: "#D9B77E",
          fontSize: 84,
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: "-2px",
        }}
      >
        ZR
      </div>
    ),
    {
      ...size,
    }
  );
}

