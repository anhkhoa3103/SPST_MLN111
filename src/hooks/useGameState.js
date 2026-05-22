import { useState, useCallback } from "react";
import { SCENES } from "../data/scenes";

// ═══════════════════════════════════════════════════════
// useGameState — central game state + transitions
// ═══════════════════════════════════════════════════════
export function useGameState() {
  const [screen, setScreen] = useState("start");
  // start | intro | chapter-transition | game | break | final | ending
  const [sceneIdx, setSceneIdx] = useState(0);
  const [suspicion, setSuspicion] = useState(0);   // -48 … +48
  const [changes, setChanges] = useState(0);
  const [lastDir, setLastDir] = useState(0);        // -1 | 0 | 1
  const [chapterTransition, setChapterTransition] = useState(null);
  const [endingKey, setEndingKey] = useState(null);
  const [lastChapter, setLastChapter] = useState(0);

  const currentScene = SCENES[sceneIdx];

  // ── Apply suspicion shift ────────────────────────────
  const applyShift = useCallback((shift) => {
    if (!shift) return;
    const dir = shift > 0 ? 1 : -1;
    if (lastDir !== 0 && dir !== lastDir) setChanges((c) => c + 1);
    setLastDir(dir);
    setSuspicion((s) => Math.max(-48, Math.min(48, s + shift)));
  }, [lastDir]);

  // ── Get suspicion label ──────────────────────────────
  const suspicionLabel = (() => {
    if (suspicion < -15) return "Nghiêng về DUY";
    if (suspicion > 15) return "Nghiêng về PHÁT";
    return "Cân bằng";
  })();

  // ── Advance to next scene ────────────────────────────
  const advance = useCallback(() => {
    const nextIdx = sceneIdx + 1;
    if (nextIdx >= SCENES.length) return;
    const next = SCENES[nextIdx];
    if (next.chapter !== lastChapter) {
      setChapterTransition(next.chapter);
      setScreen("chapter-transition");
    } else {
      setSceneIdx(nextIdx);
      setScreen(
        next.type === "break" ? "break"
          : next.type === "final" ? "final"
            : "game"
      );
    }
  }, [sceneIdx, lastChapter]);

  // ── Pick a question option ───────────────────────────
  const pickOption = useCallback((opt) => {
    applyShift(opt.shift || 0);
    advance();
  }, [applyShift, advance]);

  // ── Pick final verdict ───────────────────────────────
  const pickFinal = useCallback((key) => {
    setEndingKey(key);
    setScreen("ending");
  }, []);

  // ── Reset to start ───────────────────────────────────
  const reset = useCallback(() => {
    setScreen("intro");
    setSceneIdx(0);
    setSuspicion(0);
    setChanges(0);
    setLastDir(0);
    setEndingKey(null);
    setLastChapter(0);
    setChapterTransition(null);
  }, []);

  // ── Start game (from start screen → intro) ───────────
  const goIntro = useCallback(() => setScreen("intro"), []);

  // ── Begin game (from intro → chapter 1) ─────────────
  // ── Begin game (from intro → chapter 1) ─────────────
  const beginGame = useCallback(() => {
    setChapterTransition(1);
    setScreen("chapter-transition");
  }, []);

  // ── After chapter transition animation completes ─────
  const onChapterDone = useCallback(() => {
    // Nếu đang ở chapter transition từ beginGame (sceneIdx=0, lastChapter=0)
    // thì không advance, chỉ set lastChapter và vào scene hiện tại
    const current = SCENES[sceneIdx];
    if (current && current.chapter === chapterTransition) {
      // Đây là lần đầu vào game — không advance
      setLastChapter(current.chapter);
      setChapterTransition(null);
      setScreen("game");
      return;
    }

    // Các lần sau — advance bình thường
    const nextIdx = sceneIdx + 1;
    const next = SCENES[nextIdx];
    setLastChapter(next.chapter);
    setSceneIdx(nextIdx);
    setChapterTransition(null);
    setScreen(
      next.type === "break" ? "break"
        : next.type === "final" ? "final"
          : "game"
    );
  }, [sceneIdx, chapterTransition]);

  // ── Go back to previous scene ────────────────────────
  const goBack = useCallback(() => {
    if (sceneIdx <= 0) return;
    const prevIdx = sceneIdx - 1;
    const prev = SCENES[prevIdx];
    setSceneIdx(prevIdx);
    setLastChapter(prev.chapter);
    setScreen(
      prev.type === "break" ? "break"
        : prev.type === "final" ? "final"
          : "game"
    );
  }, [sceneIdx]);

  return {
    screen, currentScene, sceneIdx,
    suspicion, suspicionLabel, changes,
    chapterTransition, endingKey,
    advance, onChapterDone, pickOption, pickFinal,
    reset, goIntro, beginGame, goBack,
  };
}
