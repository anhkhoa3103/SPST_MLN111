import { useState } from "react";
import { ENDINGS, CONCLUSION, OPEN_QUESTION, OPEN_QUESTION_FINAL, VERDICT_LABELS } from "../data/endings";

export default function EndingScreen({ endingKey, suspicionLabel, changes, onReset }) {
  const [page, setPage] = useState(0);
  // 0: phân tích + triết học
  // 1: sự thật
  // 2: kết luận chung
  // 3: câu hỏi mở

  const e = ENDINGS[endingKey];
  if (!e) return null;

  const isCorrect = endingKey === "D";
  const verdictLabel = VERDICT_LABELS[endingKey];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 150,
      background: "var(--bg)", overflowY: "auto",
    }}>

      {/* ══ TRANG 0 — Phân tích + Triết học ══ */}
      {page === 0 && (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "56px 32px 80px" }}>

          {/* Header */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "5px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "10px" }}>
              {e.tag}
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px,5vw,38px)", fontWeight: "700", color: "var(--text)", lineHeight: "1.2", marginBottom: "20px" }}>
              {e.verdict}
            </div>
            <div style={{ height: "1px", background: "var(--border)" }} />
          </div>

          {/* 2 cột */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "40px", marginBottom: "48px",
          }}>

            {/* Cột trái — Phân tích lựa chọn */}
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid var(--border)" }}>
                Phân tích lựa chọn
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "14px", lineHeight: "1.9", color: "rgba(230,225,216,0.7)", whiteSpace: "pre-line" }}>
                {e.analysis}
              </div>

              {/* Hồ sơ nhận thức */}
              <div style={{ marginTop: "32px" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "12px" }}>
                  Hồ sơ nhận thức
                </div>
                <div style={{ border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
                  {[
                    ["Phán quyết", verdictLabel, "var(--text)"],
                    ["Nghi ngờ cuối", suspicionLabel, "var(--text)"],
                    ["Số lần đổi ý", `${changes} lần`, "var(--gold)"],
                    ["Lỗi nhận thức", isCorrect ? "✓ Lập trường đúng" : e.errorName, isCorrect ? "var(--duy)" : "rgba(224,82,82,0.7)"],
                  ].map(([label, val, color]) => (
                    <div key={label} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                      padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.04)",
                      gap: "12px",
                    }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.5px", whiteSpace: "nowrap" }}>{label}</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: "12px", color, textAlign: "right" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cột phải — Triết học */}
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid var(--border)" }}>
                Phân tích triết học — {e.errorName}
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "14px", lineHeight: "1.9", color: "rgba(230,225,216,0.7)", whiteSpace: "pre-line", marginBottom: "24px" }}>
                {e.errorText}
              </div>

              {/* Quote triết */}
              <blockquote style={{
                borderLeft: "2px solid var(--gold)",
                padding: "16px 20px",
                background: "rgba(201,168,112,0.04)",
                fontFamily: "var(--serif)", fontSize: "14px",
                fontStyle: "italic", color: "rgba(230,225,216,0.8)",
                lineHeight: "1.8", whiteSpace: "pre-line",
                margin: 0,
              }}>
                {e.philosophy}
              </blockquote>
            </div>
          </div>

          <NextButton onClick={() => setPage(1)}>Tiếp tục — Sự thật →</NextButton>
        </div>
      )}

      {/* ══ TRANG 1 — Sự thật ══ */}
      {page === 1 && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "56px 32px 80px" }}>
          <PageLabel>Sự thật</PageLabel>
          <PageHeading>Qua lời vợ Trọng</PageHeading>
          <Divider />

          <div style={{
            fontFamily: "var(--serif)", fontSize: "16px", lineHeight: "2",
            color: "rgba(230,225,216,0.8)", whiteSpace: "pre-line",
            fontStyle: "italic", marginBottom: "40px",
          }}>
            {e.truth}
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <BackBtn onClick={() => setPage(0)} />
            <NextButton onClick={() => setPage(2)}>Tiếp tục — Kết luận →</NextButton>
          </div>
        </div>
      )}

      {/* ══ TRANG 2 — Kết luận chung ══ */}
      {page === 2 && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "56px 32px 80px" }}>
          <PageLabel>Kết luận chung</PageLabel>
          <PageHeading>Chân lý là khách quan</PageHeading>
          <Divider />

          <div style={{
            fontFamily: "var(--serif)", fontSize: "15px", lineHeight: "1.95",
            color: "rgba(230,225,216,0.75)", whiteSpace: "pre-line",
            marginBottom: "40px",
          }}>
            {CONCLUSION}
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <BackBtn onClick={() => setPage(1)} />
            <NextButton onClick={() => setPage(3)}>Tiếp tục — Câu hỏi mở →</NextButton>
          </div>
        </div>
      )}

      {/* ══ TRANG 3 — Câu hỏi mở ══ */}
      {/* ══ TRANG 3 — Câu hỏi mở ══ */}
      {page === 3 && (
        <div style={{
          maxWidth: "580px", margin: "0 auto",
          padding: "80px 32px 80px",
          display: "flex", flexDirection: "column",
          minHeight: "100vh", justifyContent: "center",
        }}>

          <PageLabel>Câu hỏi mở</PageLabel>

          <OpenQuestionImg />

          {/* Text chính — từng đoạn ngắn, to, sát nhau */}
          <div style={{ marginBottom: "40px" }}>
            {OPEN_QUESTION.split("\n").map((line, i) => {
              const isEmpty = line.trim() === "";
              const isBold = line.startsWith("Nếu") || line.startsWith("Vậy");
              const isSmall = line.startsWith("Lọ");
              return (
                <div key={i} style={{
                  fontFamily: isBold ? "var(--serif)" : isSmall ? "var(--mono)" : "var(--serif)",
                  fontSize: isEmpty ? "0px" : isBold ? "22px" : isSmall ? "11px" : "18px",
                  lineHeight: isEmpty ? "1.2" : "1.5",
                  marginBottom: isEmpty ? "20px" : "4px",
                  color: isBold
                    ? "var(--text)"
                    : isSmall
                      ? "rgba(230,225,216,0.4)"
                      : "rgba(230,225,216,0.75)",
                  letterSpacing: isSmall ? "1px" : "0px",
                  textTransform: isSmall ? "none" : "none",
                  fontStyle: line.startsWith("Vậy") ? "italic" : "normal",
                }}>
                  {line || "\u00A0"}
                </div>
              );
            })}
          </div>

          {/* Quote cuối */}
          <div style={{
            borderLeft: "2px solid rgba(201,168,112,0.4)",
            paddingLeft: "20px",
            marginBottom: "48px",
          }}>
            {OPEN_QUESTION_FINAL.split("\n").map((line, i) => (
              <div key={i} style={{
                fontFamily: "var(--serif)",
                fontSize: line.trim() === "" ? "0" : "16px",
                lineHeight: line.trim() === "" ? "0.8" : "1.7",
                marginBottom: line.trim() === "" ? "8px" : "2px",
                color: "rgba(201,168,112,0.7)",
                fontStyle: "italic",
              }}>
                {line || "\u00A0"}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <BackBtn onClick={() => setPage(2)} />
            <ReplayButton onClick={onReset}>↺  Xét xử lại</ReplayButton>
          </div>

        </div>
      )}

    </div>
  );
}

// ── Sub-components ────────────────────────────────────

function PageLabel({ children }) {
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "5px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "10px" }}>
      {children}
    </div>
  );
}

