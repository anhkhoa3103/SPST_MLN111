import { useState, useCallback, useEffect, useRef } from "react";
import ClueImage from "./ClueImage";
import TypewriterText from "./TypewriterText";
import TimerBar from "./TimerBar";

// ═══════════════════════════════════════════════════════
// StoryScene
// ═══════════════════════════════════════════════════════
export function StoryScene({ scene, onNext, onBack, audio }) {
  const [typingDone, setTypingDone] = useState(false);
  const typingDoneRef = useRef(false); // ← thêm ref

  const handleComplete = useCallback(() => {
    setTypingDone(true);
    typingDoneRef.current = true; // ← cập nhật ref
    audio.sfxReveal();
  }, [audio]);

  // Reset khi scene mới
  useEffect(() => {
    setTypingDone(false);
    typingDoneRef.current = false;
  }, [scene.id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "Enter") return;

      if (!typingDoneRef.current) {
        // Đang gõ → trigger click vào TypewriterText để skip
        document.querySelector('[data-typewriter]')?.click();
      } else {
        // Xong rồi → next
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext]); // ← không depend vào typingDone state, dùng ref thay thế

  return (
    <>
      <div style={{ flex: 1, position: "relative", overflow: "visible", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
        {(scene.images || []).map((img, i) => (
          <ClueImage key={i} src={img.src} caption={img.caption} pos={img.pos} delay={0} />
        ))}

        <div
          onClick={() => { if (!typingDone) return; onNext(); }}
          style={{ position: "relative", zIndex: 10, maxWidth: "480px", width: "100%", padding: "20px 24px", textAlign: "left", cursor: "default" }}
        >
          <SceneLabel label={scene.label} title={scene.title} />
          <TypewriterText lines={scene.lines} onComplete={handleComplete} />

          {typingDone && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ marginTop: "22px", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "24px" }}
            >
              <BackButton onClick={onBack} />
              <div style={{ fontFamily: "var(--mono)", fontSize: "8px", letterSpacing: "2px", color: "var(--muted)", animation: "pulseHint 2s ease infinite" }}>
                — nhấn để tiếp tục —
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════
// QuestionScene
// ═══════════════════════════════════════════════════════
export function QuestionScene({ scene, onAnswer, onBack, audio }) {
  const [typingDone, setTypingDone] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  const handleComplete = useCallback(() => {
    setTypingDone(true);
    setTimerRunning(true);
  }, []);

  const pickOption = useCallback((opt, idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setTimerRunning(false);
    audio.sfxClick();
    setTimeout(() => onAnswer(opt), 700);
  }, [selected, audio, onAnswer]);

  const handleExpire = useCallback(() => {
    if (selected !== null) return;
    const last = scene.options.length - 1;
    pickOption(scene.options[last], last);
  }, [selected, scene.options, pickOption]);

  return (
    <>
      <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {(scene.images || []).map((img, i) => (
          <ClueImage key={i} src={img.src} caption={img.caption} pos={img.pos} delay={i * 200} />
        ))}

        <div style={{ position: "relative", zIndex: 10, maxWidth: "480px", width: "100%", padding: "20px 24px", textAlign: "left" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "rgba(201,168,112,0.6)", textTransform: "uppercase", marginBottom: "14px" }}>
            {scene.label}
          </div>
          <TypewriterText lines={scene.lines} onComplete={handleComplete} />
        </div>
      </div>

      <div style={{
        flexShrink: 0, padding: "12px 28px 20px",
        borderTop: "1px solid var(--border)",
        background: "rgba(7,7,10,0.97)",
        opacity: typingDone ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: typingDone ? "all" : "none",
      }}>
        <div style={{ marginBottom: "8px" }}>
          <BackButton onClick={onBack} />
        </div>

        <div style={{
          fontFamily: "var(--serif)",       // ← đổi từ var(--mono) thành serif cho đẹp hơn
          fontSize: "18px",                 // ← tăng từ 13px
          letterSpacing: "0.5px",           // ← giảm letterSpacing
          color: "var(--text)",             // ← sáng hơn, đổi từ var(--muted)
          textTransform: "none",            // ← bỏ uppercase
          textAlign: "center",
          marginBottom: "16px",             // ← tăng margin
          lineHeight: "1.6",                // ← thêm line height
          fontStyle: "italic",              // ← thêm italic cho phong cách
        }}>
          {scene.question}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "10px" }}>
          {scene.options.map((opt, i) => (
            <OptionButton key={i} text={opt.text} selected={selected === i} disabled={selected !== null} onClick={() => pickOption(opt, i)} />
          ))}
        </div>

        <TimerBar duration={scene.timer} onExpire={handleExpire} running={timerRunning} />
      </div>
    </>
  );
}

// ── Shared sub-components ─────────────────────────────

function SceneLabel({ label, title }) {
  return (
    <>
      <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "5px", opacity: 0.7 }}>
        {label}
      </div>
      {title && (
        <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "2px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "18px" }}>
          {title}
        </div>
      )}
    </>
  );
}

function OptionButton({ text, selected, disabled, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--body)", fontSize: "12px",
        padding: "9px 18px", borderRadius: "2px",
        border: `1px solid ${selected ? "var(--gold)" : hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.1)"}`,
        background: selected ? "rgba(201,168,112,0.08)" : hovered ? "rgba(255,255,255,0.04)" : "transparent",
        color: selected ? "var(--gold)" : hovered ? "var(--text)" : "rgba(230,225,216,0.65)",
        cursor: disabled ? "default" : "pointer",
        transition: "all 0.2s",
      }}
    >
      {text}
    </button>
  );
}

function BackButton({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--mono)", fontSize: "8px", letterSpacing: "2px",
        textTransform: "uppercase",
        color: hovered ? "var(--text)" : "var(--muted)",
        background: "transparent", border: "none",
        cursor: "pointer", padding: "4px 0", transition: "color 0.2s",
        display: "flex", alignItems: "center", gap: "6px",
      }}
    >
      ← quay lại
    </button>
  );
}