import { useState, useEffect, useCallback   } from "react";
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
export function BreakScene({ scene, changes, suspicion, onNext, audio }) {
  const [visible, setVisible] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    audio.sfxBreak();
    const t1 = setTimeout(() => setVisible(true), 300);
    const t2 = setTimeout(() => setShowBtn(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const suspicionLabel = suspicion < -15 ? "Nghiêng về Duy" : suspicion > 15 ? "Nghiêng về Phát" : "Cân bằng";
  const suspicionColor = suspicion < -15 ? "var(--duy)" : suspicion > 15 ? "var(--phat)" : "var(--muted)";

  const tangList = [
    { so: "01", ten: "Cảm tính", mo: "Thái độ, biểu hiện bề ngoài của ba nhân vật." },
    { so: "02", ten: "Lý tính", mo: "Động cơ, cơ hội, phương tiện — bạn dựng giả thuyết." },
    { so: "03", ten: "Kiểm chứng", mo: "Vật chứng, pháp y, camera, lọ thuốc — đối chiếu thực tiễn." },
  ];

  const chuaGiaiThich = [
    "Lọ thuốc của Trọng biến mất — không tìm thấy trong phòng.",
    "Một lọ phụ tử khác xuất hiện dưới bụi cây ngay dưới cửa sổ phòng 312.",
    "Cuộc gọi 22:02 giữa Duy và Phát — nội dung không xác minh được.",
    "Vợ Trọng nói anh đã 'lên kế hoạch từ trước' — không nói kế hoạch gì.",
  ];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "#07070a", overflowY: "auto",
    }}>
      <div style={{
        maxWidth: "660px", margin: "0 auto",
        padding: "56px 28px 80px",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease",
      }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "5px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "10px" }}>
            Phản tư nhận thức
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px,4vw,32px)", fontWeight: "700", color: "var(--text)", lineHeight: "1.2", marginBottom: "20px" }}>
            Sự thật không đổi.<br />Chỉ có cách bạn nhìn nó thay đổi.
          </div>
          <div style={{ height: "1px", background: "var(--border)" }} />
        </div>

        {/* ── Stats ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "1px", background: "var(--border)",
          border: "1px solid var(--border)",
          marginBottom: "40px",
        }}>
          {[
            { label: "Số lần đổi ý", value: changes + " lần", color: "var(--gold)" },
            { label: "Nghi ngờ hiện tại", value: suspicionLabel, color: suspicionColor },
          ].map((s, i) => (
            <div key={i} style={{ background: "#07070a", padding: "20px 20px" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "8px", letterSpacing: "2px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "8px" }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "26px", fontWeight: "700", color: s.color }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── 3 tầng đã đi qua ── */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px" }}>
            Ba tầng nhận thức đã đi qua
          </div>
          {tangList.map((t) => (
            <div key={t.so} style={{
              display: "flex", gap: "20px", alignItems: "flex-start",
              padding: "14px 0", borderBottom: "1px solid var(--border)",
            }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "20px", fontWeight: "700", color: "rgba(201,168,112,0.2)", minWidth: "32px", lineHeight: "1" }}>
                {t.so}
              </div>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--text)", marginBottom: "4px", letterSpacing: "1px" }}>
                  {t.ten}
                </div>
                <div style={{ fontFamily: "var(--body)", fontSize: "13px", lineHeight: "1.7", color: "rgba(230,225,216,0.5)" }}>
                  {t.mo}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Điều quan trọng ── */}
        <div style={{
          background: "rgba(201,168,112,0.03)",
          border: "1px solid rgba(201,168,112,0.12)",
          padding: "24px", marginBottom: "40px",
        }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--gold)", textTransform: "uppercase", marginBottom: "16px" }}>
            Cần nhớ
          </div>
          {[
            { text: "Một cảm giác mạnh không phải chân lý.", dim: false },
            { text: "Một suy luận hợp lý chưa phải chân lý.", dim: false },
            { text: "Một khả năng đáng sợ cũng chưa phải chân lý.", dim: false },
            { text: "Chân lý chỉ phụ thuộc vào điều gì đã thực sự xảy ra.", dim: true },
          ].map((item, i) => (
            <div key={i} style={{
              fontFamily: item.dim ? "var(--serif)" : "var(--body)",
              fontSize: item.dim ? "15px" : "13px",
              lineHeight: "1.8", marginBottom: "6px",
              color: item.dim ? "var(--text)" : "rgba(230,225,216,0.55)",
              fontStyle: item.dim ? "italic" : "normal",
            }}>
              {item.dim ? `— ${item.text}` : `· ${item.text}`}
            </div>
          ))}
        </div>

        {/* ── Chưa giải thích ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px" }}>
            Vẫn chưa được giải thích
          </div>
          {chuaGiaiThich.map((line, i) => (
            <div key={i} style={{
              display: "flex", gap: "14px", alignItems: "flex-start",
              padding: "12px 0", borderBottom: "1px solid var(--border)",
            }}>
              <div style={{ color: "rgba(201,168,112,0.4)", fontFamily: "var(--mono)", fontSize: "11px", marginTop: "1px", minWidth: "14px" }}>
                ?
              </div>
              <div style={{ fontFamily: "var(--body)", fontSize: "13px", lineHeight: "1.7", color: "rgba(230,225,216,0.55)" }}>
                {line}
              </div>
            </div>
          ))}
        </div>

        {/* ── Hồ sơ vật chứng ── */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px" }}>
            Hồ sơ vật chứng
          </div>

          {[
            { label: "Chất độc", value: "Aconitine — tìm thấy trong ly của Trọng, không phải trong chai rượu." },
            { label: "Lọ Trọng", value: "Mua tại Đà Lạt — biến mất hoàn toàn, không tìm thấy trong phòng." },
            { label: "Lọ Phát", value: "Còn nguyên, chưa mở — giấu trong vali dưới lớp quần áo." },
            { label: "Lọ Duy", value: "Đã mở, gần hết — vứt vào thùng rác lúc 22:19 trước cửa hàng tiện lợi." },
            { label: "Lọ bí ẩn", value: "Tìm thấy dưới bụi cây ngay dưới cửa sổ phòng 312 — dấu vân tay mờ do mưa." },
            { label: "Camera", value: "Duy rời 22:00. Phát rời 22:20. Không ai vào phòng sau đó." },
            { label: "Cuộc gọi", value: "Duy gọi Phát 22:02, 30 giây, bị xóa. Phát gọi Duy 3 lần trước 113." },
          ].map((item, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "100px 1fr",
              gap: "16px", padding: "12px 0",
              borderBottom: "1px solid var(--border)",
            }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "1px", color: "var(--gold)", textTransform: "uppercase", paddingTop: "2px" }}>
                {item.label}
              </div>
              <div style={{ fontFamily: "var(--body)", fontSize: "13px", lineHeight: "1.7", color: "rgba(230,225,216,0.6)" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Tổng hợp nghi ngờ ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "3px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "16px" }}>
            Tổng hợp nghi ngờ
          </div>

          {[
            {
              name: "DUY",
              color: "var(--duy)",
              borderColor: "rgba(91,156,246,0.2)",
              bg: "rgba(91,156,246,0.03)",
              points: [
                "Biết về phụ tử — từng là khách quen tiệm thuốc Đà Lạt.",
                "Đề xuất ghé tiệm, thanh toán cho cả hai lọ, nhưng không mua.",
                "Vứt lọ phụ tử gần hết đúng tối hôm đó — lý do thay đổi khi bị hỏi.",
                "Biển thủ 500 triệu — sợ Trọng phát hiện.",
                "Rời phòng sớm dù Trọng muốn nói chuyện riêng.",
              ],
              counter: "Alibi được xác nhận lúc 22:19. Thời điểm Trọng uống độc — Duy đã rời phòng 20 phút.",
            },
            {
              name: "PHÁT",
              color: "var(--phat)",
              borderColor: "rgba(224,82,82,0.2)",
              bg: "rgba(224,82,82,0.03)",
              points: [
                "Nợ 3.4 tỷ đáo hạn 6 tuần — mất tất cả nếu Trọng rút.",
                "Điều khoản bảo hiểm nhân thọ chéo — lợi lớn nếu Trọng chết.",
                "Ở một mình với Trọng từ 22:00 đến 22:20 — đúng khung thời gian uống độc.",
                "Xóa cuộc gọi từ Duy. Gọi Duy 3 lần trước 113.",
              ],
              counter: "Lọ thuốc của Phát còn nguyên. Không có bằng chứng trực tiếp cho thấy Phát bỏ độc.",
            },
            {
              name: "TRỌNG",
              color: "rgba(200,200,200,0.5)",
              borderColor: "rgba(200,200,200,0.1)",
              bg: "rgba(200,200,200,0.02)",
              points: [
                "Ung thư tụy giai đoạn cuối — biết mình không còn nhiều thời gian.",
                "Sắp bị khởi tố — tài sản sẽ bị phong tỏa, Phát và Duy bị liên lụy.",
                "Hỏi kỹ về liều lượng phụ tử tại tiệm thuốc.",
                "Lọ thuốc biến mất. Lọ bí ẩn xuất hiện dưới cửa sổ.",
                "Vợ nói anh đã 'lên kế hoạch từ trước'.",
              ],
              counter: "Không có bằng chứng phủ nhận giả thuyết này. Cũng không có bằng chứng xác nhận tuyệt đối.",
            },
          ].map((ng) => (
            <div key={ng.name} style={{
              border: `1px solid ${ng.borderColor}`,
              background: ng.bg,
              padding: "18px 20px",
              marginBottom: "12px",
            }}>
              {/* Tên */}
              <div style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "3px", color: ng.color, textTransform: "uppercase", marginBottom: "12px" }}>
                {ng.name}
              </div>

              {/* Điểm đáng ngờ */}
              <div style={{ marginBottom: "12px" }}>
                {ng.points.map((p, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "10px", alignItems: "flex-start",
                    marginBottom: "6px",
                  }}>
                    <div style={{ color: ng.color, fontSize: "10px", opacity: 0.6, minWidth: "12px", marginTop: "3px" }}>▸</div>
                    <div style={{ fontFamily: "var(--body)", fontSize: "13px", lineHeight: "1.6", color: "rgba(230,225,216,0.65)" }}>
                      {p}
                    </div>
                  </div>
                ))}
              </div>

              {/* Phản biện */}
              <div style={{
                borderTop: `1px solid ${ng.borderColor}`,
                paddingTop: "10px",
                fontFamily: "var(--body)", fontSize: "12px", lineHeight: "1.6",
                color: "rgba(230,225,216,0.35)", fontStyle: "italic",
              }}>
                Nhưng: {ng.counter}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", paddingTop: "8px" }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: "15px", color: "var(--muted)", fontStyle: "italic", marginBottom: "28px", lineHeight: "1.8" }}>
            Bây giờ, hãy nhìn lại phán quyết của mình.
          </div>
          <div style={{ opacity: showBtn ? 1 : 0, transition: "opacity 0.8s ease" }}>
            <button
              onClick={onNext}
              style={{
                fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "3px",
                textTransform: "uppercase", color: "var(--gold)",
                background: "transparent",
                border: "1px solid rgba(201,168,112,0.3)",
                padding: "14px 48px", cursor: "pointer", transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.target.style.borderColor = "var(--gold)"; e.target.style.background = "rgba(201,168,112,0.05)"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(201,168,112,0.3)"; e.target.style.background = "transparent"; }}
            >
              Đến phán quyết cuối →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// FinalScene — phán quyết cuối với typewriter cực chậm + flicker
// ═══════════════════════════════════════════════════════
export function FinalScene({ scene, onAnswer, audio }) {
  const [shownLines, setShownLines] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const totalLines = scene.finalLines.length;

  const handleNext = useCallback(() => {
    if (shownLines < totalLines) {
      setShownLines((n) => n + 1);
    } else if (!showQuestion) {
      setShowQuestion(true);
      setTimeout(() => setShowOptions(true), 800);
    }
  }, [shownLines, totalLines, showQuestion]);

  // Hiện dòng đầu tiên tự động
  useEffect(() => {
    const t = setTimeout(() => setShownLines(1), 600);
    return () => clearTimeout(t);
  }, []);

  // Enter để advance
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext]);

  return (
    <div
      onClick={handleNext}
      style={{
        position: "fixed", inset: 0, zIndex: 180, background: "#000",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "48px 32px", textAlign: "center",
        cursor: "default",
      }}
    >
      <div style={{
        fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "4px",
        color: "rgba(201,168,112,0.35)", textTransform: "uppercase",
        marginBottom: "40px", animation: "flicker 4s ease infinite",
      }}>
        Phán quyết cuối cùng
      </div>

      <div style={{ maxWidth: "560px", marginBottom: "40px" }}>
        {scene.finalLines.map((line, i) => (
          <div key={i} style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(17px,3vw,24px)",
            color: i < shownLines ? "rgba(201,168,112,0.85)" : "transparent",
            lineHeight: "1.9",
            marginBottom: "8px",
            transition: "color 0.8s ease",
            animation: i < shownLines ? "flicker 6s ease infinite" : "none",
          }}>
            {line}
          </div>
        ))}
      </div>

      {/* Câu hỏi */}
      {showQuestion && (
        <div style={{
          fontFamily: "var(--serif)", fontSize: "clamp(20px,3.5vw,28px)",
          color: "var(--gold)", lineHeight: "1.7",
          animation: "flicker 5s ease infinite",
          marginBottom: "32px",
        }}>
          {scene.question}
        </div>
      )}

      {/* Options */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "10px",
        justifyContent: "center",
        opacity: showOptions ? 1 : 0,
        transition: "opacity 1s ease",
        pointerEvents: showOptions ? "all" : "none",
      }}
        onClick={(e) => e.stopPropagation()}
      >
        {scene.options.map((opt, i) => (
          <FinalButton
            key={i}
            text={opt.text}
            onClick={() => { audio.sfxEnding(); onAnswer(opt.ending); }}
          />
        ))}
      </div>

      {/* Hint */}
      {!showQuestion && shownLines < totalLines && (
        <div style={{
          position: "absolute", bottom: "32px",
          fontFamily: "var(--mono)", fontSize: "8px",
          letterSpacing: "2px", color: "var(--muted)",
          animation: "pulseHint 2s ease infinite",
        }}>
          — nhấn để tiếp tục —
        </div>
      )}
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
