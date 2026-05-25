import { useState, useEffect, useRef } from "react";

export default function TimerBar({ duration, onExpire, running }) {
  const [pct, setPct] = useState(100);
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const expiredRef = useRef(false);

  useEffect(() => {
    if (!running) {
      setPct(100);
      expiredRef.current = false;
      return;
    }

    startRef.current = Date.now();
    expiredRef.current = false;

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const remaining = Math.max(0, 1 - elapsed / (duration * 1000));
      setPct(remaining * 100);

      if (remaining <= 0) {
        if (!expiredRef.current) {
          expiredRef.current = true;
          if (onExpire) onExpire();
        }
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running]);          // ← bỏ duration và onExpire khỏi deps

  return (
    <div style={{
      height: "2px",      // ← tăng lên 2px để dễ thấy hơn
      background: "rgba(255,255,255,0.06)",
      borderRadius: "1px",
      overflow: "hidden",
    }}>
      <div style={{
        height: "100%",
        width: `${pct}%`,
        background: "var(--gold)",
        borderRadius: "1px",
        // ← bỏ hoàn toàn transition
      }} />
    </div>
  );
}