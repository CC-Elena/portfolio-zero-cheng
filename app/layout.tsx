import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陈晨 | AI Product Engineer · Coding Agent",
  description:
    "陈晨的个人作品集，展示 Coding Agent、AI Coding 工程化、数据洞察与 AI 多媒体应用的产品设计、系统实现和验证证据。",
  keywords: ["AI Product Engineer", "Coding Agent", "AI Coding", "前端工程师", "Agent Harness"],
  openGraph: {
    title: "陈晨 | 把 AI 能力做成可靠的产品",
    description: "Coding Agent、AI Coding 工程化与 AI 应用落地作品集。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
