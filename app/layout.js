"use client";

import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import UserContextProvider from "./context/userContext";
import { version } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.minepi.com/pi-sdk.js";
    script.async = true;

    script.onload = () => {
      window.Pi.init({ version: "2.0", sandbox: true });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body className="body max-w-[400px] w-full mx-auto">
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
