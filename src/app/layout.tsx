import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xPay Checkout | Y Combinator (YC W24)",
  description: "xPay Checkout | Y Combinator (YC W24)",
  icons: {
    icon: "/favicon.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className=" bg-[#141414] ">{children}</div>
      </body>
    </html>
  );
}
