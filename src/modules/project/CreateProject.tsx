"use client";

import ImageUploader from "@/components/ImageUploader";
import InputTags from "@/components/InputTags";
import MultipleImageUploader from "@/components/MultipleImageUploader";
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
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import Tiptap from "../blog/Tiptap";

// LinkInput component for managing name-URL pairs
interface LinkInputProps {
  value: Array<{ name: string; url: string }>;
  onChange: (links: Array<{ name: string; url: string }>) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ value, onChange }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const addLink = () => {
    if (name && url) {
      try {
        // Validate URL format
        new URL(url);
        onChange([...value, { name, url }]);
        setName("");
        setUrl("");
      } catch {
        alert("Please enter a valid URL");
      }
    }
  };

  const removeLink = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          placeholder="Link name (e.g., GitHub)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="URL (e.g., https://github.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="button" onClick={addLink} disabled={!name || !url}>
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {value.map((link, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-md"
          >
            <span>{link.name}: </span>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {link.url}
            </a>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeLink(index)}
              className="p-1"
            >
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Project schema (same as provided)
const projectSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters long")
    .max(50, "Title must be at most 50 characters long"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters long"),
  excerpt: z
    .string()
    .max(150, "Excerpt must be at most 150 characters long")
    .optional(),
  links: z
    .array(
      z.object({
        name: z
          .string()
          .min(2, { message: "Link name must be at least 2 characters long" })
          .max(20, { message: "Link name must be at most 20 characters long" }),
        url: z.string().url("Please enter a valid URL"),
      })
    )
    .min(1, "At least one link is required"),
  technologies: z
    .array(
      z
        .string()
        .min(2, {
          message: "Technology name must be at least 2 characters long",
        })
        .max(50, {
          message: "Technology name must be at most 50 characters long",
        })
    )
    .min(1, "At least one technology is required"),
});

const CreateProject = () => {
  const [poster, setPoster] = useState<(File | FileMetadata) | null>(null);
  const [galleries, setGalleries] = useState<(File | FileMetadata)[] | []>([]);
  
  const form = useForm<z.infer<typeof projectSchema>>({
      resolver: zodResolver(projectSchema),
      defaultValues: {
          title: "",
          description: "",
          excerpt: "",
          links: [],
          technologies: [],
        },
    });
    const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const projectData = {
      ...data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(projectData));
    if (poster) formData.append("poster", poster as File);
    galleries.forEach((file) => {
      formData.append("galleries", file as File);
    });

    try {
      const toastId = toast.loading("Creating project...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/project/create`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );
      if (!response.ok) {
        toast.error("Failed to create project", { id: toastId });
      }
      toast.success("Project created successfully", { id: toastId });
      router.push("/projects");
    } catch (error) {
        toast.error("An error occurred while creating the project");
        console.error("Error creating project:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
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
                    <Input placeholder="My Awesome Project" {...field} />
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
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Tiptap
                      description={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormDescription>
                    This is the main description of your project.
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
                    <Input
                      placeholder="A brief summary of your project..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="links"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Links</FormLabel>
                  <FormControl>
                    <LinkInput
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
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies</FormLabel>
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
              Create Project
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateProject;
