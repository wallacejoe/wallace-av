export default function Page() {
  return (
    <main>
      <section className="w-full flex flex-col items-center bg-red-500 p-12 box-border text-center">
        <h2 className="lg:w-9/12 text-6xl">
          Professional Equipment, Affordable Pricing, and Timely Service
        </h2>
      </section>
      <section className="w-full flex flex-col items-center p-12 box-border text-center">
        <h2 className="lg:w-6/12 text-4xl">
          From events & conferences to backyard parties we have you covered with
          professional equipment and service
        </h2>
      </section>
      <div className="w-full flex flex-col lg:flex-row lg:justify-around p-12 box-border mb-12 mt-8">
        <p className="lg:w-5/12 text-3xl">
          Serving in and around the Mesa Arizona area we can deliver, setup, and
          be onsite for technical assistance.
        </p>
        <section className="max-lg:w-full max-lg:mt-12 max-lg:text-center">
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
