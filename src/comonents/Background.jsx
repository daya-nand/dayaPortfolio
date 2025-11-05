import React, { useEffect, useRef } from "react";

export default function Background({
  particleCount = 100,
  maxSize = 1.5,
  minSize = 0.5,
  glow = 100,
  glowColor = "white",       // particle color
  backgroundColor = "#050c13", // ✅ use lowercase prop name
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const draw = () => {
      // Resize canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const width = canvas.width;
      const height = canvas.height;

      // 🟩 STEP 1: Fill the background color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // ✨ STEP 2: Draw glowing particles
      ctx.shadowBlur = glow;
      ctx.shadowColor = glowColor;
      ctx.fillStyle = glowColor;

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * (maxSize - minSize) + minSize;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    draw();
    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
    };
  }, [particleCount, maxSize, minSize, glow, glowColor, backgroundColor]);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
