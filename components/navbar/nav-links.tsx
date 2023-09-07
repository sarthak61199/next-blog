"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuthModalStore } from "@/store";
import AuthModal from "../auth-modal";

function NavLinks() {
  const setModalChange = useAuthModalStore((state) => state.setModalChange);

  return (
    <div className="flex items-center space-x-4">
      <Link href="/">Home</Link>
      <Button className="text-lg" onClick={setModalChange}>
        Login
      </Button>
      <AuthModal />
    </div>
  );
}

export default NavLinks;
