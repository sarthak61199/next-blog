"use client";

import { useAuthModalStore } from "@/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

function AuthModal() {
  const open = useAuthModalStore((state) => state.open);
  const setModalChange = useAuthModalStore((state) => state.setModalChange);

  return (
    <Dialog open={open} onOpenChange={setModalChange} modal>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription className="flex justify-center pt-4">
            <Button
              className="font-bold uppercase flex gap-4"
              onClick={() => signIn("google")}
            >
              <Image src="/google.svg" alt="google" width={20} height={20} />
              Log in with Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AuthModal;
