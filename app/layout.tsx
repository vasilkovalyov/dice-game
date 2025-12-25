import { ReactElement, ReactNode } from "react";

import { Viewport } from "next/types";

import { robotoFont } from "./fonts";
import Providers from "./providers/providers";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

type LayoutProps = {
  children: ReactNode;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export const dynamic = "force-dynamic";

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <html suppressHydrationWarning lang={"en"}>
      <body className={robotoFont.className}>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
