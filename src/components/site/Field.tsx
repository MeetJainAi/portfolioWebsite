"use client";

import { useEffect, useRef } from "react";

const ORBS = [
  { color: "232, 148, 90", radius: 320, x: 0.74, y: 0.32, speed: 0.16 },
  { color: "108, 92, 240", radius: 380, x: 0.42, y: 0.7, speed: 0.12 },
  { color: "70, 176, 198", radius: 240, x: 0.86, y: 0.74, speed: 0.2 },
];

const LABELS = ["SageMaker", "MLflow", "Terraform", "Kubernetes", "PyTorch", "AWS"];

export default function Field() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.62, y: 0.42 };
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, canvas.clientWidth * dpr);
      canvas.height = Math.max(1, canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
    };

    const draw = (time: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#07070b";
      ctx.fillRect(0, 0, w, h);

      ORBS.forEach((orb, index) => {
        const driftX = Math.sin(time * orb.speed + index) * 0.05 + (pointer.x - 0.5) * 0.04;
        const driftY = Math.cos(time * orb.speed * 0.85 + index) * 0.04 + (pointer.y - 0.5) * 0.03;
        const x = (orb.x + driftX) * w;
        const y = (orb.y + driftY) * h;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.62)`);
        gradient.addColorStop(0.45, `rgba(${orb.color}, 0.16)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      if (w >= 900) {
        const cx = w * (0.72 + (pointer.x - 0.5) * 0.04);
        const cy = h * (0.46 + (pointer.y - 0.5) * 0.04);
        const rx = Math.min(w, h) * 0.34;
        const ry = Math.min(w, h) * 0.22;

        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, -0.35, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(244, 236, 224, 0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();

        LABELS.forEach((label, index) => {
          const angle = time * 0.18 + (index / LABELS.length) * Math.PI * 2;
          const x = cx + Math.cos(angle) * rx;
          const y = cy + Math.sin(angle) * ry;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 42);
          glow.addColorStop(0, "rgba(255,255,255,0.95)");
          glow.addColorStop(0.18, "rgba(232,148,90,0.85)");
          glow.addColorStop(1, "rgba(232,148,90,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, 42, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#fff8f1";
          ctx.beginPath();
          ctx.arc(x, y, 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = "500 13px Outfit, sans-serif";
          ctx.fillStyle = "rgba(255, 246, 236, 0.92)";
          ctx.fillText(label, x + 14, y - 10);
        });
      }

      const vignette = ctx.createRadialGradient(w * 0.3, h * 0.5, h * 0.1, w * 0.45, h * 0.5, w * 0.75);
      vignette.addColorStop(0, "rgba(7,7,11,0.15)");
      vignette.addColorStop(1, "rgba(7,7,11,0.72)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", onMove);

    if (reduce) {
      draw(1.4);
    } else {
      const loop = (now: number) => {
        draw(now / 1000);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
