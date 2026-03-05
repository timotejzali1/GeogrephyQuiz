import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function QuestionCard({ question, selectedIndex, onSelect, disabled }) {
  const isCorrect = selectedIndex === question.correctIndex;
  const hasAnswered = selectedIndex !== undefined && selectedIndex !== null;
  const feedbackText = hasAnswered
    ? isCorrect
      ? 'Pravilno.'
      : 'Napačno.'
    : '';

  return (
    <motion.article
      className="question-card"
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-labelledby={`q-${question.id}`}
    >
      <div
        id={`feedback-${question.id}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {feedbackText}
      </div>
      <h3 id={`q-${question.id}`} className="question-text">{question.question}</h3>
      <ul className="options-list" role="list">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const showCorrect = hasAnswered && index === question.correctIndex;
          const showWrong = hasAnswered && isSelected && !isCorrect;
          const state = showCorrect ? 'correct' : showWrong ? 'wrong' : isSelected ? 'selected' : '';

          return (
            <li key={index}>
              <motion.button
                type="button"
                className={`option-btn ${state}`}
                onClick={() => !disabled && onSelect(index)}
                disabled={disabled}
                whileHover={!disabled ? { scale: 1.02 } : {}}
                whileTap={!disabled ? { scale: 0.98 } : {}}
                initial={false}
                animate={
                  showCorrect
                    ? { scale: [1, 1.05, 1], backgroundColor: 'var(--correct)', color: 'white' }
                    : showWrong
                    ? { scale: [1, 1.02, 1], x: [0, -4, 4, -2, 2, 0], backgroundColor: 'var(--wrong)', color: 'white' }
                    : {}
                }
                transition={
                  showCorrect
                    ? { duration: 0.4, backgroundColor: { duration: 0.2 } }
                    : showWrong
                    ? { x: { duration: 0.4 }, backgroundColor: { duration: 0.2 } }
                    : {}
                }
                role="radio"
                aria-checked={isSelected}
                aria-label={option}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                <AnimatePresence>
                  {showCorrect && (
                    <motion.span
                      className="option-feedback"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check size={20} strokeWidth={2.5} aria-hidden />
                    </motion.span>
                  )}
                  {showWrong && (
                    <motion.span
                      className="option-feedback wrong"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <X size={20} strokeWidth={2.5} aria-hidden />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
}
