import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FLASHCARDS } from '../data/notes';

export function FlashcardsScreen({ onBack }) {
  const { theme, toggleTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = FLASHCARDS[index];
  const total = FLASHCARDS.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const goPrev = () => {
    setFlipped(false);
    setIndex((i) => (i > 0 ? i - 1 : i));
  };
  const goNext = () => {
    setFlipped(false);
    setIndex((i) => (i < total - 1 ? i + 1 : i));
  };

  return (
    <motion.div
      className="flashcards-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="app-header">
        <h1 className="app-title">Flash kartice</h1>
        <div className="header-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Preklopi temo">
            {theme === 'light' ? <><Moon size={18} aria-hidden /> Temna tema</> : <><Sun size={18} aria-hidden /> Svetla tema</>}
          </button>
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeft size={18} aria-hidden /> Nazaj
          </button>
        </div>
      </header>

      <p className="flashcards-hint">Klikni na kartico, da jo obrneš.</p>

      <div className="flashcards-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flashcard-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className={`flashcard ${flipped ? 'flipped' : ''}`}
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? 'Prikaži sprednjo stran' : 'Prikaži zadnjo stran'}
            >
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <span className="flashcard-label">Sprednja stran</span>
                  <p className="flashcard-text">{card.front}</p>
                </div>
                <div className="flashcard-back">
                  <span className="flashcard-label">Zadnja stran</span>
                  <p className="flashcard-text">{card.back}</p>
                </div>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <nav className="flashcards-nav" aria-label="Navigacija med karticami">
        <button type="button" onClick={goPrev} disabled={isFirst}>
          <ChevronLeft size={24} aria-hidden /> Prejšnja
        </button>
        <span className="flashcards-counter" aria-live="polite">
          {index + 1} / {total}
        </span>
        <button type="button" onClick={goNext} disabled={isLast}>
          Naslednja <ChevronRight size={24} aria-hidden />
        </button>
      </nav>
    </motion.div>
  );
}
