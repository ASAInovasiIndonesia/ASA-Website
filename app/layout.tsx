import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asaindonesia.net"),
  title: "Asa CX Consulting & Design",
  description:
    "From the first hello to a forever connection, embark on your journey to success with ASA CX.",
  openGraph: {
    type: "website",
    url: "https://asaindonesia.net",
    title: "Asa CX Consulting & Design",
    description:
      "From the first hello to a forever connection, embark on your journey to success with ASA CX.",
    siteName: "ASA Indonesia",
    images: [{ url: "https://asaindonesia.net/apple-touch-icon.png?" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={`${jakarta.className} ${grotesque.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
