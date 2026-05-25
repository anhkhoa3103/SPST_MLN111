import { useState, useEffect, useRef, useCallback } from "react";

export default function TypewriterText({ lines, onComplete }) {
  const [rendered, setRendered] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setRendered([]);
    setLineIdx(0);
    setCharIdx(0);
    setDone(false);
  }, [lines]);

  const finishAll = useCallback(() => {
    clearTimeout(timerRef.current);
    setRendered(lines.map((t) => ({ text: t, full: true })));
    setLineIdx(lines.length);
    setDone(true);
    if (onComplete) onComplete();
  }, [lines, onComplete]);

  const handleClick = useCallback((e) => {
    if (!done) {
      e.stopPropagation();
      finishAll();
    }
  }, [done, finishAll]);

  useEffect(() => {
    if (done) return;
    if (lineIdx >= lines.length) {
      setDone(true);
      if (onComplete) onComplete();
      return;
    }
    if (lineIdx >= rendered.length) {
      setRendered((p) => [...p, { text: "", full: false }]);
      setCharIdx(0);
      return;
    }
    const line = lines[lineIdx];
    if (charIdx >= line.length) {
      setRendered((p) =>
        p.map((l, i) => (i === lineIdx ? { ...l, full: true } : l))
      );
      timerRef.current = setTimeout(() => setLineIdx((i) => i + 1), 420);
      return;
    }
    timerRef.current = setTimeout(() => {
      setRendered((p) =>
        p.map((l, i) =>
          i === lineIdx ? { ...l, text: line.substring(0, charIdx + 1) } : l
        )
      );
      setCharIdx((c) => c + 1);
    }, 28);
    return () => clearTimeout(timerRef.current);
  }, [lineIdx, charIdx, rendered.length, lines, done, onComplete]);

  return (
    <div
      onClick={handleClick}
      data-typewriter="true"
      style={{ cursor: "default" }}
    >
      {rendered.map((line, i) => (
        <div key={i} style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(12px, 2vw, 15px)",
          lineHeight: "1.85",
          color: "var(--text)",
          marginBottom: "8px",
          minHeight: "1.85em",
          fontStyle: line.text.startsWith('"') ? "italic" : "normal",
        }}>
          {line.text}
          {!line.full && i === lineIdx && (
            <span style={{
              display: "inline-block", width: "2px", height: "1em",
              background: "var(--gold)", marginLeft: "2px",
              verticalAlign: "text-bottom",
              animation: "blink 0.7s step-end infinite",
            }} />
          )}
        </div>
      ))}
    </div>
  );
}