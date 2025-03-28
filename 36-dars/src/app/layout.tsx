import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/header/header";
import { Footer } from "@/footer/footer";
import QueryClientProviderComponent from "@/provider/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProviderComponent>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </QueryClientProviderComponent>
      </body>
    </html>
  );
}
