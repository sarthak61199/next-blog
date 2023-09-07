import { useSession } from "next-auth/react";

export default function useAuthSession() {
  const { status, data: session } = useSession();

  const isLoggedIn = status === "authenticated";
  const isLoggedOut = status === "unauthenticated";
  const isLoading = status === "loading";

  return { session, isLoading, isLoggedIn, isLoggedOut };
}
