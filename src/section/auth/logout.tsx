"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Logout(props: ButtonProps) {
  const supabase = createClient();
  const router = useRouter();
  return (
    <Button
      {...props}
      onClick={async () => {
        await supabase.auth.signOut();
        router.push("/auth/login");
      }}
    >
      Logout
    </Button>
  );
}
