import { useState } from "react";
import { TAG_COLORS } from "../data/styles";

// ═══════════════════════════════════════════════════════
// CharCard — thẻ giới thiệu nhân vật
// ═══════════════════════════════════════════════════════
export default function CharCard({ charKey, data, visible }) {
  const [imgError, setImgError] = useState(false);

  const accentColor = data.color;
  const borderStyle = charKey === "trong" ? "dashed" : "solid";
  const borderColor = {
    duy: "rgba(91,156,246,0.35)",
    phat: "rgba(224,82,82,0.35)",
    trong: "rgba(200,200,200,0.15)",
  }[charKey];
  const avatarBg = {
    duy: "rgba(91,156,246,0.06)",
    phat: "rgba(224,82,82,0.06)",
    trong: "rgba(200,200,200,0.03)",
  }[charKey];

  return (
    <div style={{
      flex: "1",
      minWidth: "200px",
      maxWidth: "260px",
      border: "1px solid var(--border)",
      background: "rgba(255,255,255,0.02)",
      padding: "22px 18px",
      position: "relative",
      overflow: "hidden",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(18px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "2px", background: accentColor,
      }} />

      {/* Avatar */}
      <div style={{
        width: "80px", height: "80px", borderRadius: "50%",
        margin: "0 auto 14px",
        border: `1px ${borderStyle} ${borderColor}`,
        background: avatarBg,
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {data.avatar && !imgError ? (
          <img
            src={data.avatar}
            alt={data.name}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        ) : (
          // Fallback initial
          <span style={{
            fontFamily: "var(--serif)",
            fontSize: "28px", fontStyle: "italic", fontWeight: "700",
            color: accentColor, opacity: 0.5,
          }}>
            {data.name[0]}
          </span>
        )}
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "3px",
        textTransform: "uppercase", textAlign: "center",
        color: accentColor, marginBottom: "3px",
      }}>
        {data.name}
      </div>

      {/* Age · Role */}
      <div style={{
        fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "1px",
        color: "var(--muted)", textAlign: "center", marginBottom: "16px",
      }}>
        {data.age} · {data.role}
      </div>

      <div style={{ height: "1px", background: "var(--border)", marginBottom: "12px" }} />

      {/* Description */}
      <div style={{
        fontFamily: "var(--body)", fontSize: "12px", lineHeight: "1.8",
        color: "rgba(230,225,216,0.58)", marginBottom: "14px",
        whiteSpace: "pre-line",
      }}>
        {data.desc}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {(data.tags || []).map((tag, i) => {
          const colors = TAG_COLORS[tag.type] || TAG_COLORS.neutral;
          return (
            <span key={i} style={{
              fontFamily: "var(--mono)", fontSize: "8px", letterSpacing: "1px",
              padding: "3px 8px", borderRadius: "1px", textTransform: "uppercase",
              border: `1px solid ${colors.border}`,
              color: colors.color,
            }}>
              {tag.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
