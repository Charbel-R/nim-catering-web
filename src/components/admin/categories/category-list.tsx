import Link from "next/link";

import { Power, PowerOff } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { getCategories } from "@/lib/categories";
import { Category } from "@/types/category-type";

const categories: Category[] = (await getCategories()) as Category[];

export default function CategoryList() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/dashboard/categories/${category.slug}`}>
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{category.name}</CardTitle>
                  {category.published ? (
                    <Power
                      size={16}
                      className="text-green-800 dark:text-green-700"
                    />
                  ) : (
                    <PowerOff size={14} className="text-red-700" />
                  )}
                </div>
              </CardHeader>
              <CardDescription className="sr-only">
                {category.name}
              </CardDescription>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
