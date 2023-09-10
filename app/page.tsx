import CategoryList from "@/components/category/category-list";
import HotList from "@/components/hot/hot-list";
import PostList from "@/components/posts/post-list";
import formatDate from "@/lib/date-format";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main>
      <h1 className="text-center text-7xl leading-snug">
        Hi, I am <span className="font-extrabold">sarthak</span>, get a glimpse
        about what goes in my head.
      </h1>
      <div className="flex gap-10 my-16">
        <div className="flex-1 relative h-[400px] aspect-square">
          <Image src="/p1.jpeg" alt="header" fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4">
          <span>{`${formatDate(new Date())} - food`}</span>
          <h2 className="text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-slate-500">by John Doe</p>
          <Link href="/" className="border-b-2 w-fit px-1 py-1 border-primary">
            Read More
          </Link>
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
