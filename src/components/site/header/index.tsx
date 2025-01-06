import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="container fixed inset-x-0 top-0 z-50 border-b bg-background/20 py-6 backdrop-blur-sm">
      <div>
        <Navbar />
      </div>
    </header>
  );
}
