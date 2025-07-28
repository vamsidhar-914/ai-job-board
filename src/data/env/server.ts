import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_WEBHOOK_SECRET: z.string().min(1)
  },
  createFinalSchema: (env) => {
    return z.object(env).transform((val) => {
      const { ...rest } = val;

      return {
        ...rest,
        DATABASE_URL: "postgresql://postgres.jkeuvylzejqtiarwqtcc:vamsidhar@123@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
,
      };
    });
  },
  emptyStringAsUndefined: false,
  experimental__runtimeEnv: process.env,
});
