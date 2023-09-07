import CommentInput from "./comment-input";
import CommentList from "./comment-list";

function Comments() {
  return (
    <>
      <h2 className="text-3xl mb-8 font-bold">Comments</h2>
      <CommentInput />
      <CommentList />
    </>
  );
}

export default Comments;
