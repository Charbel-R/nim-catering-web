"use client";

import Link from "next/link";

import { OrganizationSwitcher, SignOutButton, useUser } from "@clerk/nextjs";
import { ChevronsUpDown, LogOut } from "lucide-react";

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

import { adminNavItems, orgNavItems, userNavItems } from "./nabvar-routes";

export function UserAvatar() {
  const { user } = useUser();
  if (!user) return null;

  const userDTO = {
    firstName: user?.firstName ?? "",
    fullName: user?.fullName ?? "",
    email: user?.emailAddresses[0].emailAddress ?? "",
    avatar: user?.imageUrl ?? ""
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2">
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={userDTO.avatar} alt={userDTO.fullName} />
            <AvatarFallback className="rounded-lg">
              {userDTO.firstName[0]}
            </AvatarFallback>
          </Avatar>
          <div className={"grid flex-1 text-left text-sm leading-tight"}>
            <span className="truncate font-semibold">{userDTO.firstName}</span>
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
              <AvatarImage src={userDTO.avatar} alt={userDTO.fullName} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{userDTO.fullName}</span>
              <span className="truncate text-xs">{userDTO.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {adminNavItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <DropdownMenuItem>
                <item.icon />
                {item.title}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {orgNavItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <DropdownMenuItem>
                <item.icon />
                {item.title}
              </DropdownMenuItem>
            </Link>
          ))}

          <OrganizationSwitcher />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {userNavItems.map((item) => (
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
