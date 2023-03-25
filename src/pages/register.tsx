"use client";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

import WaitListForm from "@/components/WaitListForm";

const register = () => {
  return (
    <div className={"main " + inter.className}>
      <WaitListForm />
    </div>
  );
};

export default register;
