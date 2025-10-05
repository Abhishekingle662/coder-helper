import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { quizQuestions } from '../data/topics';

export const DailyQuizScreen: React.FC = () => {
  const { colors } = useTheme();
  const { saveQuizScore, progress } = useProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(quizQuestions.length).fill(false)
  );

  const today = new Date().toISOString().split('T')[0];
  const alreadyCompleted = progress.lastQuizDate === today;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestionIndex]) return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnswered);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        const finalScore = isCorrect ? score + 1 : score;
        setQuizCompleted(true);
        saveQuizScore(finalScore);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
  };

  if (alreadyCompleted && !quizCompleted) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.completedContainer}>
          <Text style={styles.completedIcon}>✅</Text>
          <Text style={[styles.completedTitle, { color: colors.text }]}>
            Already Completed Today!
          </Text>
          <Text style={[styles.completedText, { color: colors.textSecondary }]}>
            You've already taken today's quiz. Come back tomorrow!
          </Text>
          <Text style={[styles.scoreText, { color: colors.primary }]}>
            Today's Score: {progress.quizScores[today]}/{quizQuestions.length}
          </Text>
          <TouchableOpacity
            style={[styles.retakeButton, { backgroundColor: colors.primary }]}
            onPress={handleRestart}
          >
            <Text style={styles.retakeButtonText}>Practice Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <Text style={styles.completedIcon}>
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
          </Text>
          <Text style={[styles.completedTitle, { color: colors.text }]}>
            Quiz Complete!
          </Text>
          <Text style={[styles.scoreDisplay, { color: colors.primary }]}>
            {score}/{quizQuestions.length}
          </Text>
          <Text style={[styles.percentageText, { color: colors.textSecondary }]}>
            {percentage}% Correct
          </Text>
          
          <View style={[styles.feedbackBox, { backgroundColor: colors.surface }]}>
            <Text style={[styles.feedbackText, { color: colors.text }]}>
              {percentage >= 80
                ? '🌟 Excellent work! You have a strong grasp of these concepts.'
                : percentage >= 60
                ? '💪 Good job! Keep practicing to improve further.'
                : '📖 Keep studying! Review the topics and try again.'}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleRestart}
          >
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.title, { color: colors.text }]}>Daily Quiz</Text>
        <Text style={[styles.questionCounter, { color: colors.textSecondary }]}>
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: colors.primary,
              width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
            },
          ]}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.questionCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.question, { color: colors.text }]}>
            {currentQuestion.question}
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showResult = answeredQuestions[currentQuestionIndex];

            let buttonStyle = { backgroundColor: colors.surface, borderColor: colors.border };
            let textStyle = { color: colors.text };

            if (showResult) {
              if (isCorrect) {
                buttonStyle = { backgroundColor: colors.success, borderColor: colors.success };
                textStyle = { color: '#ffffff' };
              } else if (isSelected) {
                buttonStyle = { backgroundColor: colors.error, borderColor: colors.error };
                textStyle = { color: '#ffffff' };
              }
            } else if (isSelected) {
              buttonStyle = { backgroundColor: colors.primary, borderColor: colors.primary };
              textStyle = { color: '#ffffff' };
            }

            return (
              <TouchableOpacity
                key={index}
                style={[styles.optionButton, buttonStyle]}
                onPress={() => handleAnswerSelect(index)}
                disabled={answeredQuestions[currentQuestionIndex]}
              >
                <Text style={[styles.optionText, textStyle]}>
                  {String.fromCharCode(65 + index)}. {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.scoreContainer}>
          <Text style={[styles.currentScore, { color: colors.textSecondary }]}>
            Score: {score}/{currentQuestionIndex + (answeredQuestions[currentQuestionIndex] ? 1 : 0)}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  questionCounter: {
    fontSize: 14,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#e0e0e0',
  },
  progressBar: {
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  questionCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  question: {
    fontSize: 18,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  scoreContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  currentScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  resultsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  completedIcon: {
    fontSize: 80,
    marginBottom: 24,
  },
  completedTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  completedText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  scoreDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  percentageText: {
    fontSize: 20,
    marginBottom: 32,
  },
  feedbackBox: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
    width: '100%',
  },
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  retakeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  retakeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
