import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ChevronLeft, ChevronRight, Flag } from 'lucide-react';
import { QuestionCard } from './QuestionCard';
import { useTheme } from '../context/ThemeContext';

export function QuizPage({
  questions,
  answers,
  setAnswer,
  currentPageIndex,
  totalPages,
  goToPage,
  finishQuiz,
  isFirstPage,
  isLastPage,
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="quiz-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header className="app-header">
        <h1 className="app-title">Geografija kviz</h1>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Preklopi temo">
          {theme === 'light' ? <><Moon size={18} aria-hidden /> Temna tema</> : <><Sun size={18} aria-hidden /> Svetla tema</>}
        </button>
      </header>

      <div className="quiz-progress" role="status" aria-live="polite">
        Stran {currentPageIndex + 1} od {totalPages}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPageIndex}
          className="quiz-questions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              selectedIndex={answers[q.id]}
              onSelect={(index) => setAnswer(q.id, index)}
              disabled={answers[q.id] !== undefined}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <nav className="quiz-nav" aria-label="Navigacija kviza">
        <button
          type="button"
          onClick={() => goToPage(currentPageIndex - 1)}
          disabled={isFirstPage}
        >
          <ChevronLeft size={20} aria-hidden /> Prejšnja
        </button>
        {isLastPage ? (
          <motion.button
            type="button"
            className="quiz-submit"
            onClick={finishQuiz}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Flag size={20} aria-hidden /> Končaj in prikaži rezultat
          </motion.button>
        ) : (
          <button
            type="button"
            onClick={() => goToPage(currentPageIndex + 1)}
          >
            Naslednja <ChevronRight size={20} aria-hidden />
          </button>
        )}
      </nav>
    </motion.div>
  );
}
