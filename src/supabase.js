import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://midskehilsxuazvwyegf.supabase.co";
const supabaseAnonKey = "sb_publishable_EzW2dYn2GfVXfnPoXh8klA_4hHUXfmM";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);