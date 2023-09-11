"use client";

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import useAuthSession from "@/hooks/useAuthSession";
import { Loader2 } from "lucide-react";

function CommentInput() {
  const { session, isLoading, isLoggedIn } = useAuthSession();
  const [comment, setComment] = useState<string>("");

  console.log(session);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (comment?.trim().length === 0) {
      return;
    }
    console.log(comment);
  }

  if (isLoading) return <Loader2 className="h-6 w-6 animate-spin" />;

  return (
    <>
      {isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <Textarea
            rows={5}
            className="mb-4 text-lg p-4"
            placeholder="Enter a comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <Button className="text-lg" disabled={comment?.trim().length === 0}>
            Submit
          </Button>
        </form>
      ) : (
        <p>Please log in to comment</p>
      )}
    </>
  );
}

export default CommentInput;
