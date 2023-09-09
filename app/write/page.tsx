"use client";

import { useState } from "react";
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

function Write() {
  const [title, setTitle] = useState("");

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

  return (
    <section className="h-[calc(100svh-200px-5rem)] flo">
      <form className="space-y-8">
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
        <Select>
          <SelectTrigger className="w-[400px]">
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Button className="text-lg">Publish</Button>
      </form>
    </section>
  );
}

export default Write;
