import GlobalStyles from "./components/GlobalStyles";
import HUD from "./components/HUD";
import { StartScreen, CharIntro } from "./components/IntroScreens";
import { StoryScene, QuestionScene } from "./components/GameScenes";
import { ChapterTransition, BreakScene, FinalScene } from "./components/SpecialScenes";
import EndingScreen from "./components/EndingScreen";
import { useAudio } from "./hooks/useAudio";
import { useGameState } from "./hooks/useGameState";

// ═══════════════════════════════════════════════════════
// App — root, wires state + audio + screens
// ═══════════════════════════════════════════════════════
export default function App() {
  const audio = useAudio();

  const {
    screen, currentScene,
    suspicion, suspicionLabel, changes,
    chapterTransition, endingKey,
    advance, onChapterDone, pickOption, pickFinal,
    reset, goIntro, beginGame, goBack
  } = useGameState();

  // ── Screen routing ────────────────────────────────────
  return (
    <>
      <GlobalStyles />

      {/* 1. Title screen */}
      {screen === "start" && (
        <StartScreen onNext={() => { audio.init(); goIntro(); }} />
      )}

      {/* 2. Character intro */}
      {screen === "intro" && (
        <CharIntro onStart={() => { audio.init(); beginGame(); }} />
      )}

      {/* 3. Chapter transition overlay */}
      {screen === "chapter-transition" && chapterTransition && (
        <ChapterTransition chapter={chapterTransition} onDone={onChapterDone} />
      )}

      {/* 4. Break reality */}
      {screen === "break" && currentScene?.type === "break" && (
        <BreakScene scene={currentScene} changes={changes} onNext={advance} audio={audio} />
      )}

      {/* 5. Final question */}
      {screen === "final" && currentScene?.type === "final" && (
        <FinalScene scene={currentScene} onAnswer={pickFinal} audio={audio} />
      )}

      {/* 6. Ending */}
      {screen === "ending" && endingKey && (
        <EndingScreen
          endingKey={endingKey}
          suspicionLabel={suspicionLabel}
          changes={changes}
          onReset={reset}
        />
      )}

      {/* 7. Main game (story + question scenes) */}
      {screen === "game" && currentScene && (
        <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", background: "var(--bg)" }}>
          <HUD suspicion={suspicion} changes={changes} chapter={currentScene.chapter} />
          <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {currentScene.type === "story" && (
              <StoryScene scene={currentScene} onNext={advance} onBack={goBack} audio={audio} /> // ← thêm onBack
            )}
            {currentScene.type === "question" && (
              <QuestionScene scene={currentScene} onAnswer={pickOption} onBack={goBack} audio={audio} /> // ← thêm onBack
            )}
          </div>
        </div>
      )}
    </>
  );
}