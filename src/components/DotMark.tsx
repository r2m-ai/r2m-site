"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; p: number };

/**
 * The r2m wordmark rasterized into a copper dot field with a slow
 * diagonal shimmer. Falls back to a static frame under
 * prefers-reduced-motion.
 */
export function DotMark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dots: Dot[] = [];
    let W = 0;
    let H = 0;
    let raf = 0;
    let t0 = 0;
    let disposed = false;

    function build() {
      if (!canvas || !ctx) return;
      const holder = canvas.parentElement;
      if (!holder) return;
      W = holder.clientWidth;
      H = Math.max(160, Math.round(W * 0.3));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // rasterize the wordmark offscreen, then sample it into a dot field
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const o = off.getContext("2d");
      if (!o) return;
      const family =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--font-geist-sans")
          .trim() || "Helvetica, Arial, sans-serif";
      o.fillStyle = "#fff";
      o.font = `700 ${Math.round(H * 0.94)}px ${family}`;
      o.textBaseline = "middle";
      const label = "r2m";
      const tw = o.measureText(label).width;
      const scale = Math.min(1, (W * 0.98) / tw);
      o.save();
      o.translate(0, H / 2);
      o.scale(scale, scale);
      o.fillText(label, 0, 0);
      o.restore();

      const img = o.getImageData(0, 0, W, H).data;
      const gap = Math.max(5, Math.round(W / 130));
      dots = [];
      for (let y = gap / 2; y < H; y += gap) {
        for (let x = gap / 2; x < W; x += gap) {
          const i = ((y | 0) * W + (x | 0)) * 4 + 3;
          if (img[i] > 128) {
            dots.push({ x, y, p: Math.random() });
          }
        }
      }
      if (reduced) drawFrame(0);
    }

    function drawFrame(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const r = Math.max(1.1, W / 640);
      for (const d of dots) {
        // a slow diagonal shimmer sweeping across the mark
        const wave = reduced
          ? 0.5
          : 0.5 + 0.5 * Math.sin(t / 1400 + (d.x + d.y) / 90 + d.p * 1.2);
        const lum = 0.28 + wave * 0.72;
        ctx.fillStyle = `rgba(226,161,78,${lum.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r * (0.75 + wave * 0.45), 0, 6.2832);
        ctx.fill();
      }
    }

    function loop(t: number) {
      if (disposed) return;
      if (!t0) t0 = t;
      drawFrame(t - t0);
      raf = requestAnimationFrame(loop);
    }

    // rebuild once the webfont is in, so the mark uses the real face
    document.fonts?.ready.then(() => {
      if (!disposed) build();
    });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    };
    window.addEventListener("resize", onResize);

    build();
    if (!reduced) raf = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="r2m"
      className="block h-auto w-full"
    />
  );
}
