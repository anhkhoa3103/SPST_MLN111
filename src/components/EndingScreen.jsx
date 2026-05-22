import { useState } from "react";
import { ENDINGS, CONCLUSION, OPEN_QUESTION, OPEN_QUESTION_FINAL, VERDICT_LABELS } from "../data/endings";

// ═══════════════════════════════════════════════════════
// EndingScreen — màn kết thúc đầy đủ
// ═══════════════════════════════════════════════════════
export default function EndingScreen({ endingKey, suspicionLabel, changes, onReset }) {
  const e = ENDINGS[endingKey];
  if (!e) return null;

  const isCorrect = endingKey === "D";
  const verdictLabel = VERDICT_LABELS[endingKey];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 150,
      background: "var(--bg)", overflowY: "auto", padding: "48px 24px",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>

        {/* Header */}
        <Label>{e.tag}</Label>
        <Heading>{e.verdict}</Heading>

        {/* Analysis */}
        <SectionTitle>Phân tích lựa chọn</SectionTitle>
        <BodyText>{e.analysis}</BodyText>

        <Divider />

        {/* Philosophy */}
        <SectionTitle>Triết học — {e.errorName}</SectionTitle>
        <BodyText>{e.errorText}</BodyText>

        <Divider />

        {/* Truth */}
        <SectionTitle>Sự thật — Qua lời vợ Trọng</SectionTitle>
        <BodyText italic>{e.truth}</BodyText>

        <Divider />

        {/* Philosophy quote */}
        <blockquote style={{
          borderLeft: "2px solid var(--gold)",
          padding: "14px 18px",
          background: "rgba(201,168,112,0.05)",
          marginBottom: "24px",
          fontFamily: "var(--serif)",
          fontSize: "16px", fontStyle: "italic",
          color: "rgba(230,225,216,0.8)",
          lineHeight: "1.7",
          whiteSpace: "pre-line",
        }}>
          {e.philosophy}
        </blockquote>

        <Divider />

        {/* Conclusion */}
        <SectionTitle>Kết luận chung</SectionTitle>
        <BodyText>{CONCLUSION}</BodyText>

        <Divider />

        {/* Open question */}
        <SectionTitle>Câu hỏi mở</SectionTitle>
        <div style={{
          border: "1px solid rgba(201,168,112,0.12)",
          background: "rgba(201,168,112,0.03)",
          padding: "22px",
          marginBottom: "24px",
        }}>
          <OpenQuestionImg />
          <BodyText>{OPEN_QUESTION}</BodyText>
          <BodyText italic style={{ color: "rgba(201,168,112,0.7)", fontSize: "14px", marginTop: "16px" }}>
            {OPEN_QUESTION_FINAL}
          </BodyText>
        </div>

        <Divider />

        {/* Profile */}
        <SectionTitle>Hồ sơ nhận thức</SectionTitle>
        <div style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--border)",
          padding: "16px", marginBottom: "24px",
        }}>
          {[
            ["Phán quyết", verdictLabel, "var(--text)"],
            ["Thanh nghi ngờ", suspicionLabel, "var(--text)"],
            ["Số lần đổi ý", `${changes} lần`, "var(--text)"],
            ["Lỗi nhận thức", isCorrect ? "✓ Lập trường đúng" : e.errorName, isCorrect ? "var(--duy)" : "rgba(224,82,82,0.7)"],
            ["Nguyên tắc cốt lõi", "Chân lý = thực tiễn kiểm chứng", "var(--text)"],
          ].map(([label, val, color]) => (
            <div key={label} style={{
              display: "flex", justifyContent: "space-between",
              padding: "6px 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              fontSize: "12px",
            }}>
              <span style={{ fontFamily: "var(--mono)", color: "var(--muted)", letterSpacing: "0.5px" }}>{label}</span>
              <span style={{ color }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Replay */}
        <ReplayButton onClick={onReset}>↺ &nbsp; Xét xử lại</ReplayButton>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────

function Label({ children }) {
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "4px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "8px" }}>
      {children}
    </div>
  );
}

function Heading({ children }) {
  return (
    <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px,5vw,34px)", fontWeight: "700", color: "var(--text)", lineHeight: "1.2", marginBottom: "28px" }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", marginTop: "24px" }}>
      {children}
    </div>
  );
}

function BodyText({ children, italic, style = {} }) {
  return (
    <div style={{
      fontFamily: "var(--serif)", fontSize: "15px", lineHeight: "1.9",
      color: "rgba(230,225,216,0.7)", whiteSpace: "pre-line",
      marginBottom: "8px",
      fontStyle: italic ? "italic" : "normal",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "var(--border)", margin: "20px 0" }} />;
}

function OpenQuestionImg() {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <img
      src="img/vial-bush.jpg"
      alt="Lọ thuốc dưới bụi cây"
      onError={() => setError(true)}
      style={{
        width: "100%", maxHeight: "180px", objectFit: "cover",
        marginBottom: "16px",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "block",
        background: "rgba(255,255,255,0.02)",
      }}
    />
  );
}

function ReplayButton({ onClick, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%", padding: "13px",
        marginTop: "20px", marginBottom: "48px",
        fontFamily: "var(--mono)", fontSize: "10px",
        letterSpacing: "3px", textTransform: "uppercase",
        color: "var(--text)", cursor: "pointer", transition: "all 0.3s",
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)"}`,
      }}
    >
      {children}
    </button>
  );
}
