import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Topic } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';

interface Props {
  topic: Topic;
  onPress: () => void;
}

export const TopicCard: React.FC<Props> = ({ topic, onPress }) => {
  const { colors } = useTheme();
  const { progress } = useProgress();

  const completedFlashcards = topic.flashcards.filter((fc) =>
    progress.completedFlashcards.includes(fc.id)
  ).length;

  const totalFlashcards = topic.flashcards.length;
  const progressPercentage = totalFlashcards > 0 
    ? (completedFlashcards / totalFlashcards) * 100 
    : 0;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Text style={styles.icon}>{topic.icon}</Text>
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: colors.text }]}>{topic.name}</Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {topic.description}
          </Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: colors.primary }]}>
            {topic.flashcards.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
            Flashcards
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: colors.secondary }]}>
            {topic.codeTemplates.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
            Templates
          </Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                backgroundColor: colors.primary,
                width: `${progressPercentage}%`,
              },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color: colors.textSecondary }]}>
          {completedFlashcards}/{totalFlashcards} completed
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 40,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'right',
  },
});
