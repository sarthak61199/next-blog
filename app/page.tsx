import CategoryList from "@/components/category/category-list";
import HotList from "@/components/hot/hot-list";
import PostList from "@/components/posts/post-list";
import Image from "next/image";

function Home() {
  return (
    <main className="mt-10">
      <h1 className="text-center text-7xl leading-snug">
        Hi, I am <span className="font-extrabold">sarthak</span>, get a glimpse
        about what goes in my head.
      </h1>
      <div className="flex gap-10 my-16">
        <div className="flex-1 relative h-[500px] aspect-square">
          <Image src="/p1.jpeg" alt="header" fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-zinc-400 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            molestias tempore nostrum ullam ex dolor sit deserunt voluptatum?
            Et, ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Esse molestias tempore nostrum ullam ex dolor sit deserunt
            voluptatum? Et, ipsum?
          </p>
        </div>
      </div>
      <CategoryList />
      <hr className="my-10" />
      <section className="flex gap-16">
        <div className="flex-[5]">
          <h2 className="text-3xl font-bold">Recents Posts</h2>
          <PostList />
        </div>
        <div className="flex-[2]">
          <h2 className="text-3xl font-bold">{"What's hot"}</h2>
          <HotList />
        </div>
      </section>
    </main>
  );
}

export default Home;
