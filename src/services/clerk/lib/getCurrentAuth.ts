import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { getUserIdTag } from "@/features/db/cache/users";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export async function getCurrentUser({ allData = false } = {}){
    const { userId } = await auth()

    return {
        userId,
        user: allData && userId != null ? await getUser(userId) : undefined
    }
}

async function getUser(userId: string){
    "use cache"
    cacheTag(getUserIdTag(userId))
    
    return db.query.UserTable.findFirst({
        where: eq(UserTable.id, userId),
    })
}