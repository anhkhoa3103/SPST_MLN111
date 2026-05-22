import { useState, useEffect } from "react";
import { IMG_POSITIONS, IMG_ROTATIONS } from "../data/styles";

// ═══════════════════════════════════════════════════════
// ClueImage — ảnh manh mối rải rác quanh màn hình
// ═══════════════════════════════════════════════════════
export default function ClueImage({ src, caption, pos, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const position = IMG_POSITIONS[pos] || IMG_POSITIONS[0];
  const rotation = IMG_ROTATIONS[pos % IMG_ROTATIONS.length];

  useEffect(() => {
    setVisible(false); 
    const t = setTimeout(() => setVisible(true), delay + 100); 
    return () => clearTimeout(t);
  }, [src]);

  return (
    <div style={{
      position: "absolute",
      ...position,
      width: "400px",
      transform: `rotate(${rotation}deg)`,
      opacity: visible ? 1 : 0,
      transition: "opacity 0.9s ease",
      zIndex: 5,
      cursor: "default",
    }}>
      {/* Image or placeholder */}
      {!imgError ? (
        <img
          src={src.startsWith("http") ? src : `/${src}`}
          alt={caption}
          onError={() => setImgError(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            display: "block",
            border: `1px solid ${hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)"}`,
            transform: hovered ? "scale(1.04)" : "none",
            transition: "transform 0.3s, border-color 0.3s",
          }}
        />
      ) : (
        <div style={{
          width: "100%",
          height: "110px",
          border: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "8px",
        }}>
          <span style={{ fontSize: "18px", opacity: 0.15 }}>📷</span>
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "7px",
            color: "var(--muted)",
            opacity: 0.4,
            textAlign: "center",
            lineHeight: "1.4",
          }}>{caption}</span>
        </div>
      )}

      {/* Caption */}
      <div style={{
        fontFamily: "var(--mono)",
        fontSize: "12px",
        letterSpacing: "1px",
        color: "var(--muted)",
        textAlign: "center",
        marginTop: "5px",
        textTransform: "uppercase",
        lineHeight: "1.3",
      }}>
        {caption}
      </div>
    </div>
  );
}
