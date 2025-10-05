export interface Flashcard {
  id: string;
  topicId: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface CodeTemplate {
  id: string;
  topicId: string;
  title: string;
  description: string;
  python: string;
  javascript: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  flashcards: Flashcard[];
  codeTemplates: CodeTemplate[];
}

export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface UserProgress {
  completedFlashcards: string[];
  quizScores: { [date: string]: number };
  lastQuizDate: string | null;
  studyStreak: number;
}

export type RootStackParamList = {
  Home: undefined;
  TopicDetail: { topic: Topic };
  Flashcards: { topic: Topic };
  CodeTemplates: { topic: Topic };
  DailyQuiz: undefined;
  Progress: undefined;
};
