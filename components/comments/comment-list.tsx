import CommentItem from "./comment-item";

function CommentList() {
  return (
    <div className="flex flex-col gap-16 mt-16">
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}

export default CommentList;
