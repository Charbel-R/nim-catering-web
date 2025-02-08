"use client";

import { Trash2 } from "lucide-react";

import { deleteProduct } from "@/db/products";

interface DeleteProductButtonProps {
  productId: string;
}

const DeleteProductButton: React.FC<DeleteProductButtonProps> = ({
  productId
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId);
    }
  };

  return <Trash2 className="h-5 w-5" onClick={handleDelete} />;
};

export default DeleteProductButton;