function PageHeading({ children }) {
  return (
    <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px,4vw,32px)", fontWeight: "700", color: "var(--text)", lineHeight: "1.2", marginBottom: "20px" }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "var(--border)", marginBottom: "32px" }} />;
}

function OpenQuestionImg() {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <img
      src="/img/vial-bush.jpg"
      alt="Lọ thuốc dưới bụi cây"
      onError={() => setError(true)}
      style={{
        width: "100%", maxHeight: "200px", objectFit: "cover",
        marginBottom: "24px", border: "1px solid rgba(255,255,255,0.06)",
        display: "block",
      }}
    />
  );
}

function NextButton({ onClick, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1, padding: "13px 24px",
        fontFamily: "var(--mono)", fontSize: "10px",
        letterSpacing: "3px", textTransform: "uppercase",
        color: hovered ? "var(--gold)" : "var(--text)",
        cursor: "pointer", transition: "all 0.3s",
        background: "transparent",
        border: `1px solid ${hovered ? "var(--gold)" : "rgba(255,255,255,0.18)"}`,
      }}
    >
      {children}
    </button>
  );
}

function BackBtn({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "13px 20px",
        fontFamily: "var(--mono)", fontSize: "10px",
        letterSpacing: "2px", textTransform: "uppercase",
        color: hovered ? "var(--text)" : "var(--muted)",
        cursor: "pointer", transition: "all 0.3s",
        background: "transparent", border: "1px solid var(--border)",
      }}
    >
      ← Quay lại
    </button>
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
        flex: 1, padding: "13px 24px",
        fontFamily: "var(--mono)", fontSize: "10px",
        letterSpacing: "3px", textTransform: "uppercase",
        color: hovered ? "var(--gold)" : "var(--text)",
        cursor: "pointer", transition: "all 0.3s",
        background: "transparent",
        border: `1px solid ${hovered ? "var(--gold)" : "rgba(255,255,255,0.18)"}`,
      }}
    >
      {children}
    </button>
  );
}