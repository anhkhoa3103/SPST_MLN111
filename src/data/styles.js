// ═══════════════════════════════════════════════════════
// DESIGN TOKENS & GLOBAL STYLES
// ═══════════════════════════════════════════════════════

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500&family=Besley:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400&display=swap');

  :root {
    --bg:     #07070a;
    --text:   #e6e1d8;
    --muted:  rgba(230,225,216,0.38);
    --gold:   #c9a870;
    --border: rgba(255,255,255,0.07);
    --duy:    #5b9cf6;
    --phat:   #e05252;
    --serif:  'Besley', serif;
    --body:   'Be Vietnam Pro', sans-serif;
    --mono:   'DM Mono', monospace;
  }

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:100%; height:100%; overflow:hidden; background:var(--bg); }

  @keyframes blink {
    0%,100% { opacity:1 }
    50%      { opacity:0 }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(12px) }
    to   { opacity:1; transform:none }
  }
  @keyframes flicker {
    0%,94%,100% { opacity:1   }
    95%         { opacity:.82 }
    96%         { opacity:1   }
    97%         { opacity:.88 }
    98%         { opacity:1   }
  }
  @keyframes pulseHint {
    0%,100% { opacity:.3 }
    50%     { opacity:.7 }
  }
`;

// Image slot positions around the center story panel
export const IMG_POSITIONS = [
  { left: "12px",  top: "12%" },    // 0 — trái trên
  { right: "12px", top: "12%" },    // 1 — phải trên
  { left: "12px",  top: "52%" },    // 2 — trái dưới
  { right: "12px", top: "52%" },    // 3 — phải dưới
  { left: "12px",  top: "32%" },    // 4 — trái giữa
];

export const IMG_ROTATIONS = [-2.5, 1.8, -1.2, 2.8, -3.1];

// Tag color map for character cards
export const TAG_COLORS = {
  danger:  { border: "rgba(224,82,82,0.2)",   color: "rgba(224,82,82,0.6)"   },
  info:    { border: "rgba(91,156,246,0.2)",   color: "rgba(91,156,246,0.6)"  },
  gold:    { border: "rgba(201,168,112,0.2)",  color: "rgba(201,168,112,0.6)" },
  neutral: { border: "rgba(200,200,200,0.12)", color: "rgba(200,200,200,0.35)"},
};

// Shared button style helpers
export const btnBase = {
  fontFamily: "var(--mono)",
  fontSize: "10px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "var(--text)",
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.18)",
  padding: "13px 44px",
  cursor: "pointer",
  transition: "all 0.3s",
};
