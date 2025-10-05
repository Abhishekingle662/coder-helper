import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress } from '../types';

interface ProgressContextType {
  progress: UserProgress;
  markFlashcardComplete: (flashcardId: string) => Promise<void>;
  saveQuizScore: (score: number) => Promise<void>;
  resetProgress: () => Promise<void>;
  isFlashcardCompleted: (flashcardId: string) => boolean;
}

const defaultProgress: UserProgress = {
  completedFlashcards: [],
  quizScores: {},
  lastQuizDate: null,
  studyStreak: 0,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

const STORAGE_KEY = '@algoflash_progress';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setProgress(JSON.parse(data));
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  };

  const saveProgress = async (newProgress: UserProgress) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

  const markFlashcardComplete = async (flashcardId: string) => {
    if (!progress.completedFlashcards.includes(flashcardId)) {
      const newProgress = {
        ...progress,
        completedFlashcards: [...progress.completedFlashcards, flashcardId],
      };
      await saveProgress(newProgress);
    }
  };

  const saveQuizScore = async (score: number) => {
    const today = new Date().toISOString().split('T')[0];
    const lastQuizDate = progress.lastQuizDate;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    let newStreak = progress.studyStreak;
    if (lastQuizDate === yesterday) {
      newStreak += 1;
    } else if (lastQuizDate !== today) {
      newStreak = 1;
    }

    const newProgress = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [today]: score,
      },
      lastQuizDate: today,
      studyStreak: newStreak,
    };
    await saveProgress(newProgress);
  };

  const resetProgress = async () => {
    await saveProgress(defaultProgress);
  };

  const isFlashcardCompleted = (flashcardId: string): boolean => {
    return progress.completedFlashcards.includes(flashcardId);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markFlashcardComplete,
        saveQuizScore,
        resetProgress,
        isFlashcardCompleted,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
