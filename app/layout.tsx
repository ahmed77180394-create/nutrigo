import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "NutriGo - Chef-Crafted Healthy Meal Subscription",
  description:
    "NutriGo delivers fresh, macro-balanced, chef-prepared healthy meals directly to your door daily. Lose weight, build muscle, or maintain vitality effortlessly.",
  keywords: ["healthy meals", "meal subscription", "Calo alternative", "healthy food delivery", "macro meals", "KSA healthy food"],
  authors: [{ name: "NutriGo" }],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#344B37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased selection:bg-[#A5AD85]/40 selection:text-[#344B37]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
