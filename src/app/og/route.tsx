import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Finex Development";
    const subtitle = searchParams.get("subtitle") || "Leaders in Construction & Facility Maintenance";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            backgroundImage: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            position: "relative",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              top: "-200px",
              right: "-200px",
              width: "400px",
              height: "400px",
              background: "rgba(27, 58, 90, 0.1)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              left: "-200px",
              width: "400px",
              height: "400px",
              background: "rgba(211, 166, 74, 0.1)",
              borderRadius: "50%",
            }}
          />

          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "white",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "24px",
                border: "2px solid #1B3A5A",
              }}
            >
              {/* Note: For OG images, we'll use a simple text logo since external images are complex */}
              <span
                style={{
                  color: "#1B3A5A",
                  fontSize: "48px",
                  fontWeight: "bold",
                }}
              >
                F
              </span>
            </div>
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#1f2937",
              }}
            >
              Finex Development
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "900px",
              padding: "0 40px",
            }}
          >
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#1f2937",
                lineHeight: "1.1",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#6b7280",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "60px",
              gap: "80px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1B3A5A",
                }}
              >
                2002
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                }}
              >
                Year Established
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1B3A5A",
                }}
              >
                109,980+
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                }}
              >
                Projects Completed
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1B3A5A",
                }}
              >
                440+
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                }}
              >
                Contractors Appointed
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
