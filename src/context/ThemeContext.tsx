"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const dark =
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(dark);
    console.log(isDark, " - PRO");
    updateDOMTheme(dark);
  }, []);

  const updateDOMTheme = (dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const toggleTheme = (dark: boolean) => {
    setIsDark(dark);
    updateDOMTheme(dark);
    console.log("Theme changed to:", dark ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
