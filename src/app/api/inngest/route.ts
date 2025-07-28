import { clerkCreateUser, clerkDeleteUser, clerkUpdateUser } from '@/services/inngest/clerk'
import { inngest } from '@/services/inngest/client'
import { serve } from 'inngest/next'

export const { GET,POST,PUT } = serve({
    client: inngest,
    functions: [
        clerkCreateUser,
        clerkDeleteUser,
        clerkUpdateUser
        // functions will be passed here
    ]
})