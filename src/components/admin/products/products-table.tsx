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

import DeleteProductButton from "./delete-product-button";

interface ProductPageProps {
  products: Product[];
}

export function ProductsTable({ products }: ProductPageProps) {
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
            <TableCell>{product.categoryName}</TableCell>
            <TableCell>
              <Badge
                variant={product.isPublished ? "online" : "destructive"}
                className="font-bold"
              >
                {product.isPublished ? "Published" : "Offline"}
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
