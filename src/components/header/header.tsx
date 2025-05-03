import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="p-10 flex flex-col items-center w-full bg-green-800 text-white border-black border-b-2">
      <div className="w-1/12 flex justify-center">
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
    </div>
  );
};

export default Header;
