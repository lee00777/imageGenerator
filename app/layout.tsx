import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
// chadcn 라이브러리
import { cn } from "@/lib/utils";
// clerk authentication 라이브러리
import {ClerkProvider} from '@clerk/nextjs'

// chadcn 라이브러리 용
const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: "IMGGenerator",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#624cf5'}}}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable )}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
