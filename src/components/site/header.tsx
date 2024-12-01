import Link from "next/link";

import {
  CircleUserRound,
  House,
  LucideLayoutDashboard,
  Menu
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import Logo from "../logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/20 py-6 backdrop-blur-sm">
      <nav className="container flex items-center justify-between">
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetDescription className="sr-only">
              Main navigation for Customers
            </SheetDescription>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <ul className="mt-10 flex flex-col gap-3 text-sm">
              <li>
                <Link href="/dashboard" className="flex gap-4">
                  <LucideLayoutDashboard className="h-5 w-5" />
                  <p>Admin&apos;s Dashboard</p>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex gap-4">
                  <House className="h-5 w-5" />
                  <p>Menu</p>
                </Link>
              </li>
              <li>
                <Link href={"/profile"} className="flex gap-4">
                  <CircleUserRound className="h-5 w-5" />
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        <ul className="hidden text-sm font-medium sm:flex sm:items-center sm:gap-14">
          <li>
            <Logo />
          </li>
        </ul>

        <ul className="hidden gap-4 text-sm font-medium sm:flex sm:items-center">
          <li>
            <Link href="/dashboard">Admin</Link>
          </li>
          <li>
            <Link href="/">Menu</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-6">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
