import AddProductDialog from "@/components/admin/products/add-product-dialog";
import { ProductsTable } from "@/components/admin/products/products-table";
import prisma from "@/lib/db/db";

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
      <div className="flex gap-4">
        <h1 className="text-xl">{category.name}</h1>
        <AddProductDialog category={addCategory} />
      </div>
      <ProductsTable products={category.products} category={category} />
    </section>
  );
}
