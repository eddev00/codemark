import Gradientdiv from "@/components/ui/Gradientdiv";
import Navbar from "@/components/ui/Navbar";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" flex flex-col h-full ">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
