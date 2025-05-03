import Link from "next/link";

export default function MainNav() {
  return (
    <section className="w-full flex flex-col items-center bg-red-500 p-12 box-border text-center">
      <h2 className="w-9/12 text-6xl">
        Professional Equipment, Affordable Pricing and Timely Service
      </h2>
      <ul className="w-8/12 mt-10">
        <li className="flex w-full bg-neutral-500 rounded-lg mt-3">
          <Link
            className="w-full hover:bg-neutral-800 hover:text-white rounded-lg p-2"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="flex w-full bg-neutral-500 rounded-lg mt-3">
          <Link
            className="w-full hover:bg-neutral-800 hover:text-white rounded-lg p-2"
            href=""
          >
            Packages
          </Link>
        </li>
      </ul>
    </section>
  );
}
