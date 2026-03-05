import { motion } from 'framer-motion';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NOTES } from '../data/notes';

function formatNoteContent(content) {
  return content.split('\n').map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <br key={i} />;
    if (trimmed.startsWith('•')) return <p key={i} className="notes-bullet">{trimmed.slice(1).trim()}</p>;
    if (/^\d+\./.test(trimmed)) return <p key={i} className="notes-numbered">{trimmed}</p>;
    if (trimmed.endsWith(':')) return <h4 key={i} className="notes-subtitle">{trimmed}</h4>;
    return <p key={i} className="notes-para">{trimmed}</p>;
  });
}

export function NotesScreen({ onBack }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="notes-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="app-header">
        <h1 className="app-title">Vsi zapiski</h1>
        <div className="header-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Preklopi temo">
            {theme === 'light' ? <><Moon size={18} aria-hidden /> Temna tema</> : <><Sun size={18} aria-hidden /> Svetla tema</>}
          </button>
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeft size={18} aria-hidden /> Nazaj
          </button>
        </div>
      </header>

      <div className="notes-content">
        {NOTES.map((note) => (
          <section key={note.id} className="notes-section">
            <h2 className="notes-section-title">{note.title}</h2>
            <div className="notes-section-body">{formatNoteContent(note.content)}</div>
          </section>
        ))}
      </div>
    </motion.div>
  );
}
