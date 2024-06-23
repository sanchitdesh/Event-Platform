import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "MYWAY",
  description: "MyWAY-Events is a platform of event management.",
  icons: {
    icon: "/assets/images/logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

/*
Clerk Setup-
1. Account
2. Create an application and setup auth
3. Copy the env variables and set it to the project
4. Install clerk using its command
5. Wrap an application using ClerkProvider
6. Create a middleware to the project
*/
