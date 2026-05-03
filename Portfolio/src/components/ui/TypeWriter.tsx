import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
  gradient?: boolean;
}

export function TypeWriter({
  words,
  delay = 100,
  infinite = true,
  gradient = true,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("|");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length + 1) {
          setCurrentText(word.slice(0, currentText.length) + "|");
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (currentText.length > 1) {
          setCurrentText(word.slice(0, currentText.length - 2) + "|");
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) =>
            infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      }
    }, isDeleting ? delay / 1.5 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, infinite]);

  return (
    <span
      className={`relative font-semibold ${
        gradient
          ? "bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent"
          : "text-[var(--accent-cyan)]"
      }`}
    >
      <span className="whitespace-nowrap">{currentText}</span>
    </span>
  );
}
