import { useState } from "react";
import { TAG_COLORS } from "../data/styles";

export default function CharCard({ charKey, data, visible }) {
  const [imgError, setImgError] = useState(false);

  const accentColor = data.color;
  const borderColor = {
    duy:   "rgba(91,156,246,0.35)",
    phat:  "rgba(224,82,82,0.35)",
    trong: "rgba(200,200,200,0.15)",
  }[charKey];

  return (
    <div style={{
      width: "220px",
      border: `1px solid ${borderColor}`,
      background: "rgba(255,255,255,0.02)",
      position: "relative",
      overflow: "hidden",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(18px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px", background: accentColor, zIndex: 2,
      }} />

      {/* Avatar — hình vuông full width */}
      <div style={{
        width: "100%",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {data.avatar && !imgError ? (
          <img
            src={`/${data.avatar}`}
            alt={data.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top center",
              display: "block",
            }}
          />
        ) : (
          <span style={{
            fontFamily: "var(--serif)",
            fontSize: "64px", fontStyle: "italic", fontWeight: "700",
            color: accentColor, opacity: 0.2,
          }}>
            {data.name[0]}
          </span>
        )}
      </div>

      {/* Info bên dưới */}
      <div style={{ padding: "16px" }}>
        {/* Name */}
        <div style={{
          fontFamily: "var(--mono)", fontSize: "13px", letterSpacing: "3px",
          textTransform: "uppercase", color: accentColor,
          marginBottom: "2px",
        }}>
          {data.name}
        </div>

        {/* Age · Role */}
        <div style={{
          fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "1px",
          color: "var(--muted)", marginBottom: "12px",
        }}>
          {data.age} · {data.role}
        </div>

        <div style={{ height: "1px", background: "var(--border)", marginBottom: "12px" }} />

        {/* Description */}
        <div style={{
          fontFamily: "var(--body)", fontSize: "11px", lineHeight: "1.8",
          color: "rgba(230,225,216,0.55)",
          whiteSpace: "pre-line",
        }}>
          {data.desc}
        </div>

        {/* Tags */}
        {(data.tags || []).length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "12px" }}>
            {(data.tags || []).map((tag, i) => {
              const colors = TAG_COLORS[tag.type] || TAG_COLORS.neutral;
              return (
                <span key={i} style={{
                  fontFamily: "var(--mono)", fontSize: "7px", letterSpacing: "1px",
                  padding: "2px 7px", borderRadius: "1px", textTransform: "uppercase",
                  border: `1px solid ${colors.border}`,
                  color: colors.color,
                }}>
                  {tag.text}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}