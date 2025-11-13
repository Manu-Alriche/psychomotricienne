"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

interface CursorProps {
  trailLength?: number; // nombre de cercles dans le trail
  hideOnMobile?: boolean; // masquer sur mobile
}

export default function SmoothGlowingCursor({
  trailLength = 5,
  hideOnMobile = true,
}: CursorProps) {
  const { isDark } = useTheme(); // hook perso pour thème
  const [mounted, setMounted] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  // couleurs dynamiques selon le thème
  const cursorColor = isDark ? "#ff896e" : "#ff896e";
  const glowIntensity = isDark ? 0.35 : 0.25;

  useEffect(() => {
    setMounted(true);
    setTrail(Array(trailLength).fill({ x: 0, y: 0 }));

    const moveCursor = (e: MouseEvent) =>
      setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [trailLength]);

  useEffect(() => {
    if (!mounted) return;
    let animationFrame: number;

    const updateTrail = () => {
      setTrail((prev) => {
        const newTrail = [...prev];
        newTrail.pop();
        newTrail.unshift({ ...cursor });
        return newTrail;
      });
      animationFrame = requestAnimationFrame(updateTrail);
    };

    animationFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursor, mounted]);

  if (!mounted) return null;

  const containerClass = hideOnMobile ? "hidden md:block" : "";

  return (
    <>
      {/* Glow trail */}
      {trail.map((pos, i) => (
        <motion.div
          key={i}
          className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-40 ${containerClass}`}
          style={{
            boxShadow: `0 0 ${8 + i * 5}px rgba(${parseInt(
              cursorColor.slice(1, 3),
              16
            )},${parseInt(cursorColor.slice(3, 5), 16)},${parseInt(
              cursorColor.slice(5, 7),
              16
            )},${glowIntensity - i * 0.03})`,
          }}
          animate={{
            x: pos.x - 12,
            y: pos.y - 12,
            scale: 1 - i * 0.08,
            opacity: 0.6 - i * 0.1,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
        />
      ))}

      {/* Curseur principal */}
      <motion.div
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 ${containerClass}`}
        style={{ backgroundColor: cursorColor }}
        animate={{
          x: cursor.x - 8,
          y: cursor.y - 8,
          scale: 1,
          opacity: 0.9,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
    </>
  );
}
