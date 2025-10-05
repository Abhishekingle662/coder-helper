import React from 'react';
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
import { topics } from '../data/topics';

export const ProgressScreen: React.FC = () => {
  const { colors, theme, setTheme } = useTheme();
  const { progress, resetProgress } = useProgress();

  const totalFlashcards = topics.reduce((sum, topic) => sum + topic.flashcards.length, 0);
  const completedFlashcards = progress.completedFlashcards.length;
  const completionPercentage = totalFlashcards > 0 
    ? Math.round((completedFlashcards / totalFlashcards) * 100) 
    : 0;

  const quizDates = Object.keys(progress.quizScores).sort().reverse();
  const averageQuizScore = quizDates.length > 0
    ? Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / quizDates.length
    : 0;

  const handleResetProgress = () => {
    Alert.alert(
      'Reset Progress',
      'Are you sure you want to reset all your progress? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => resetProgress(),
        },
      ]
    );
  };

  const handleThemeChange = () => {
    const themes: Array<'light' | 'dark' | 'auto'> = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return '☀️ Light';
      case 'dark':
        return '🌙 Dark';
      case 'auto':
        return '🔄 Auto';
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.title, { color: colors.text }]}>Your Progress</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Track your learning journey
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.statsCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            📊 Overall Statistics
          </Text>
          
          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Flashcards Completed
            </Text>
            <Text style={[styles.statValue, { color: colors.primary }]}>
              {completedFlashcards}/{totalFlashcards}
            </Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
              <View
                style={[
                  styles.progressFill,
                  {
                    backgroundColor: colors.primary,
                    width: `${completionPercentage}%`,
                  },
                ]}
              />
            </View>
            <Text style={[styles.percentageText, { color: colors.textSecondary }]}>
              {completionPercentage}%
            </Text>
          </View>

          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Study Streak
            </Text>
            <Text style={[styles.statValue, { color: colors.secondary }]}>
              {progress.studyStreak} days 🔥
            </Text>
          </View>

          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Quizzes Taken
            </Text>
            <Text style={[styles.statValue, { color: colors.text }]}>
              {quizDates.length}
            </Text>
          </View>

          {quizDates.length > 0 && (
            <View style={styles.statRow}>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                Average Quiz Score
              </Text>
              <Text style={[styles.statValue, { color: colors.success }]}>
                {averageQuizScore.toFixed(1)}/10
              </Text>
            </View>
          )}
        </View>

        {quizDates.length > 0 && (
          <View style={[styles.statsCard, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              📝 Recent Quiz Scores
            </Text>
            {quizDates.slice(0, 5).map((date) => (
              <View key={date} style={styles.quizRow}>
                <Text style={[styles.quizDate, { color: colors.textSecondary }]}>
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </Text>
                <View style={styles.quizScore}>
                  <Text style={[styles.scoreNumber, { color: colors.primary }]}>
                    {progress.quizScores[date]}/10
                  </Text>
                  <View
                    style={[
                      styles.scoreBar,
                      { backgroundColor: colors.border },
                    ]}
                  >
                    <View
                      style={[
                        styles.scoreBarFill,
                        {
                          backgroundColor: colors.primary,
                          width: `${(progress.quizScores[date] / 10) * 100}%`,
                        },
                      ]}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={[styles.statsCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            📚 Progress by Topic
          </Text>
          {topics.map((topic) => {
            const completed = topic.flashcards.filter((fc) =>
              progress.completedFlashcards.includes(fc.id)
            ).length;
            const total = topic.flashcards.length;
            const percentage = total > 0 ? (completed / total) * 100 : 0;

            return (
              <View key={topic.id} style={styles.topicProgress}>
                <View style={styles.topicHeader}>
                  <Text style={[styles.topicName, { color: colors.text }]}>
                    {topic.icon} {topic.name}
                  </Text>
                  <Text style={[styles.topicStats, { color: colors.textSecondary }]}>
                    {completed}/{total}
                  </Text>
                </View>
                <View style={[styles.topicBar, { backgroundColor: colors.border }]}>
                  <View
                    style={[
                      styles.topicBarFill,
                      {
                        backgroundColor: colors.secondary,
                        width: `${percentage}%`,
                      },
                    ]}
                  />
                </View>
              </View>
            );
          })}
        </View>

        <View style={[styles.statsCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>⚙️ Settings</Text>
          
          <TouchableOpacity
            style={[styles.settingButton, { borderColor: colors.border }]}
            onPress={handleThemeChange}
          >
            <Text style={[styles.settingLabel, { color: colors.text }]}>
              Theme
            </Text>
            <Text style={[styles.settingValue, { color: colors.primary }]}>
              {getThemeLabel()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingButton, styles.dangerButton, { borderColor: colors.error }]}
            onPress={handleResetProgress}
          >
            <Text style={[styles.settingLabel, { color: colors.error }]}>
              Reset All Progress
            </Text>
            <Text style={[styles.settingValue, { color: colors.error }]}>⚠️</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
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
  subtitle: {
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  statsCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    marginVertical: 12,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
  },
  percentageText: {
    fontSize: 12,
    textAlign: 'right',
  },
  quizRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  quizDate: {
    fontSize: 14,
    flex: 1,
  },
  quizScore: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scoreNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    minWidth: 40,
    textAlign: 'right',
  },
  scoreBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  scoreBarFill: {
    height: '100%',
  },
  topicProgress: {
    marginBottom: 16,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicName: {
    fontSize: 14,
    fontWeight: '600',
  },
  topicStats: {
    fontSize: 12,
  },
  topicBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  topicBarFill: {
    height: '100%',
  },
  settingButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  settingLabel: {
    fontSize: 16,
  },
  settingValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dangerButton: {
    marginTop: 8,
  },
});
