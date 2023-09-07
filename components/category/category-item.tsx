import { cn } from "@/lib/utils";
import Link from "next/link";

interface ICategoryItem {
  name: string;
  colorClass: string;
}

function CategoryItem({ name, colorClass }: ICategoryItem) {
  return (
    <Link
      href={`/post/${name}`}
      className={cn(
        colorClass,
        "flex flex-1 items-center justify-center rounded-md text-xl p-4"
      )}
    >
      {name}
    </Link>
  );
}

export default CategoryItem;
