import MainNav from "../ui/mainNav";
import PackagePage from "../ui/packagePage";

export default function Page() {
  return (
    <main>
      <MainNav />
      <section className="w-full flex flex-col items-center p-12 box-border text-center">
        <PackagePage />
      </section>
    </main>
  );
}
