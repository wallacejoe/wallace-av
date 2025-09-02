import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "@/globals.css";

export const metadata = {
  title: "WallaceAV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-svh flex flex-col">
        <Header />
        <div className="flex-1 bg-background">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
