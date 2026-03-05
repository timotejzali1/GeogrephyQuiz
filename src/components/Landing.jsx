import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Play, Layers, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { QUESTIONS_PER_PAGE_DEFAULT } from '../data/questions';

export function Landing({ onStart, minQuestions, maxQuestions, onFlashcards, onNotes }) {
  const { theme, toggleTheme } = useTheme();
  const [numQuestions, setNumQuestions] = useState(10);
  const [perPage, setPerPage] = useState(QUESTIONS_PER_PAGE_DEFAULT);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Math.floor(Number(numQuestions));
    if (n < minQuestions || n > maxQuestions) {
      setError(`Vnesi število med ${minQuestions} in ${maxQuestions}.`);
      return;
    }
    setError('');
    onStart(n, Math.max(1, Math.min(20, Math.floor(Number(perPage)) || QUESTIONS_PER_PAGE_DEFAULT)));
  };

  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="app-header">
        <h1 className="app-title">Geografija kviz</h1>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Preklopi temo">
          {theme === 'light' ? <><Moon size={18} aria-hidden /> Temna tema</> : <><Sun size={18} aria-hidden /> Svetla tema</>}
        </button>
      </header>

      <div className="landing-card">
        <h2>Vnesi število vprašanj</h2>
        <p className="landing-desc">Izberi, koliko vprašanj želiš in koliko jih prikaže na eni strani.</p>

        <form onSubmit={handleSubmit} className="landing-form">
          <div className="landing-row">
            <label htmlFor="num-questions">
              Število vprašanj
            </label>
            <input
              id="num-questions"
              type="number"
              min={minQuestions}
              max={maxQuestions}
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              aria-describedby={error ? 'num-error' : undefined}
            />
            <span className="landing-hint">(med {minQuestions} in {maxQuestions})</span>
          </div>
          <div className="landing-row">
            <label htmlFor="per-page">
              Vprašanj na stran
            </label>
            <input
              id="per-page"
              type="number"
              min={1}
              max={20}
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
            />
          </div>
          {error && (
            <p id="num-error" className="landing-error" role="alert">
              {error}
            </p>
          )}
          <motion.button
            type="submit"
            className="landing-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play size={20} aria-hidden /> Začni kviz
          </motion.button>
        </form>

        <div className="landing-extra">
          <button type="button" className="landing-secondary" onClick={onFlashcards}>
            <Layers size={20} aria-hidden /> Flash kartice
          </button>
          <button type="button" className="landing-secondary" onClick={onNotes}>
            <FileText size={20} aria-hidden /> Vsi zapiski
          </button>
        </div>
      </div>
    </motion.div>
  );
}
