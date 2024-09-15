import "~/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GeistSans } from "geist/font/sans";
import Providers from "../(client)/Providers";
import type { Metadata } from "next";

import { NavSideBar, FixedComponents, Footer } from "~/app/_components";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: {
    template: "Travel Town Holidays - %s ",
    default: "Travel Town Holidays - Discover Your Dream Vacation",
  },
  applicationName: "Travel Town Holidays",
  metadataBase: new URL("https://traveltownholidays.com/"),
  openGraph: {
    url: "https://traveltownholidays.com",
    siteName: "traveltownholidays",
    images: [
      {
        url: "../../../public/image/logo-color.png",
        width: 800,
        height: 600,
        alt: "Travel Town Holidays banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@traveltownholidays",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationLinks = await api.client.getNavLinks();
  const footerLinks = await api.client.getFooterLinks();
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark overflow-x-hidden bg-white">
        <Providers>
          <NavSideBar navigationLinks={navigationLinks} />
          {children}
          <FixedComponents />
          <Footer footerLinks={footerLinks} />
        </Providers>
      </body>
    </html>
  );
}
