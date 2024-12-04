import { createCategory } from "@/actions/categories-actions";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function CreateCategoryForm() {
  return (
    <form action={createCategory}>
      <Label htmlFor="name">Create a new Category : </Label>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Category name ..."
        className="mt-2 w-min"
      />
      <Button
        type="submit"
        className="mt-4 bg-blue-400 py-2 font-bold text-white hover:bg-blue-600"
      >
        Add Category
      </Button>
    </form>
  );
}
