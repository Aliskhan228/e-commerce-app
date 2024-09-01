import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CLientLAyout } from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - E-commerce Store",
  description: "Discover the latest products ad E-commerce store",
  keywords: "e-commerce, online store, products, shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CLientLAyout>
          <div>{children}</div>
        </CLientLAyout>
      </body>
    </html>
  );
}
