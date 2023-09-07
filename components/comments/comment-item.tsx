import CustomAvatar from "../custom-avatar";

function CommentItem() {
  return (
    <div>
      <CustomAvatar url="/p1.jpeg" name="John Doe" date={new Date()} />
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
        dolorum quas totam amet accusamus sapiente facilis magni provident
        expedita laboriosam.
      </p>
    </div>
  );
}

export default CommentItem;
