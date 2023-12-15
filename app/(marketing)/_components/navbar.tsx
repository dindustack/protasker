import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="
        fixed 
        top-0 
        w-full 
        h-14
        border-b 
        border-b-black
        flex 
        items-center 
        py-10 
        px-4"
    >
      <div className="md:max-w-screen-2xl mx-auto flex justify-between items-center w-full ">
        <Logo />
        <div className="flex justify-between items-center space-x-6 md:w-auto w-full">
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
