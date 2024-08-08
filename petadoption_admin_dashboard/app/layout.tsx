import type { Metadata } from "next";
import { ReactNode } from 'react';

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "@/Layout/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    template:"%s",
    default:"Admin dashboard -Easy Pets"
  },
  description:"Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
