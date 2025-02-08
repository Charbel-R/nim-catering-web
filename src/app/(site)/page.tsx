import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/db/db";

export default async function HomePage() {
  const categories = await prisma.category.findMany({
    where: {
      published: true
    }
  });

  const cateringInfo = {
    name: "Nim Catering",
    description1:
      "We make tailor-made catering for all your canal cruises through Amsterdam! ",
    description2:
      "For specific wishes, please email nimcateringenevents@gmail.com or call 06 51 79 22 40"
  };

  return (
    <>
      <section className="flex flex-col justify-center gap-4 px-4 py-6">
        <Card className="mx-auto flex max-w-2xl flex-col items-center">
          <CardHeader>
            <CardTitle> Welcome to {cateringInfo.name}</CardTitle>
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
              className="rounded-lg border p-4 shadow-md hover:shadow-blue-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
