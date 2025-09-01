import Carousel from "./ui/packageCarousel";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="w-3/4 flex flex-col justify-self-center items-center bg-secondary p-12 mb-12 mt-6 box-border text-center rounded-lg">
        <h2 className="lg:w-4/5 text-5xl">
          Professional Equipment, Affordable Pricing, and Timely Service
        </h2>
      </section>
      <Carousel />
      <div className="w-3/5 flex flex-col lg:flex-row lg:justify-around justify-self-center bg-secondary p-12 box-border border-2 border-white rounded-xl mb-12 mt-8">
        <p className="lg:w-2/3 text-3xl">
          Serving in and around the Mesa Arizona area we can deliver, setup, and
          be onsite for technical assistance.
        </p>
        <Link
          className="relative bg-accent2 hover:bg-accent hover:text-white max-h-fit p-2 rounded border border-black hover:border-secondary"
          href="/"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
