import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";

const ManageTheme = () => {
  const [theme, setTheme] = useState(()=>{
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const toggleTheme = () => {
    const newTheme = theme=== "light"? "dark":"light";
    setTheme(newTheme);
    localStorage.setItem("theme",newTheme);
  };
  useEffect(()=>{
    
    document.documentElement.classList.toggle('dark',theme==="dark")
  },[theme])
  return (
    <div onClick={toggleTheme}
      className="hidden lg:w-10 lg:h-10  lg:flex lg:items-center lg:justify-center lg:border lg:border-solid lg:border-neutral-300 lg:rounded-full lg:text-center lg:shadow-xl lg:cursor-pointer
      lg:hover:text-primary-400"
    >
      {theme === "light" ? (
        <HugeiconsIcon icon={Moon02Icon} size={22} />
      ) : (
        <HugeiconsIcon icon={Sun03Icon} size={22} />
      )}
    </div>
  );
};

export default ManageTheme;
