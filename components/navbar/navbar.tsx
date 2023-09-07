import { Instagram, Linkedin, Twitter, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import { Switch } from "../ui/switch";
import AuthLinks from "./auth-links";

const oswald = Oswald({ subsets: ["latin"] });

function Navbar() {
  return (
    <nav className="flex justify-between h-[100px] items-center">
      <div className="flex gap-4">
        <Instagram />
        <Linkedin />
        <Twitter />
      </div>
      <h1
        className={cn("text-5xl font-extrabold text-center", oswald.className)}
      >
        sarthak.
      </h1>
      <div className="flex gap-4 text-xl space-x-2">
        <div className="flex items-center space-x-2">
          <Sun size={16} />
          <Switch />
          <Moon size={16} />
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/">Home</Link>
          <AuthLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
