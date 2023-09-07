"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(theme === "dark");

  function setThemeToggle() {
    setToggle(!toggle);
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun size={16} />
      <Switch checked={toggle} onCheckedChange={setThemeToggle} />
      <Moon size={16} />
    </div>
  );
}

export default ThemeToggle;
