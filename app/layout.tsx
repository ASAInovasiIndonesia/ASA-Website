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
  title: "Asa CX Consulting & Design",
  description: "Creating seamless & memorable omnichannel experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} ${grotesque.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
