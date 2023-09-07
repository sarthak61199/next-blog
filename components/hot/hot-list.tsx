import HotItem from "./hot-item";

const hotList = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse molestias tempore nostrum ullam ex dolor sit deserunt voluptatum? Et, ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    imgUrl: "/p1.jpeg",
    createdAt: new Date(),
    name: "John Doe",
    category: "food",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse molestias tempore nostrum ullam ex dolor sit deserunt voluptatum? Et, ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    imgUrl: "/p1.jpeg",
    createdAt: new Date(),
    name: "John Doe",
    category: "food",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse molestias tempore nostrum ullam ex dolor sit deserunt voluptatum? Et, ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    imgUrl: "/p1.jpeg",
    createdAt: new Date(),
    name: "John Doe",
    category: "food",
  },
];

function HotList() {
  return (
    <div className="mt-8 flex flex-col gap-8">
      {hotList.map((item) => (
        <HotItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default HotList;
