import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import formatDate from "@/lib/date-format";

interface IHotItem {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  createdAt: Date;
  name: string;
  category: string;
}

function HotItem({ title, imgUrl, createdAt, name, category }: IHotItem) {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={imgUrl}
        width={60}
        height={60}
        alt={title}
        className="aspect-square rounded-full"
      />
      <div className="flex flex-col gap-2">
        <Badge className="self-start">{category}</Badge>
        <h4 className="font-extrabold">{title}</h4>
        <p className="text-sm">
          <span>{name}</span> - {formatDate(createdAt)}
        </p>
      </div>
    </Link>
  );
}

export default HotItem;
