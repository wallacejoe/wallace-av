"use client";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./dropdownMenu";

const Header = () => {
  return (
    <div className="p-10 flex flex-col items-center w-full lg:flex-row lg:justify-around bg-green-800 text-white border-black border-b-2">
      <div className="">
        <Link className="w-full" href="/">
          <Image
            className="w-full min-w-24"
            src="/WallaceAVLogo.gif"
            alt="WallaceAV Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="text-center text-2xl mt-2">
        <h1>Wallace Family Audio Visual & Party Rentals</h1>
      </div>
      <DropdownMenu />
    </div>
  );
};

export default Header;
