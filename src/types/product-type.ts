export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  isPublished: boolean;
  categotyName: string;
  categoryId: string;
  nutrients: string;
  allergies: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateProduct = {
  name: string;
  description: string;
  price: string;
  isPublished?: string | undefined;
  categoryId: string;
};
