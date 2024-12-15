"use client";

import NewCategoryForm from "@/components/forms/new-category-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AddCategoryDialog() {
  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Add Category</Button>
      </DialogTrigger>

      <DialogContent className={`${isMobile ? "max-w-[290]" : ""}`}>
        <DialogHeader>
          <DialogTitle>Add Categoy</DialogTitle>
          <DialogDescription>Add a new category to your Menu</DialogDescription>
        </DialogHeader>
        <NewCategoryForm />
      </DialogContent>
    </Dialog>
  );
}
