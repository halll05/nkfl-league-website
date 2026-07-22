import type { Metadata } from "next";
import "./globals.css";

const leagueName = process.env.NEXT_PUBLIC_LEAGUE_NAME || "National Keeper Football League";

export const metadata: Metadata = {
  title: `${leagueName} | Keepers. Chaos. Glory.`,
  description: "The official home of the National Keeper Football League.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
