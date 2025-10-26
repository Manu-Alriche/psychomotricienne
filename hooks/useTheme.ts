"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Hook permettant de gérer le thème clair/sombre
 * avec persistance dans localStorage.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  // Charger le thème sauvegardé au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Basculer entre clair et sombre
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newTheme = !prev;
      const html = document.documentElement;

      if (newTheme) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newTheme;
    });
  }, []);

  // Setter manuel (optionnel, utile si tu veux forcer un thème depuis un autre composant)
  const setTheme = useCallback((theme: "light" | "dark") => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  }, []);

  return { isDark, toggleTheme, setTheme };
}
