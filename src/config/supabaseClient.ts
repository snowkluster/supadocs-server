import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv"
dotenv.config()

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPA_URL as string,
  process.env.SUPA_PUB_ANON as string
);
