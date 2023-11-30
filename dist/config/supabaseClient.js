import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
export const supabase = createClient(process.env.SUPA_URL, process.env.SUPA_PUB_ANON);
//# sourceMappingURL=supabaseClient.js.map