"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; hue: number };

/**
 * Ambient particle constellation behind the hero — slow drift, short
 * links between neighbors, blue-to-violet. Static frame under
 * prefers-reduced-motion.
 */
export function HeroField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W = 0;
    let H = 0;
    let raf = 0;
    let pts: P[] = [];
    let disposed = false;

    function build() {
      if (!canvas || !ctx) return;
      const holder = canvas.parentElement;
      if (!holder) return;
      W = holder.clientWidth;
      H = holder.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.round(Math.min(110, Math.max(45, (W * H) / 16000)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hue: Math.random(),
      }));
      if (reduced) draw();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const linkDist = Math.min(150, W / 9);

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const t = 1 - Math.sqrt(d2) / linkDist;
            ctx.strokeStyle = `rgba(116, 118, 255, ${(t * 0.16).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        const c =
          p.hue < 0.5
            ? `rgba(91, 140, 255, 0.55)`
            : `rgba(143, 92, 255, 0.55)`;
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, 6.2832);
        ctx.fill();
      }
    }

    function step() {
      if (disposed) return;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -8) p.x = W + 8;
        if (p.x > W + 8) p.x = -8;
        if (p.y < -8) p.y = H + 8;
        if (p.y > H + 8) p.y = -8;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    };
    window.addEventListener("resize", onResize);

    build();
    if (!reduced) raf = requestAnimationFrame(step);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(75%_75%_at_50%_40%,black,transparent)]"
    />
  );
}
