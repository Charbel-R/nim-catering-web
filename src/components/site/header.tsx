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

const navItems = [
  {
    title: "Dashboard",
    icon: LucideLayoutDashboard,
    href: "/dashboard"
  },
  {
    title: "Menu",
    icon: House,
    href: "/"
  },
  {
    title: "Profile",
    icon: CircleUserRound,
    href: "/profile"
  }
];

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
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex gap-4">
                    <item.icon className="h-5 w-5" />
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <ul className="hidden text-sm font-medium sm:flex sm:items-center sm:gap-14">
          <li>
            <Logo />
          </li>
        </ul>

        <ul className="hidden gap-4 text-sm font-medium sm:flex sm:items-center">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.href}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-6">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
