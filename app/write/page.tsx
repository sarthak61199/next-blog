"use client";

import { FormEvent, useState } from "react";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import useSWR, { Fetcher } from "swr";
import { Category } from "@prisma/client";
import { Loader2 } from "lucide-react";

function Write() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const fetcher: Fetcher<Category[], string> = (...args) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/category", fetcher);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Image,
      Placeholder.configure({
        placeholder: "Write a description...",
        emptyEditorClass:
          "text-gray-400 float-left left-0 before:content-[attr(data-placeholder)]",
      }),
    ],
    content: "",
    autofocus: true,
    editable: true,
    editorProps: {
      attributes: {
        class:
          "border border-white h-[400px] p-4 text-lg overflow-y-auto focus:outline-none",
      },
    },
  });

  const validate = () => {
    if (
      title?.length === 0 ||
      category?.length === 0 ||
      editor?.getHTML()?.length === 0
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(title, category, editor?.getHTML());
    }
  };

  if (isLoading) {
    return <Loader2 className="h-6 w-6 animate-spin" />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <section className="h-[calc(100svh-200px-5rem)]">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent text-4xl font-bold focus:outline-none p-4 w-full border-b-[1px] border-b-white placeholder:text-gray-400"
        />
        {editor ? (
          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <button>hi</button>
          </BubbleMenu>
        ) : null}
        <EditorContent editor={editor} />
        <Select onValueChange={(value: string) => setCategory(value)}>
          <SelectTrigger className="w-[400px]">
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            {!isLoading && !error
              ? data?.map((item: Category) => (
                  <SelectItem value={item.name} key={item.id}>
                    {item.name}
                  </SelectItem>
                ))
              : null}
          </SelectContent>
        </Select>
        <Button className="text-lg">Publish</Button>
      </form>
    </section>
  );
}

export default Write;
