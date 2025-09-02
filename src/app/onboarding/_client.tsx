"use client";

import { useEffect } from "react";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { getUser } from "@/features/users/actions";

export default function OnboardingClient({ userId }: { userId: string }) {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const user = await getUser(userId);

      if (user == null) return;

      router.replace("/app");
      clearInterval(intervalId);

      return () => {
        clearInterval(intervalId);
      };
    }, 250);
  }, [router, userId]);

  return <Loader2Icon className="animate-spin size-24" />;
}
