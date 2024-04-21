import "~/styles/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "~/components/theme-provider";
import { SITE_NAME } from "~/constants";
import { Noto_Sans_SC } from "next/font/google";

export const metadata = {
  title: SITE_NAME,
  description: "A blog about web development and other otaku things",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const notoSansSC = Noto_Sans_SC({
  display: "swap",
  preload: false,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning className={notoSansSC.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
