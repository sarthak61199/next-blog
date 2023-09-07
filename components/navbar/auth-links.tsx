"use client";

import { Button } from "../ui/button";
import { useAuthModalStore } from "@/store";
import AuthModal from "../auth-modal";
import useAuthSession from "@/hooks/useAuthSession";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function AuthLinks() {
  const router = useRouter();
  const setModalChange = useAuthModalStore((state) => state.setModalChange);
  const { isLoggedIn, isLoading } = useAuthSession();

  function logout() {
    signOut();
    router.refresh();
  }

  if (isLoading) return <Loader2 className="h-6 w-6 animate-spin" />;

  return (
    <>
      {isLoggedIn ? (
        <Button className="text-lg" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button className="text-lg" onClick={setModalChange}>
          Login
        </Button>
      )}
      <AuthModal />
    </>
  );
}

export default AuthLinks;
