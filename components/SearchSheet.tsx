import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowDownIcon } from "lucide-react";
import SearchSheetButton from "./SearchSheetButton";

export function SearchSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Advanced Search</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Advanced Search</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <Input id="search" placeholder="Search..." className="col-span-5" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="col-span-5 justify-between items-center whitespace-nowrap"
                >
                  Tickets Assigned to Me
                  <ArrowDownIcon className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>My Tickets</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  My Teams Tickets
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  All Open Tickets
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="col-span-3 mt-3">Quick Search:</p>
            <div className="col-span-2" />
            <SearchSheetButton
              span={2}
              triggerName="Transaction Type"
              content1="Deposit"
              content2="Withdrawal"
              content3="Transfer"
            />
            <SearchSheetButton
              span={1}
              triggerName="Is"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <SearchSheetButton
              span={2}
              triggerName="Amount"
              content1="Greater than"
              content2="Less than"
              content3="Equal to"
            />
            <SearchSheetButton
              span={2}
              triggerName="Status"
              content1="Active"
              content2="Inactive"
              content3="Suspended"
            />
            <SearchSheetButton
              span={1}
              triggerName="Is"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <SearchSheetButton
              span={2}
              triggerName="Pending"
              content1="Greater than"
              content2="Less than"
              content3="Equal to"
            />
            <SearchSheetButton
              span={2}
              triggerName="Sort By"
              content1="Active"
              content2="Inactive"
              content3="Suspended"
            />
            <SearchSheetButton
              span={1}
              triggerName="Is"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <SearchSheetButton
              span={2}
              triggerName="Asc"
              content1="Active"
              content2="Inactive"
              content3="Suspended"
            />
            <div className="col-span-5 h-2" />
            <SearchSheetButton
              span={2}
              triggerName="Creation Period"
              content1="Deposit"
              content2="Withdrawal"
              content3="Transfer"
            />
            <SearchSheetButton
              span={1}
              triggerName="Is"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <SearchSheetButton
              span={2}
              triggerName="Last Half Year"
              content1="Greater than"
              content2="Less than"
              content3="Equal to"
            />
            <SearchSheetButton
              span={2}
              triggerName="Recipient Address"
              content1="Active"
              content2="Inactive"
              content3="Suspended"
            />
            <SearchSheetButton
              span={1}
              triggerName="Is"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <SearchSheetButton
              span={2}
              triggerName="All Regions"
              content1="Greater than"
              content2="Less than"
              content3="Equal to"
            />
            <SearchSheetButton
              span={2}
              triggerName="Urgency"
              content1="Active"
              content2="Inactive"
              content3="Suspended"
            />
            <SearchSheetButton
              span={1}
              triggerName="Is"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <SearchSheetButton
              span={2}
              triggerName="High"
              content1="Active"
              content2="Inactive"
              content3="Suspended"
            />
            <div className="col-span-5 h-2" />
            <p className="col-span-3 text-sm">Maximum Number of Results:</p>
            <SearchSheetButton
              span={2}
              triggerName="500"
              content1="Pending"
              content2="Completed"
              content3="Failed"
            />
            <Button variant="outline" className="col-span-4">
              Save Search As...
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
