import Link from "next/link";

import Logo from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/db/db";

export default async function HomePage() {
  const categories = await prisma.category.findMany({
    where: {
      published: true
    }
  });

  const cateringInfo = {
    name: "Catering",
    description1:
      "Welcome to Nim! We make tailor-made catering for all your canal cruises through Amsterdam!",
    description2:
      "For specific wishes, please email nimcateringenevents@gmail.com or call 06 51 79 22 40"
  };

  return (
    <>
      <section className="flex flex-col justify-center gap-4 px-4 py-6">
        <Logo />
        <Card>
          <CardHeader>
            <CardTitle>{cateringInfo.name}</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            {cateringInfo.description1}
            <br />
            {cateringInfo.description2}
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/menu/${category.slug}`}
              className="rounded-lg border p-4 shadow-md hover:shadow-red-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
