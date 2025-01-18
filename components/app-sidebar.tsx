import Icon from "@/components/Icon";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-background text-primary h-16 border-b p-0">
        <div className="flex items-center px-4">
          <Icon className="" width={45} height={55} />
          <Separator orientation="vertical" className="mr-2" />
          <div className="mr-3">
            <h1 className="font-bold text-base">SoliD</h1>
            <h1 className="text-xs">Solution with </h1>
            <h1 className="text-xs">Integrated Diagnostics</h1>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gray-600 text-secondary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Workslist</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Master Ticket</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Vehicle Search</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Lead Search</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Dealer Search</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>My Items </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <div className="my-4" />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span className="text-xl font-bold">My Queues </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Tickets Assigned to Me [5]</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Open Mails of My Teams</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Open Active Sup. of My Teams</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <span>Open Complaints of My Teams</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
