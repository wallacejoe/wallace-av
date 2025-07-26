import Carousel from "./ui/packageCarousel";

export default function Page() {
  return (
    <main>
      <section className="w-full flex flex-col items-center bg-secondary p-12 mb-12 box-border text-center">
        <h2 className="lg:w-3/5 text-5xl">
          Professional Equipment, Affordable Pricing, and Timely Service
        </h2>
      </section>
      <Carousel />
      <div className="w-full flex flex-col lg:flex-row lg:justify-around p-12 box-border mb-12 mt-8">
        <p className="lg:w-5/12 text-3xl">
          Serving in and around the Mesa Arizona area we can deliver, setup, and
          be onsite for technical assistance.
        </p>
      </div>
    </main>
  );
}
