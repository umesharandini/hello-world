// app/layout.tsx
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Simple Layout Example",
  description: "Header and Footer Layout Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#87CEFA",
            padding: "20px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Header Section
        </header>

        <main
          style={{
            backgroundColor: "#F0E68C",
            minHeight: "60vh",
            padding: "20px",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "#90EE90",
            padding: "15px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Footer Section
        </footer>
      </body>
    </html>
  );
}
