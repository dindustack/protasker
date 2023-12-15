import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center hover:opacity-75 transition items-center gap-x-2">
        <Image src="/icons/logo.svg" alt="Logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1 font-bold">ProTasker</p>
      </div>
    </Link>
  );
};
