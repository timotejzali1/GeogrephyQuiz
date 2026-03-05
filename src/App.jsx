import { ThemeProvider } from './context/ThemeContext';
import { useQuizState } from './hooks/useQuizState';
import { Landing } from './components/Landing';
import { QuizPage } from './components/QuizPage';
import { ResultScreen } from './components/ResultScreen';
import './App.css';

function AppContent() {
  const quiz = useQuizState();

  return (
    <div className="app-content">
      {quiz.screen === 'landing' && (
        <Landing
          onStart={quiz.startQuiz}
          minQuestions={quiz.minQuestions}
          maxQuestions={quiz.maxQuestions}
        />
      )}
      {quiz.screen === 'quiz' && (
        <QuizPage
          questions={quiz.currentPageQuestions}
          answers={quiz.answers}
          setAnswer={quiz.setAnswer}
          currentPageIndex={quiz.currentPageIndex}
          totalPages={quiz.pages.length}
          goToPage={quiz.goToPage}
          finishQuiz={quiz.finishQuiz}
          isFirstPage={quiz.isFirstPage}
          isLastPage={quiz.isLastPage}
        />
      )}
      {quiz.screen === 'result' && (
        <ResultScreen
          score={quiz.score}
          total={quiz.total}
          percentage={quiz.percentage}
          resultTier={quiz.resultTier}
          onPlayAgain={quiz.goToLanding}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
