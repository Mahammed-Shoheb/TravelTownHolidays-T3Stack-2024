import "~/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import { TRPCReactProvider } from "~/trpc/react";

import { GeistSans } from "geist/font/sans";
import Logo from "~/app/_components/Logo";

export const metadata = {
  title: "Travel Town Holidays | Login",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark overflow-x-hidden bg-slate-700">
        <header className="bg-slate-900 px-8 py-2">
          <Logo />
        </header>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}
