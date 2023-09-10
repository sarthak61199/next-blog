import Image from "next/image";
import formatDate from "@/lib/date-format";
import Link from "next/link";

interface IPostItem {
  id: number;
  title: string;
  imgUrl: string;
  createdAt: Date;
  name: string;
  category: string;
}

function PostItem({ id, title, imgUrl, createdAt, name, category }: IPostItem) {
  return (
    <div className="flex gap-10">
      <div className="flex-1 relative h-[300px] aspect-square">
        <Image src="/p1.jpeg" alt="header" fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4">
        <span>{`${formatDate(createdAt)} - ${category}`}</span>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-slate-500">by {name}</p>
        <Link href="/" className="border-b-2 w-fit px-1 py-1 border-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
