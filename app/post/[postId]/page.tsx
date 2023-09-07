import Image from "next/image";
import HotList from "@/components/hot/hot-list";
import Comments from "@/components/comments";
import CustomAvatar from "@/components/custom-avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function SinglePost({ params }: { params: { postId: string } }) {
  const { postId } = params;

  return (
    <main>
      <div className="flex gap-10 items-center">
        <div className="flex-1 flex flex-col gap-12">
          <div>
            <Link href="/">
              <Badge className="mb-4 text-md">food</Badge>
            </Link>
            <h2 className="text-5xl font-bold leading-[1.1]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
          <CustomAvatar url="/p1.jpeg" name="John Doe" date={new Date()} />
        </div>
        <div className="flex-1 h-[400px] w-[400px] relative">
          <Image src="/p1.jpeg" fill alt="image" className="object-cover" />
        </div>
      </div>
      <hr className="my-20" />
      <section className="flex gap-16">
        <div className="flex-[5] text-lg">
          <div className="mb-20">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              architecto nisi minima saepe eum eveniet, cupiditate alias in id
              quam dolorum, repudiandae quisquam molestiae a facilis. Nesciunt
              illo tenetur exercitationem sapiente iusto, voluptatem laborum
              harum ducimus amet magnam dolor odio cumque cum consectetur,
              corrupti consequatur! Laboriosam itaque vero aliquid. Deserunt in
              dignissimos fugit, obcaecati blanditiis dolores sunt amet placeat
              id vel? Porro, tenetur! Placeat, pariatur. Tempore maxime aliquam
              eius minima unde illum quos, aut nihil iure veritatis adipisci sed
              voluptatibus ipsam deserunt aperiam velit quis. Neque quo quis,
              repellat aperiam doloribus numquam praesentium dolorum velit,
              adipisci placeat natus. Dolores, explicabo?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              architecto nisi minima saepe eum eveniet, cupiditate alias in id
              quam dolorum, repudiandae quisquam molestiae a facilis. Nesciunt
              illo tenetur exercitationem sapiente iusto, voluptatem laborum
              harum ducimus amet magnam dolor odio cumque cum consectetur,
              corrupti consequatur! Laboriosam itaque vero aliquid. Deserunt in
              dignissimos fugit, obcaecati blanditiis dolores sunt amet placeat
              id vel? Porro, tenetur! Placeat, pariatur. Tempore maxime aliquam
              eius minima unde illum quos, aut nihil iure veritatis adipisci sed
              voluptatibus ipsam deserunt aperiam velit quis. Neque quo quis,
              repellat aperiam doloribus numquam praesentium dolorum velit,
              adipisci placeat natus. Dolores, explicabo?
            </p>
          </div>
          <Comments />
        </div>
        <div className="flex-[2]">
          <h2 className="text-3xl font-bold">{"What's hot"}</h2>
          <HotList />
        </div>
      </section>
    </main>
  );
}

export default SinglePost;
