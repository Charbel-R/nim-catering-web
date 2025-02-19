import {
  CircleUser,
  CreditCard,
  ListOrdered,
  LucideLayoutDashboard
} from "lucide-react";

const adminNavItems = [
  {
    title: "Admin dashboard",
    icon: LucideLayoutDashboard,
    href: "/dashboard"
  }
];

const orgNavItems = [
  {
    title: "Create organization",
    icon: CircleUser,
    href: "/create-organization"
  }
];

const userNavItems = [
  {
    title: "Account",
    icon: CircleUser,
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

export { adminNavItems, orgNavItems, userNavItems };
