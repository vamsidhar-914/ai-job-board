import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient";
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth";
import { SignOutButton } from "@/services/clerk/components/AuthButtons";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";

export function SidebarUserButton(){
    return <Suspense fallback="loading...">
        <SidebarUserSuspense />
    </Suspense>
}

async function SidebarUserSuspense(){
    const { user } = await getCurrentUser({allData: true })
    if(user == null){
        return <SignOutButton>
            <SidebarMenuButton>
                <LogOutIcon>
                    <span>Log Out</span>
                </LogOutIcon>
            </SidebarMenuButton>
        </SignOutButton>
    }

    return <SidebarUserButtonClient user={user} />
}


// any time in dynamic I/O canary version of nextjs you access dynamic data, you need to wrap it with the suspense or else it will throw an error
  