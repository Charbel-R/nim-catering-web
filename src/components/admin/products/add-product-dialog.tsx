"use client";

import NewProductForm from "@/components/forms/new-product-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface AddProductDialogProps {
  category?: {
    id: string;
    name: string;
  };
  categories?: {
    id: string;
    name: string;
  }[];
}

export default function AddProductDialog({
  categories,
  category
}: AddProductDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Add Product</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>Add a new product to your Menu</DialogDescription>
        </DialogHeader>
        {categories && <NewProductForm categories={categories} />}
        {category && <NewProductForm category={category} />}
      </DialogContent>
    </Dialog>
  );
}
