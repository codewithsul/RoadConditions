import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// Dynamically import the Map component to ensure it only runs on the client side
const DynamicMap = dynamic(() => import("../components/Map/Map"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="h-full">
      <body className="relative h-full overflow-hidden">
        <div className="relative  inset-0">
          <DynamicMap />
        </div>
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 overflow-auto ${inter.className}`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
