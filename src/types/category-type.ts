export type Category = {
  id: string;
  name: string;
  isPublished: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoriesIdAndName = {
  id: string;
  name: string;
}[];

export type CategoryNameFromId = {
  name: string;
};
