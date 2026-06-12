import { useEffect, useState } from "react";

type Props = {
  /** Words to cycle through. */
  words: string[];
  /** Milliseconds between keystrokes when typing forward. */
  typingSpeed?: number;
  /** Milliseconds between keystrokes when deleting. */
  deletingSpeed?: number;
  /** Pause once the word is fully typed before starting to delete. */
  pauseFull?: number;
  /** Pause between deleting and starting the next word. */
  pauseEmpty?: number;
  /** Class applied to the typed word (e.g. the brand gradient). */
  className?: string;
};

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
};

/**
 * Typewriter cycles through a list of words with a typing/deleting animation.
 *
 * - Respects `prefers-reduced-motion`: shows the list comma-separated, static.
 * - The current word is announced via aria-live so screen readers track it.
 * - Caret is decorative (aria-hidden).
 */
export const Typewriter = ({
  words,
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseFull = 1400,
  pauseEmpty = 250,
  className = "text-gradient",
}: Props) => {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || words.length === 0) return;
    const current = words[wordIndex];

    // Fully typed → pause, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseFull);
      return () => clearTimeout(t);
    }

    // Fully deleted → pause, then advance to the next word.
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseEmpty);
      return () => clearTimeout(t);
    }

    // Mid-typing or mid-deleting.
    const delay = deleting ? deletingSpeed : typingSpeed;
    const t = setTimeout(() => {
      if (deleting) {
        setText(current.slice(0, text.length - 1));
      } else {
        setText(current.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseFull, pauseEmpty, reduced]);

  if (reduced) {
    return <span className={className}>{words.join(", ")}</span>;
  }

  return (
    <span aria-live="polite" aria-atomic="true" className="inline-flex items-baseline">
      <span className={className}>{text}</span>
      <span
        aria-hidden
        className="inline-block w-[3px] bg-secondary ml-1 animate-pulse"
        style={{ height: "0.9em" }}
      />
    </span>
  );
};
