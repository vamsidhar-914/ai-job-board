import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarComponent";
import Link from "next/link";
import { LogIn, LogInIcon } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Suspense } from "react";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import { insertUser } from "@/features/db/users";

export default async function HomePage() {
      // const user =  await insertUser({
      //             id: "1",
      //             name: `vamsidhar kandula`,
      //             imageUrl: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18zMEJhUzJIRzh1UU9RWXQ3ZzJjSHBLN2t6TzkiLCJyaWQiOiJ1c2VyXzMwVk93c3NCdXM0d0cybHNlMUl4akc3MWZwMCIsImluaXRpYWxzIjoiVksifQ",
      //             email: "vamsimay1234@gmail.com",
      //             createdAt: new Date(1753709514528),
      //             updatedAt: new Date(1753709514551)
      //         })
      // console.log("inserted user", user);         
      console.log("created_at", typeof(new Date(1753709514528))) 
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Jobs</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <Suspense>
                  <SignedOut>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/sign-in">
                          <LogInIcon />
                          <span>Log In</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SignedOut>
                </Suspense>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
         <SignedIn>
           <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarUserButton />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
         </SignedIn>
        </Sidebar>
      </AppSidebarClient>
      <main className="flex-1">main page content

        <div className="pt-3">
          <button>click me</button>
        </div>
      </main>
    </SidebarProvider>
  );
}
