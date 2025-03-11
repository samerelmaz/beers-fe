import type { Metadata } from "next";
import "./globals.css";
import { BaseProviders } from "./base-providers";

export const metadata: Metadata = {
  title: "Beers app",
  description: "See order details for beers orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <BaseProviders>{children}</BaseProviders>
      </body>
    </html>
  );
}
