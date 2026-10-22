import type { ReactNode } from "react";
import SiteLayout from "~/components/SiteLayout";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { buildMetadata } from "~/utils/seo";
import "~/styles/base.scss";
import "~/styles/layout.scss";
import "~/styles/blog.scss";
import "~/styles/cv.scss";
import "~/styles/projects.scss";
import "~/styles/contact.scss";

export const metadata = buildMetadata({ path: "/", locale: DEFAULT_LOCALE });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
