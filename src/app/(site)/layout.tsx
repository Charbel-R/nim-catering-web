import Footer from "@/components/footer";
import Header from "@/components/site/header";

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container grow pb-24 pt-24">{children}</main>

      <Footer />
    </div>
  );
}
