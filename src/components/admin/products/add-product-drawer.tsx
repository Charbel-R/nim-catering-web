import { PlusCircleIcon } from "lucide-react";

import NewProductForm from "@/components/forms/new-product-form";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";

interface AddProductDrawerProps {
  category?: {
    id: string;
    name: string;
  };
  categories?: {
    id: string;
    name: string;
  }[];
}

export default function AddProductDrawer({
  categories,
  category
}: AddProductDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex items-center gap-2">
          <PlusCircleIcon className="h-5 w-5" />
          <h2 className="text-xl font-bold">Add a new product</h2>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="sr-only">Add Product</DrawerTitle>
            <DrawerClose />
          </DrawerHeader>
          {category && <NewProductForm category={category} />}
          {categories && <NewProductForm categories={categories} />}

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
