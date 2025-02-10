"use client";

import NewCategoryForm from "@/components/admin/categories/new-category-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

export default function AddCategoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Add Category</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>Add a new category to your Menu</DialogDescription>
        </DialogHeader>
        <NewCategoryForm />
      </DialogContent>
    </Dialog>
  );
}
