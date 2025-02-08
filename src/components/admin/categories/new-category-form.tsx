"use client";

import { useActionState, useEffect, useState } from "react";

import { toast } from "sonner";

import { createCategoryAction } from "@/actions/category-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { NewCategorySchema } from "@/lib/z-schemas";

export default function NewCategoryForm() {
  const [validationErrors, setValidationErrors] = useState<{ title: string }>({
    title: ""
  });

  const [state, dispatch, isPending] = useActionState(createCategoryAction, {
    success: "",
    error: undefined
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  function formAction(formData: FormData) {
    //validate form data
    const data = Object.fromEntries(formData.entries());
    const result = NewCategorySchema.safeParse(data);

    if (!result.success) {
      // return toast.error(result.error.errors[0].message);
      setValidationErrors({ title: result.error.errors[0].message });
      return;
    }
    // create category
    dispatch(formData);
    // reset the form after submission
  }

  // validate form input for errors and set validation errors
  function validate(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const result = NewCategorySchema.safeParse({ [name]: value });

    if (!result.success) {
      setValidationErrors({ title: result.error.errors[0].message });
    } else {
      setValidationErrors({ title: "" });
    }
  }

  return (
    <form action={formAction}>
      <div className="mt-12 flex min-w-10 flex-col gap-3">
        <Input
          type="text"
          name="name"
          placeholder="Enter category name"
          onChange={validate}
        />
        {validationErrors.title && (
          <span className="text-sm text-red-500">{validationErrors.title}</span>
        )}
        <div className="ml-1 flex items-center space-x-4">
          <Label htmlFor="isPublished">Published</Label>
          <Switch id="isPublished" name="isPublished" />
        </div>

        <Button type="submit">
          {isPending ? "Creating ..." : "Create Category"}
        </Button>
      </div>
    </form>
  );
}
