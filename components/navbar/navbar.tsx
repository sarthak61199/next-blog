import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import AuthLinks from "./auth-links";
import ThemeToggle from "./theme-toggle";

const oswald = Oswald({ subsets: ["latin"] });

function Navbar() {
  return (
    <nav className="flex justify-between h-[100px] items-center mb-10">
      <div className="flex gap-4">
        <Instagram />
        <Linkedin />
        <Twitter />
      </div>
      <Link href="/">
        <h1
          className={cn(
            "text-5xl font-extrabold text-center",
            oswald.className
          )}
        >
          sarthak.
        </h1>
      </Link>
      <div className="flex gap-4 text-xl space-x-2">
        <ThemeToggle />
        <div className="flex space-x-4 items-center">
          <AuthLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
