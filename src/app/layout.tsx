import React from "react";
import SiteLayout from "~/components/SiteLayout/SiteLayout";
import "~/assets/global.scss";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  path: "/",
  locale: "fr"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
