import Pagination from "../pagination";
import PostCard from "./post-item";

const postList = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

    imgUrl: "/p1.jpeg",
    createdAt: new Date(),
    name: "John Doe",
    category: "food",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

    imgUrl: "/p1.jpeg",
    createdAt: new Date(),
    name: "John Doe",
    category: "food",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

    imgUrl: "/p1.jpeg",
    createdAt: new Date(),
    name: "John Doe",
    category: "food",
  },
];

function PostList() {
  return (
    <div className="mt-8 flex flex-col gap-16">
      {postList.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
      <Pagination />
    </div>
  );
}

export default PostList;
