import React from "react";
import logo from "@/public/CodeLibrary.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className=" flex justify-between py-[51px] items-center">
      <Image src={logo} alt="logo" />
      {/*Login*/}
      <div className=" flex items-center">
        <Button variant="link" size="login">
          Log in
        </Button>
        <Button size="signup" variant="Signup">
          Sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
