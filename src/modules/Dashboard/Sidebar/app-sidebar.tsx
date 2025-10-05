"use client";

import {
  BookOpen,
  PieChart,
  RssIcon,
  SquareTerminal,
  User,
} from "lucide-react";
import * as React from "react";

import Logo from "@/assets/logos/himadree-logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/modules/Dashboard/Sidebar/nav-main";
import { NavPlatform } from "@/modules/Dashboard/Sidebar/nav-platform";
import Image from "next/image";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Projects",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Manage",
          url: "#",
        },
        {
          title: "Create",
          url: "/dashboard/projects/create",
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      isActive: true,
      icon: RssIcon,
      items: [
        {
          title: "Manage",
          url: "#",
        },
        {
          title: "Create",
          url: "/dashboard/blog/create",
        },
      ],
    },
    // {
    //   title: "Case-Studies",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Manage",
    //       url: "#",
    //     },
    //     {
    //       title: "Create",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Users",
    //   url: "#",
    //   icon: User,
    //   items: [
    //     {
    //       title: "Manage",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  // navSecondary: [
  //   {
  //     title: "Support",
  //     url: "#",
  //     icon: LifeBuoy,
  //   },
  //   {
  //     title: "Feedback",
  //     url: "#",
  //     icon: Send,
  //   },
  // ],
  // Platform: [
  //   {
  //     name: "Statistics",
  //     url: "#",
  //     icon: PieChart,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    src={Logo}
                    alt="Himadree Chaudhury"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Dashboard</span>
                  <span className="truncate text-xs">Himadree Chaudhury</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavPlatform platform={data.Platform} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  );
}
