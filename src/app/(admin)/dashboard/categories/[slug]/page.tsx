import AddProductDrawer from "@/components/admin/products/add-product-drawer";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import prisma from "@/lib/db";
import { formatPrice } from "@/lib/price-formater";

interface AdminCategoryPageProps {
  params: {
    slug: string;
  };
}
export default async function AdminCategogyPage({
  params
}: AdminCategoryPageProps) {
  const { slug } = await params;
  const category = await prisma.category.findUnique({
    where: {
      slug: slug
    },
    include: {
      products: true
    }
  });

  if (!category) {
    return <div>Category not found</div>;
  }

  const addCategory = {
    id: category.id,
    name: category.name
  };

  return (
    <section className="container px-4 py-6">
      <h1 className="text-xl">{category.name}</h1>
      <section>
        <div className="flex gap-4">
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
          <AddProductDrawer category={addCategory} />
        </div>
      </section>
      <section className="mt-6 flex flex-col gap-4">
        <ul>
          {category.products.map((product) => (
            <Card
              key={product.id}
              className="mb-2 flex h-16 items-center justify-between px-10"
            >
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-9">
                <CardTitle>{formatPrice(product.price)}</CardTitle>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </section>
    </section>
  );
}
