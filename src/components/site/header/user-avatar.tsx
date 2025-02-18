"use client";

import Link from "next/link";

import { SignOutButton } from "@clerk/nextjs";
import {
  BadgeCheck,
  ChevronsUpDown,
  CreditCard,
  ListOrdered,
  LogOut,
  LucideLayoutDashboard
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function UserAvatar({
  user
}: {
  user: {
    firstName: string;
    fullName: string;
    email: string;
    avatar: string;
  };
}) {
  const navItems = [
    {
      title: "Account",
      icon: BadgeCheck,
      href: "/account"
    },
    {
      title: "Billing",
      icon: CreditCard,
      href: "/billing"
    },
    {
      title: "Orders",
      icon: ListOrdered,
      href: "/orders"
    }
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2">
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={user.avatar} alt={user.fullName} />
            <AvatarFallback className="rounded-lg">
              {user.firstName[0]}
            </AvatarFallback>
          </Avatar>
          <div className={"grid flex-1 text-left text-sm leading-tight"}>
            <span className="truncate font-semibold">{user.firstName}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-3" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.fullName} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.fullName}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard">
            <DropdownMenuItem>
              <LucideLayoutDashboard />
              Admin dashboard
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <DropdownMenuItem>
                <item.icon />
                {item.title}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
