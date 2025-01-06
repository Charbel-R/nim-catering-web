export type Category = {
  id: string;
  name: string;
  published: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoriesIdAndName = {
  id: string;
  name: string;
}[];
