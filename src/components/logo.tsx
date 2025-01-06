import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="font-serif text-xl font-medium uppercase">
      <span className="block sm:hidden">Nim</span>
      <span className="hidden sm:block">Nim Catering</span>
    </Link>
  );
}
