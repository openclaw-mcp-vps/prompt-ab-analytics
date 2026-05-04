import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt A/B Analytics — A/B test AI prompts with statistical significance",
  description: "Run controlled experiments on prompt variations, track output quality metrics, and get statistical analysis of performance differences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ad2a3b99-4bf7-45c5-b885-a352f67619ec"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
