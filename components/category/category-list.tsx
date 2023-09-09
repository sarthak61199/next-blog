import { Category } from "@prisma/client";
import CategoryItem from "./category-item";
import db from "@/lib/db";

const getCategoryList = async () => {
  const data = await db.category.findMany();
  return data;
};

async function CategoryList() {
  const categoryItemList: Category[] = await getCategoryList();

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">Categories</h2>
      <div className="flex justify-between gap-8">
        {categoryItemList.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default CategoryList;
