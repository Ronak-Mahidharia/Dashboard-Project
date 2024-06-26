
import type { Metadata } from "next";
import dynamic from 'next/dynamic' 
const NoSSR = dynamic(() => import('../components/SideNavBar'), { ssr: false })
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '../lib/utils';
import SideNavBar from "@/components/SideNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen w-full bg-white text-black flex", inter.className,
        {
          "debug-screens": process.env.NODE_ENV === "development"
        })}>

        {/* {sidebar} */}
        {/* <p className="border">
          SideBar
        </p> */}

        <NoSSR />


        {/* {main page} */}
        <div className="p-8 w-full">{children}</div>

      </body>
    </html>
  );
}
