import CategoryItem from "./category-item";

const categoryItemList = [
  { name: "fashion", colorClass: "bg-sky-400" },
  { name: "coding", colorClass: "bg-red-400" },
  { name: "culture", colorClass: "bg-violet-400" },
  { name: "travel", colorClass: "bg-fuchsia-400" },
  { name: "food", colorClass: "bg-pink-400" },
];

function CategoryList() {
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">Categories</h2>
      <div className="flex justify-between gap-8">
        {categoryItemList.map((item) => (
          <CategoryItem key={item.name} {...item} />
        ))}
      </div>
    </>
  );
}

export default CategoryList;
