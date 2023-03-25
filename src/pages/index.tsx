"use client";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

import HomeComponent from "@/components/HomeComponent";
import Head from "next/head";

export default function Home() {
  return (
    <div className={"main " + inter.className}>
      <Head>
        <title>Firely | Read. Write. As you like.</title>
      </Head>
      <HomeComponent />
    </div>
  );
}
