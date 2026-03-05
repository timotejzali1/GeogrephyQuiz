import { motion } from 'framer-motion';
import { Moon, Sun, RotateCcw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Globe } from './Globe';

export function ResultScreen({ score, total, percentage, resultTier, onPlayAgain }) {
  const { theme, toggleTheme } = useTheme();

  const message =
    resultTier >= 5
      ? 'Odlično! Zemlja je ponosna nate.'
      : resultTier >= 4
      ? 'Zelo dobro! Skoraj popolno.'
      : resultTier >= 3
      ? 'V redu. Še malo vaje.'
      : resultTier >= 2
      ? 'Poskusi še enkrat.'
      : 'Beri snov in poskusi znova.';

  return (
    <motion.div
      className="result-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="app-header">
        <h1 className="app-title">Geografija kviz</h1>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Preklopi temo">
          {theme === 'light' ? <><Moon size={18} aria-hidden /> Temna tema</> : <><Sun size={18} aria-hidden /> Svetla tema</>}
        </button>
      </header>

      <motion.div
        className="result-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h2>Rezultat</h2>
        <p className="result-score">
          {score} / {total} pravilnih ({percentage} %)
        </p>
        <p className="result-message">{message}</p>

        <Globe resultTier={resultTier} />

        <motion.button
          type="button"
          className="result-again"
          onClick={onPlayAgain}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <RotateCcw size={20} aria-hidden /> Igraj znova
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
