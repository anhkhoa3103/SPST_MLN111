import { useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════
// useAudio — Web Audio API hook
// ═══════════════════════════════════════════════════════
export function useAudio() {
  const acRef = useRef(null);

  const init = useCallback(() => {
    if (!acRef.current) {
      acRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  }, []);

  const tone = useCallback((freq, dur, type = "sine", vol = 0.04) => {
    const ac = acRef.current;
    if (!ac) return;
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.connect(g);
    g.connect(ac.destination);
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, ac.currentTime);
    g.gain.linearRampToValueAtTime(vol, ac.currentTime + 0.04);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    o.start();
    o.stop(ac.currentTime + dur);
  }, []);

  return {
    init,
    sfxType:   () => tone(800, 0.03, "square", 0.012),
    sfxReveal: () => { tone(220, 0.4, "sine", 0.04); setTimeout(() => tone(330, 0.3, "sine", 0.03), 200); },
    sfxClick:  () => tone(600, 0.07, "square", 0.03),
    sfxBreak:  () => { tone(100, 1.2, "sawtooth", 0.04); setTimeout(() => tone(80, 1.5, "sine", 0.03), 200); },
    sfxEnding: () => {
      tone(330, 0.6, "sine", 0.05);
      setTimeout(() => tone(415, 0.5, "sine", 0.04), 400);
      setTimeout(() => tone(495, 0.9, "sine", 0.04), 750);
    },
  };
}
