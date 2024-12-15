import Footer from "@/components/footer";
import Header from "@/components/site/header";

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="container grow pb-24 pt-24">{children}</main>

      <Footer />
    </>
  );
}
