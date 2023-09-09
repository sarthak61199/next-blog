import { cn } from "@/lib/utils";
import Link from "next/link";

interface ICategoryItem {
  name: string;
  colorHash: string;
}

function CategoryItem({ name, colorHash }: ICategoryItem) {
  return (
    <Link
      href={`/category/${name}`}
      className={cn(
        "flex flex-1 items-center justify-center rounded-md text-xl p-4",
        colorHash
      )}
    >
      {name}
    </Link>
  );
}

export default CategoryItem;
