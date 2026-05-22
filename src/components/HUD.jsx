// ═══════════════════════════════════════════════════════
// HUD — thanh nghi ngờ + metadata phía trên
// ═══════════════════════════════════════════════════════
export default function HUD({ suspicion, changes, chapter }) {
  const pct = Math.max(5, Math.min(95, 50 + suspicion));

  return (
    <div style={{
      flexShrink: 0,
      padding: "11px 28px 9px",
      borderBottom: "1px solid var(--border)",
      background: "rgba(7,7,10,0.97)",
      backdropFilter: "blur(12px)",
      position: "relative",
      zIndex: 50,
    }}>
      {/* Suspicion bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
        <span style={{
          fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px",
          textTransform: "uppercase", color: "var(--duy)", minWidth: "36px", textAlign: "right",
        }}>DUY</span>

        <div style={{
          flex: 1, height: "2px",
          background: "linear-gradient(90deg, rgba(91,156,246,0.25), rgba(224,82,82,0.25))",
          position: "relative", borderRadius: "1px",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: `${pct}%`,
            transform: "translate(-50%, -50%)",
            width: "10px", height: "10px", borderRadius: "50%",
            background: "var(--text)", border: "2px solid var(--bg)",
            transition: "left 0.7s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: "0 0 8px rgba(255,255,255,0.2)",
          }} />
        </div>

        <span style={{
          fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px",
          textTransform: "uppercase", color: "var(--phat)", minWidth: "36px",
        }}>PHÁT</span>
      </div>

      {/* Meta row */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "1px", color: "var(--muted)" }}>
          Đã đổi ý: <span style={{ color: "var(--gold)" }}>{changes}</span> lần
        </span>
        <span style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "2px", color: "var(--gold)", textTransform: "uppercase" }}>
          Chương {chapter}
        </span>
      </div>
    </div>
  );
}
