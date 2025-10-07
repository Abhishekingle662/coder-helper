import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Linking,
} from 'react-native';
import { Flashcard as FlashcardType } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';

interface Props {
  flashcard: FlashcardType;
}

const { width } = Dimensions.get('window');

export const FlashcardComponent: React.FC<Props> = ({ flashcard }) => {
  const { colors } = useTheme();
  const { markFlashcardComplete, isFlashcardCompleted } = useProgress();
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));

  const flipCard = () => {
    if (!isFlipped && !isFlashcardCompleted(flashcard.id)) {
      markFlashcardComplete(flashcard.id);
    }

    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();

    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const getDifficultyColor = () => {
    switch (flashcard.difficulty) {
      case 'easy':
        return colors.success;
      case 'medium':
        return colors.warning;
      case 'hard':
        return colors.error;
      default:
        return colors.primary;
    }
  };

  const isCompleted = isFlashcardCompleted(flashcard.id);
  const handleUrlPress = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  const renderAnswerLines = () => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const lines = flashcard.answer.split('\n');

    return lines.map((line, index) => {
      const matches = [...line.matchAll(urlRegex)];

      if (matches.length === 0) {
        return (
          <Text
            key={index}
            style={[
              styles.content,
              { color: colors.text },
              index !== lines.length - 1 ? styles.answerLineSpacing : null,
            ]}
          >
            {line}
          </Text>
        );
      }

      const nodes: React.ReactNode[] = [];
      let lastIndex = 0;

      matches.forEach((match, matchIndex) => {
        const start = match.index ?? 0;
        const rawUrl = match[0];
        const sanitizedUrl = rawUrl.replace(/[),.]+$/, '');
        const trailing = rawUrl.slice(sanitizedUrl.length);

        if (start > lastIndex) {
          nodes.push(line.substring(lastIndex, start));
        }

        nodes.push(
          <Text
            key={`url-${index}-${matchIndex}`}
            style={[styles.link, { color: colors.primary }]}
            onPress={() => handleUrlPress(sanitizedUrl)}
          >
            {sanitizedUrl}
          </Text>
        );

        if (trailing) {
          nodes.push(trailing);
        }

        lastIndex = start + rawUrl.length;
      });

      if (lastIndex < line.length) {
        nodes.push(line.substring(lastIndex));
      }

      return (
        <Text
          key={index}
          style={[
            styles.content,
            { color: colors.text },
            index !== lines.length - 1 ? styles.answerLineSpacing : null,
          ]}
        >
          {nodes}
        </Text>
      );
    });
  };

  return (
    <TouchableOpacity
      onPress={flipCard}
      activeOpacity={0.9}
      style={[styles.container, { width: width - 40 }]}
    >
      <Animated.View
        style={[
          styles.card,
          { backgroundColor: colors.surface, borderColor: colors.border },
          frontAnimatedStyle,
          { backfaceVisibility: 'hidden' },
        ]}
      >
        <View style={[styles.badge, { backgroundColor: getDifficultyColor() }]}>
          <Text style={styles.badgeText}>{flashcard.difficulty}</Text>
        </View>
        {isCompleted && (
          <View style={[styles.completedBadge, { backgroundColor: colors.success }]}>
            <Text style={styles.completedText}>✓</Text>
          </View>
        )}
        <Text style={[styles.label, { color: colors.textSecondary }]}>Question</Text>
        <Text style={[styles.content, { color: colors.text }]}>{flashcard.question}</Text>
        <Text style={[styles.hint, { color: colors.textSecondary }]}>Tap to flip</Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.card,
          styles.cardBack,
          { backgroundColor: colors.surface, borderColor: colors.border },
          backAnimatedStyle,
        ]}
      >
        <View style={[styles.badge, { backgroundColor: getDifficultyColor() }]}>
          <Text style={styles.badgeText}>{flashcard.difficulty}</Text>
        </View>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Answer</Text>
        <View style={styles.answerLines}>{renderAnswerLines()}</View>
        <Text style={[styles.hint, { color: colors.textSecondary }]}>Tap to flip back</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    marginVertical: 10,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardBack: {
    backfaceVisibility: 'hidden',
  },
  badge: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  completedBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  content: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
  answerLines: {
    alignItems: 'center',
  },
  answerLineSpacing: {
    marginBottom: 8,
  },
  link: {
    textDecorationLine: 'underline',
  },
  hint: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
