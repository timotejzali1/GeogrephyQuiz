import { useState, useCallback } from 'react';
import { QUESTIONS, QUESTIONS_PER_PAGE_DEFAULT, MAX_QUESTIONS, MIN_QUESTIONS } from '../data/questions';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Shuffle options and update correctIndex so the right answer isn't always in the same position. */
function shuffleQuestionOptions(q) {
  const options = [...q.options];
  const correctAnswer = options[q.correctIndex];
  shuffle(options);
  const newCorrectIndex = options.indexOf(correctAnswer);
  return { ...q, options, correctIndex: newCorrectIndex };
}

export function useQuizState() {
  const [screen, setScreen] = useState('landing'); // 'landing' | 'quiz' | 'result' | 'flashcards' | 'notes'
  const [totalWanted, setTotalWanted] = useState(10);
  const [questionsPerPage, setQuestionsPerPage] = useState(QUESTIONS_PER_PAGE_DEFAULT);
  const [selectedQuestions, setSelectedQuestions] = useState([]); // array of question objects
  const [pages, setPages] = useState([]); // array of arrays (each page = array of questions)
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
  const [submitted, setSubmitted] = useState(false);

  const startQuiz = useCallback((numQuestions, perPage = QUESTIONS_PER_PAGE_DEFAULT) => {
    const n = Math.max(MIN_QUESTIONS, Math.min(MAX_QUESTIONS, Math.floor(Number(numQuestions)) || MIN_QUESTIONS));
    const per = Math.max(1, Math.min(20, Math.floor(Number(perPage)) || QUESTIONS_PER_PAGE_DEFAULT));
    const selected = shuffle(QUESTIONS).slice(0, n).map(shuffleQuestionOptions);
    const pgs = [];
    for (let i = 0; i < selected.length; i += per) {
      pgs.push(selected.slice(i, i + per));
    }
    setTotalWanted(n);
    setQuestionsPerPage(per);
    setSelectedQuestions(selected);
    setPages(pgs);
    setCurrentPageIndex(0);
    setAnswers({});
    setSubmitted(false);
    setScreen('quiz');
  }, []);

  const setAnswer = useCallback((questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const goToPage = useCallback((index) => {
    if (index >= 0 && index < pages.length) setCurrentPageIndex(index);
  }, [pages.length]);

  const finishQuiz = useCallback(() => {
    setSubmitted(true);
    setScreen('result');
  }, []);

  const goToLanding = useCallback(() => {
    setScreen('landing');
  }, []);

  const goToFlashcards = useCallback(() => {
    setScreen('flashcards');
  }, []);

  const goToNotes = useCallback(() => {
    setScreen('notes');
  }, []);

  // Score: count correct answers
  const score = selectedQuestions.reduce((acc, q) => {
    const userChoice = answers[q.id];
    if (userChoice === undefined) return acc;
    return acc + (userChoice === q.correctIndex ? 1 : 0);
  }, 0);
  const total = selectedQuestions.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // Result tier for globe (1–5)
  const resultTier = (() => {
    if (percentage <= 20) return 1;
    if (percentage <= 40) return 2;
    if (percentage <= 60) return 3;
    if (percentage <= 80) return 4;
    return 5;
  })();

  const currentPageQuestions = pages[currentPageIndex] || [];
  const isLastPage = currentPageIndex === pages.length - 1;
  const isFirstPage = currentPageIndex === 0;

  return {
    screen,
    totalWanted,
    questionsPerPage,
    selectedQuestions,
    pages,
    currentPageIndex,
    currentPageQuestions,
    answers,
    setAnswer,
    goToPage,
    startQuiz,
    finishQuiz,
    goToLanding,
    goToFlashcards,
    goToNotes,
    isLastPage,
    isFirstPage,
    score,
    total,
    percentage,
    resultTier,
    submitted,
    minQuestions: MIN_QUESTIONS,
    maxQuestions: MAX_QUESTIONS,
  };
}
