import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
      <SearchIcon className=" h-4 w-4" />
    </div>
  );
}
