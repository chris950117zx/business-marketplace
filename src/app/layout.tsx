import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "新山中华总商会会员企业平台", template: "%s | 新山中华总商会" },
  description: "发现新山中华总商会会员企业、产品、服务与商机。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body><LanguageProvider><Navbar /><main className="min-h-[65vh]">{children}</main><Footer /></LanguageProvider></body>
    </html>
  );
}
