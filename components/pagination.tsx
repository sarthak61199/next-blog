import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

function Pagination() {
  return (
    <div className="flex justify-between">
      <ChevronLeftCircle size={40} className="cursor-pointer" />
      <ChevronRightCircle size={40} className="cursor-pointer" />
    </div>
  );
}

export default Pagination;
