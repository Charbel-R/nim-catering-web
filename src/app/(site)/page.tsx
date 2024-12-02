import Link from "next/link";

import Logo from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const cateringInfo = {
    name: "Catering",
    description1:
      "Welcome to Nim! We make tailor-made catering for all your canal cruises through Amsterdam!",
    description2:
      "For specific wishes, please email nimcateringenevents@gmail.com or call 06 51 79 22 40"
  };
  const categories = [
    { id: 1, name: "SNACKS", slug: "snacks" },
    { id: 2, name: "BORREL PLATEAU", slug: "borrel-plateu" },
    { id: 3, name: "VOOR GERECHT", slug: "voor-gerecht" },
    { id: 4, name: "HOOFD GERECHT", slug: "hoofd-gerecht" },
    { id: 5, name: "BBQ", slug: "bbq" },
    { id: 6, name: "LUNCH", slug: "lunch" },
    { id: 7, name: "BUFFET", slug: "buffet" },
    { id: 8, name: "NA GERECHT", slug: "na-gerecht" },
    { id: 9, name: "MENU", slug: "menu" },
    { id: 10, name: "WALKING DINNER", slug: "walking-dinner" },
    { id: 11, name: "Caviar", slug: "caviar" }
  ];

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
