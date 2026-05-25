import { useState, useEffect } from "react";
import { CHARACTERS } from "../data/characters";
import CharCard from "./CharCard";

// ═══════════════════════════════════════════════════════
// StartScreen — màn hình mở đầu
// ═══════════════════════════════════════════════════════
export function StartScreen({ onNext }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "var(--bg)", padding: "24px",
    }}>
      <div style={{
        fontFamily: "var(--mono)", fontSize: "13px", letterSpacing: "5px",
        color: "var(--muted)", textTransform: "uppercase", marginBottom: "18px",
      }}>
        một tòa án nhận thức
      </div>

      <div style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(52px, 10vw, 92px)",
        fontWeight: "700", letterSpacing: "-4px",
        color: "var(--text)", lineHeight: "1", marginBottom: "4px",
      }}>
        Phụ <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Tử</em>
      </div>

      <div style={{ width: "1px", height: "44px", background: "var(--border)", margin: "0 auto 26px" }} />

      <div style={{
        fontFamily: "var(--serif)", fontSize: "clamp(14px,2vw,17px)",
        color: "var(--muted)", textAlign: "center", lineHeight: "1.9",
        marginBottom: "40px", fontStyle: "italic", maxWidth: "340px",
      }}>
        Sự thật không phụ thuộc vào người đang nhìn nó.<br />
        Nhưng phán xét thì có.
      </div>

      <GhostButton onClick={onNext}>Bắt đầu xét xử</GhostButton>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// CharIntro — màn giới thiệu nhân vật
// ═══════════════════════════════════════════════════════
export function CharIntro({ onStart }) {
  const [cardVisible, setCardVisible] = useState([false, false, false]);
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const delays = [300, 600, 900];
    const timers = delays.map((d, i) =>
      setTimeout(() => setCardVisible((v) => { const n = [...v]; n[i] = true; return n; }), d)
    );
    const btnTimer = setTimeout(() => setBtnVisible(true), 1500);
    return () => { timers.forEach(clearTimeout); clearTimeout(btnTimer); };
  }, []);

  const charOrder = ["duy", "trong", "phat"];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 90,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "var(--bg)", padding: "24px", overflowY: "auto",
    }}>
      <div style={{
        fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "5px",
        color: "var(--muted)", textTransform: "uppercase", marginBottom: "18px",
      }}>
        các nhân vật
      </div>

      <div style={{
        fontFamily: "var(--serif)", fontSize: "clamp(17px,3vw,23px)",
        fontWeight: "700", color: "var(--text)", marginBottom: "28px",
        letterSpacing: "-0.5px", textAlign: "center",
      }}>
        Ba người — Một đêm — Không có lời giải thích
      </div>

      {/* Character cards */}
      <div style={{
        display: "flex", gap: "14px", alignItems: "stretch",
        flexWrap: "wrap", justifyContent: "center",
        maxWidth: "840px", width: "100%", marginBottom: "28px",
      }}>
        {charOrder.map((key, i) => (
          <CharCard
            key={key}
            charKey={key}
            data={CHARACTERS[key]}
            visible={cardVisible[i]}
          />
        ))}
      </div>

      <GhostButton onClick={onStart} style={{ opacity: btnVisible ? 1 : 0, transition: "opacity 0.5s ease" }}>
        Bắt đầu điều tra
      </GhostButton>
    </div>
  );
}

// ── Shared ghost button ───────────────────────────────
function GhostButton({ onClick, children, style = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "3px",
        textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s",
        padding: "13px 44px",
        color: hovered ? "var(--gold)" : "var(--text)",
        background: "transparent",
        border: `1px solid ${hovered ? "var(--gold)" : "rgba(255,255,255,0.18)"}`,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
