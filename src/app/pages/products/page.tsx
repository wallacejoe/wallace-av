import MainNav from "../ui/mainNav";
import ProductPage from "../ui/productPage";

export default function Page() {
  return (
    <main>
      <MainNav />
      <section className="w-full flex flex-col items-center p-12 box-border text-center">
        <ProductPage />
      </section>
    </main>
  );
}
