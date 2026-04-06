import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clerk Auth Template — Safe Passage Strategies",
  description: "A practice template for connecting your app to Clerk authentication and user management.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#000", color: "#fff" }}
      >
        <ClerkProvider>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 32px",
              borderBottom: "0.5px solid #333",
              background: "#000",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#fff",
                letterSpacing: "0.05em",
                fontFamily: "'Courier New', monospace",
              }}
            >
              CLERK AUTH TEMPLATE
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {userId ? (
                <UserButton />
              ) : (
                <>
                  <SignInButton>
                    <button
                      style={{
                        padding: "8px 18px",
                        fontSize: "13px",
                        borderRadius: "6px",
                        border: "0.5px solid #555",
                        background: "transparent",
                        color: "#fff",
                        cursor: "pointer",
                        fontFamily: "'Courier New', monospace",
                        letterSpacing: "0.03em",
                      }}
                    >
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button
                      style={{
                        padding: "8px 18px",
                        fontSize: "13px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#fff",
                        color: "#000",
                        cursor: "pointer",
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                      }}
                    >
                      Sign up
                    </button>
                  </SignUpButton>
                </>
              )}
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}