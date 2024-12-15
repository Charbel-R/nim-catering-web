import AddCategoryDialog from "@/components/admin/categories/add-category-dialog";
import CategoryList from "@/components/admin/categories/category-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function CategogiesPage() {
  return (
    <>
      <section className="container px-4 py-6">
        <Tabs defaultValue="category" className="w-full">
          <TabsList>
            <TabsTrigger value="category">Categories</TabsTrigger>
            <TabsTrigger asChild value="add">
              <AddCategoryDialog />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="category">
            <CategoryList />
          </TabsContent>
          <TabsContent value="edit"></TabsContent>
        </Tabs>
      </section>
    </>
  );
}
