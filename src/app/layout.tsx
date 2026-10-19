import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "TradeLink — Business Directory & B2B Marketplace", template: "%s | TradeLink" },
  description: "Discover verified fictional suppliers, products, and business insights on TradeLink.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body><Navbar /><main className="min-h-[65vh]">{children}</main><Footer /></body>
    </html>
  );
}
