import { getCurrentUser } from "@/services/clerk/lib/getCurrentUser";
import { redirect } from "next/navigation";
import OnboardingClient from "./_client";

export default async function OnboardingPage() {
  const { userId, user } = await getCurrentUser({ allData: true });

  if (userId == null) return redirect("/");

  if (user != null) return redirect("/app");

  return (
    <div className="container h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl animate-pulse">Creating your account...</h1>
      <OnboardingClient userId={userId} />
    </div>
  );
}
