import { useState, useEffect } from "react";
import { CHAPTER_NAMES } from "../data/endings";

// ═══════════════════════════════════════════════════════
// ChapterTransition — màn chuyển chương
// ═══════════════════════════════════════════════════════
export function ChapterTransition({ chapter, onDone }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
    setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 600);
    }, 1900);
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 190, background: "#000",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center",
      opacity: visible ? 1 : 0, transition: "opacity 0.6s ease",
    }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "5px", color: "rgba(201,168,112,0.4)", textTransform: "uppercase", marginBottom: "10px" }}>
        Chương {chapter}
      </div>
      <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px,5vw,38px)", fontWeight: "700", color: "var(--text)", letterSpacing: "-1px" }}>
        {CHAPTER_NAMES[chapter] || ""}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// BreakScene — màn đen break reality
// ═══════════════════════════════════════════════════════
export function BreakScene({ scene, changes, onNext, audio }) {
  const [visibleIdx, setVisibleIdx] = useState([]);

  useEffect(() => {
    audio.sfxBreak();
    const delays = [600, 1900, 2700, 4100, 5300, 6500, 7700, 9100, 10500];

    const timers = scene.breakLines.map((_, i) =>
      setTimeout(() => setVisibleIdx((v) => [...v, i]), delays[i] || (600 + i * 1300))
    );

    const totalDelay = (delays[scene.breakLines.length - 1] || (600 + scene.breakLines.length * 1300)) + 2000;
    const nextTimer = setTimeout(onNext, totalDelay);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(nextTimer);
    };
  }, []);

  const processLine = (line) => line.replace("{X}", changes);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200, background: "#000",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "20px", padding: "48px", textAlign: "center",
    }}>
      {scene.breakLines.map((line, i) => {
        const isDim = i >= 3 && i <= 6;
        return (
          <div key={i} style={{
            fontFamily: isDim ? "var(--body)" : "var(--serif)",
            fontSize: isDim ? "clamp(11px,1.8vw,14px)" : "clamp(16px,3vw,24px)",
            fontStyle: isDim ? "italic" : "normal",
            lineHeight: "1.6",
            color: isDim ? "var(--muted)" : "var(--text)",
            maxWidth: "540px",
            opacity: visibleIdx.includes(i) ? 1 : 0,
            transition: "opacity 1s ease",
          }}>
            {processLine(line)}
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// FinalScene — phán quyết cuối với typewriter cực chậm + flicker
// ═══════════════════════════════════════════════════════
export function FinalScene({ scene, onAnswer, audio }) {
  const [doneLines, setDoneLines] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Slow typewriter for each line
  useEffect(() => {
    if (lineIdx >= scene.finalLines.length) {
      setTimeout(() => setShowQuestion(true), 600);
      return;
    }
    setCurrentText("");
    setCharIdx(0);
  }, [lineIdx]);

  useEffect(() => {
    if (lineIdx >= scene.finalLines.length) return;
    const line = scene.finalLines[lineIdx];
    if (charIdx >= line.length) {
      setDoneLines((p) => [...p, line]);
      setTimeout(() => setLineIdx((i) => i + 1), 500);
      return;
    }
    const t = setTimeout(() => {
      setCurrentText(line.substring(0, charIdx + 1));
      setCharIdx((c) => c + 1);
    }, 80);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, scene.finalLines]);

  useEffect(() => {
    if (showQuestion) setTimeout(() => setShowOptions(true), 1800);
  }, [showQuestion]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 180, background: "#000",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "48px 32px", textAlign: "center",
    }}>
      <div style={{
        fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "4px",
        color: "rgba(201,168,112,0.35)", textTransform: "uppercase",
        marginBottom: "32px", animation: "flicker 4s ease infinite",
      }}>
        Phán quyết cuối cùng
      </div>

      <div style={{ maxWidth: "560px" }}>
        {/* Completed lines */}
        {doneLines.map((line, i) => (
          <div key={i} style={{
            fontFamily: "var(--serif)", fontSize: "clamp(17px,3vw,24px)",
            color: "rgba(201,168,112,0.8)", lineHeight: "1.8", marginBottom: "8px",
            animation: "flicker 6s ease infinite",
          }}>
            {line}
          </div>
        ))}

        {/* Currently typing line */}
        {lineIdx < scene.finalLines.length && (
          <div style={{
            fontFamily: "var(--serif)", fontSize: "clamp(17px,3vw,24px)",
            color: "rgba(201,168,112,0.8)", lineHeight: "1.8", marginBottom: "8px",
          }}>
            {currentText}
            <span style={{
              display: "inline-block", width: "2px", height: "1em",
              background: "var(--gold)", marginLeft: "2px", verticalAlign: "text-bottom",
              animation: "blink 0.7s step-end infinite",
            }} />
          </div>
        )}

        {/* Question */}
        {showQuestion && (
          <div style={{
            fontFamily: "var(--serif)", fontSize: "clamp(20px,3.5vw,28px)",
            color: "var(--gold)", lineHeight: "1.7", marginTop: "24px",
            animation: "flicker 5s ease infinite",
          }}>
            {scene.question}
          </div>
        )}
      </div>

      {/* Options */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "10px",
        justifyContent: "center", marginTop: "40px",
        opacity: showOptions ? 1 : 0,
        transition: "opacity 1s ease",
      }}>
        {scene.options.map((opt, i) => (
          <FinalButton key={i} text={opt.text} onClick={() => { audio.sfxEnding(); onAnswer(opt.ending); }} />
        ))}
      </div>
    </div>
  );
}

function FinalButton({ text, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--body)", fontSize: "12px", padding: "10px 22px",
        border: `1px solid ${hovered ? "rgba(201,168,112,0.6)" : "rgba(201,168,112,0.25)"}`,
        background: hovered ? "rgba(201,168,112,0.08)" : "rgba(201,168,112,0.04)",
        color: hovered ? "var(--gold)" : "rgba(201,168,112,0.7)",
        cursor: "pointer", transition: "all 0.3s", borderRadius: "1px",
      }}
    >
      {text}
    </button>
  );
}
