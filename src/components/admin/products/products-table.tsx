import { Product } from "@prisma/client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { formatCurrencyEuro } from "@/lib/utils";
import { Category } from "@/types/category-type";

import DeleteProductButton from "./delete-product-button";

interface ProductPageProps {
  products: Product[];
  categories?: Category[];
  category?: Category;
}

export function ProductsTable({
  products,
  categories,
  category
}: ProductPageProps) {
  return (
    <Table>
      <TableCaption>A list of your Menu Items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>
              {categories
                ? categories.filter(
                    (category) => category.id === product.categoryId
                  )[0].name
                : category?.name}
            </TableCell>
            <TableCell>
              <Badge
                variant={product.published ? "online" : "destructive"}
                className="font-bold"
              >
                {product.published ? "Active" : "Offline"}
              </Badge>
            </TableCell>

            <TableCell>{formatCurrencyEuro(product.price)}</TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                <Badge variant="transparent">Edit</Badge>
                <Badge variant="destructive">
                  <DeleteProductButton productId={product.id} />
                </Badge>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total: {products.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
