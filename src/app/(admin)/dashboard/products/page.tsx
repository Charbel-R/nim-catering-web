import AddProductDrawer from "@/components/admin/products/add-product-drawer";
import DeleteProductButton from "@/components/admin/products/delete-product-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/db";
import { formatPrice } from "@/lib/price-formater";

export default async function ProductPage() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true
    }
  });

  const products = await prisma.product.findMany();

  return (
    <section className="flex flex-col gap-7 px-4 py-6">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold">All Menu items </h1>
        <AddProductDrawer categories={categories} />
      </div>

      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <Card
            className="flex h-11 items-center justify-between"
            key={product.id}
          >
            <CardHeader>{product.name}</CardHeader>
            <CardDescription>
              {
                categories.filter(
                  (category) => category.id === product.categoryId
                )[0].name
              }
            </CardDescription>
            <div className="mr-6 flex items-center gap-2">
              <div>
                <Badge variant={"transparent"}>
                  {formatPrice(product.price)}
                </Badge>
              </div>
              <div>
                <Badge variant={product.published ? "online" : "offline"}>
                  {product.published ? "online" : "offline"}
                </Badge>
              </div>
              <div>
                <DeleteProductButton productId={product.id} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
