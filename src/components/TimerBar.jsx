import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════
// TimerBar — thanh đếm ngược màu vàng
// ═══════════════════════════════════════════════════════
export default function TimerBar({ duration, onExpire, running }) {
  const [pct, setPct] = useState(100);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!running) {
      setPct(100);
      return;
    }
    startRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, 1 - elapsed / (duration * 1000));
      setPct(remaining * 100);
      if (remaining <= 0) {
        if (onExpire) onExpire();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, duration, onExpire]);

  return (
    <div style={{
      height: "1px",
      background: "rgba(255,255,255,0.06)",
      borderRadius: "1px",
      overflow: "hidden",
    }}>
      <div style={{
        height: "100%",
        width: `${pct}%`,
        background: "var(--gold)",
        borderRadius: "1px",
        transition: "width 0.1s linear",
      }} />
    </div>
  );
}
