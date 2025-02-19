import Link from "next/link";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";

import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import { UserAvatar } from "./user-avatar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-1">
        <ThemeToggle />

        <Button variant="ghost">
          <Link href="/cart" className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="hidden sm:block">Cart</span>
          </Link>
        </Button>

        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserAvatar />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
