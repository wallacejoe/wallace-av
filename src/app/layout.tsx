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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
