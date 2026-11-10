import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Zohaib Rukhsar | Flutter & Android Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#1A060C",
          backgroundImage:
            "radial-gradient(circle at 15% 25%, #6D1A2E 0%, transparent 45%), radial-gradient(circle at 85% 75%, #4A0E1E 0%, #1A060C 60%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#800020",
              border: "2px solid #D9B77E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "900",
              color: "#D9B77E",
            }}
          >
            ZR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#EAD6B4" }}>
              Zohaib Rukhsar
            </span>
            <span style={{ fontSize: "14px", color: "#F4A6B8" }}>
              AVISA DEV &bull; Lahore, Pakistan
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1A060C",
                backgroundColor: "#D9B77E",
                padding: "6px 18px",
                borderRadius: "9999px",
              }}
            >
              Flutter & Android Engineer
            </span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#FFFFFF",
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "6px 18px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Live on Google Play
            </span>
          </div>

          <h1
            style={{
              fontSize: "58px",
              fontWeight: "800",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            Cross-Platform Mobile Apps
            <br />
            <span style={{ color: "#D9B77E" }}>Dart, BLoC & Clean Architecture</span>
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(217, 183, 126, 0.25)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", fontSize: "16px", color: "#E08DA0" }}>
            <span>Flutter</span>
            <span>&bull;</span>
            <span>Kotlin / Java</span>
            <span>&bull;</span>
            <span>REST APIs & Firebase</span>
            <span>&bull;</span>
            <span>MVVM</span>
          </div>

          <span style={{ fontSize: "16px", color: "#D9B77E" }}>
            github.com/zohaib-malik6
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

