"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/db/products";
import { NewProductSchema } from "@/lib/z-schemas";

interface NewProductFormProps {
  category?: {
    id: string;
    name: string;
  };
  categories?: {
    id: string;
    name: string;
  }[];
}

export default function NewProductForm({
  categories,
  category
}: NewProductFormProps) {
  const form = useForm<z.infer<typeof NewProductSchema>>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      isPublished: "true",
      categoryId: category ? category.id : ""
    }
  });

  function onSubmit(formData: z.infer<typeof NewProductSchema>) {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("price", formData.price);
    formDataToSubmit.append("isPublished", formData.isPublished || "false");
    formDataToSubmit.append("categoryId", formData.categoryId);

    createProduct(formDataToSubmit);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {category && (
          <>
            <h2 className="font-bold">
              Add a new product to{" "}
              <span className="text-xl text-green-400">{category.name}</span>
            </h2>
            <FormField
              control={form.control}
              name="categoryId"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input type="hidden" value={category.id} readOnly />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Give your item a name: </FormLabel>
              <FormControl>
                <Input placeholder="Enter a name ..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe your item:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a description ..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price:</FormLabel>
              <FormControl>
                <Input type="number" step="0.05" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isPublished"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Published </FormLabel>
                <FormDescription>
                  This product will be visible to customers if published.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value === "true"} // Convert to boolean for Switch
                  onCheckedChange={(checked) =>
                    field.onChange(checked ? "true" : "false")
                  } // Convert back to string
                />
              </FormControl>
            </FormItem>
          )}
        />

        {categories && (
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category that best describes the product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button
          type="submit"
          className="mt-4 w-full bg-blue-400 py-2 font-bold text-white hover:bg-blue-600"
        >
          Add Product
        </Button>
      </form>
    </Form>
  );
}
