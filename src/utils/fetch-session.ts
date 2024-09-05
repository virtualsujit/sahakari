import { supabase } from "@/lib/supabase/client";

export const fetchSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  };