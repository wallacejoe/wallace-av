import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="w-full flex flex-col items-center bg-red-500 p-12 box-border text-center">
        <h2 className="w-9/12 text-6xl">
          Professional Equipment, Affordable Pricing and Timely Service
        </h2>
        <ul className="w-8/12 mt-10">
          <li className="flex w-full bg-neutral-500 rounded-lg mt-3">
            <Link
              className="w-full hover:bg-neutral-800 hover:text-white rounded-lg p-2"
              href=""
            >
              Products
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
      <section className="w-full flex flex-col items-center p-12 box-border text-center">
        <h2 className="w-6/12 text-4xl">
          From Events & Conferences to backyard Parties we have you covered with
          professional equipment and service
        </h2>
      </section>
      <div className="w-full flex justify-around p-12 box-border mb-12 mt-8">
        <p className="w-5/12 text-3xl">
          Serving in and around the Mesa Arizona area we can deliver, setup, and
          be onsite for technical assistance.
        </p>
        <section>
          <h3 className="mb-5 text-lg">Contact Us</h3>
          <ul className="text-lg">
            <li>Sales@WallaceAV.com</li>
            <li>(602) 692-8470</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
