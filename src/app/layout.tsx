import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
// import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    // <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div>

          <div className="text-xl">Tiny task manager</div>

        </div>



        <div className="w-2/3">


          {children}

        </div>

        <Toaster position="bottom-center"></Toaster>


      </body>
    </html>
    /* </ClerkProvider> */
  );
}
