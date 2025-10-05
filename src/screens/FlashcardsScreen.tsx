import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { FlashcardComponent } from '../components/FlashcardComponent';
import { useTheme } from '../context/ThemeContext';

type FlashcardsScreenRouteProp = RouteProp<RootStackParamList, 'Flashcards'>;

interface Props {
  route: FlashcardsScreenRouteProp;
}

export const FlashcardsScreen: React.FC<Props> = ({ route }) => {
  const { topic } = route.params;
  const { colors } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < topic.flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.topicName, { color: colors.text }]}>
          {topic.icon} {topic.name}
        </Text>
        <Text style={[styles.counter, { color: colors.textSecondary }]}>
          {currentIndex + 1} / {topic.flashcards.length}
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={[topic.flashcards[currentIndex]]}
          renderItem={({ item }) => <FlashcardComponent flashcard={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity
          style={[
            styles.navButton,
            {
              backgroundColor: currentIndex > 0 ? colors.primary : colors.border,
            },
          ]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text
            style={[
              styles.navButtonText,
              { color: currentIndex > 0 ? '#ffffff' : colors.textSecondary },
            ]}
          >
            ← Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            {
              backgroundColor:
                currentIndex < topic.flashcards.length - 1
                  ? colors.primary
                  : colors.border,
            },
          ]}
          onPress={handleNext}
          disabled={currentIndex === topic.flashcards.length - 1}
        >
          <Text
            style={[
              styles.navButtonText,
              {
                color:
                  currentIndex < topic.flashcards.length - 1
                    ? '#ffffff'
                    : colors.textSecondary,
              },
            ]}
          >
            Next →
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressIndicator}>
        {topic.flashcards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentIndex ? colors.primary : colors.border,
                width: index === currentIndex ? 8 : 6,
                height: index === currentIndex ? 8 : 6,
              },
            ]}
          />
        ))}
      </View>
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
  topicName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  counter: {
    fontSize: 14,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  navButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    gap: 6,
  },
  dot: {
    borderRadius: 4,
  },
});
