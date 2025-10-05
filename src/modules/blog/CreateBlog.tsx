"use client";

import ImageUploader from "@/components/ImageUploader";
import InputTags from "@/components/InputTags";
import MultipleImageUploader from "@/components/MultipleImageUploader";
import MultipleSelection from "@/components/MultipleSelection";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileMetadata } from "@/hooks/use-file-upload";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import Tiptap from "./Tiptap";
import { useRouter } from "next/router";

const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(50, "Title must be at most 50 characters long"),
  content: z.string().min(20, "Content must be at least 20 characters long"),
  excerpt: z
    .string()
    .max(150, "Excerpt must be at most 150 characters long")
    .optional(),
  categories: z.array(z.number()).min(1, "At least one category is required"),
  tags: z.array(z.string()).optional(),
});

const CreateBlog = () => {
  const [poster, setPoster] = useState<(File | FileMetadata) | null>(null);
  const [galleries, setGalleries] = useState<(File | FileMetadata)[] | []>([]);

  const categories = [
    { id: 1, name: "React" },
  ];

     const router = useRouter();
    
    
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      categories: [],
      tags: [],
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const blogData = {
      ...data,
    };
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(blogData));
    if (poster) formdata.append("poster", poster as File);
    galleries.forEach((file) => {
      formdata.append(`galleries`, file as File);
    });
    console.log(blogData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/blog/create`,
        {
          method: "POST",
          body: formdata,
          credentials: "include",
        }
      );
        if (!response.ok) throw new Error("Failed to create blog");
        router.push("/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"flex flex-col gap-6"}>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="React 19.3 is awesome!" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Content</FormLabel>
                  <FormControl>
                    <Tiptap
                      description={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is the content of your blog post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Input placeholder="React 19.3 is awesome!" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categories</FormLabel>
                  <FormControl>
                    <MultipleSelection
                      options={categories}
                      value={field.value || []}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <InputTags
                      tagOptions={field.value || []}
                      onChange={(tags) => field.onChange(tags)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Poster Image</FormLabel>
              <ImageUploader onChange={setPoster} />
            </div>

            <div>
              <FormLabel>Gallery Images</FormLabel>
              <MultipleImageUploader onChange={setGalleries} />
            </div>

            <Button type="submit" className="w-full">
              Create
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default CreateBlog;
