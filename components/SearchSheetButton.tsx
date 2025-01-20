import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownIcon } from "lucide-react";

interface DropdownMenuCheckboxItemProps {
  span: number;
  triggerName: string;
  content1: string;
  content2: string;
  content3: string;
}

function SearchSheetButton({
  span,
  triggerName,
  content1,
  content2,
  content3,
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`col-span-${span} justify-between items-center text-sm whitespace-nowrap`}
        >
          {triggerName}
          <ArrowDownIcon className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>{content1}</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>{content2}</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>{content3}</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SearchSheetButton;
