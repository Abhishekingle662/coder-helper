import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useTheme } from '../context/ThemeContext';

type TopicDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'TopicDetail'>;
type TopicDetailScreenRouteProp = RouteProp<RootStackParamList, 'TopicDetail'>;

interface Props {
  navigation: TopicDetailScreenNavigationProp;
  route: TopicDetailScreenRouteProp;
}

export const TopicDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { topic } = route.params;
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { backgroundColor: colors.surface }]}>
          <Text style={styles.icon}>{topic.icon}</Text>
          <Text style={[styles.title, { color: colors.text }]}>{topic.name}</Text>
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {topic.description}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={[styles.section, { backgroundColor: colors.surface }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              📚 Flashcards
            </Text>
            <Text style={[styles.sectionDescription, { color: colors.textSecondary }]}>
              Study {topic.flashcards.length} flashcards covering key concepts
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.primary }]}
              onPress={() => navigation.navigate('Flashcards', { topic })}
            >
              <Text style={styles.buttonText}>Start Learning</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.section, { backgroundColor: colors.surface }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              💻 Code Templates
            </Text>
            <Text style={[styles.sectionDescription, { color: colors.textSecondary }]}>
              {topic.codeTemplates.length} code examples in Python and JavaScript
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.secondary }]}
              onPress={() => navigation.navigate('CodeTemplates', { topic })}
            >
              <Text style={styles.buttonText}>View Code</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.infoBox, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>What you'll learn:</Text>
            <View style={styles.bulletList}>
              <Text style={[styles.bullet, { color: colors.text }]}>
                • Core concepts and definitions
              </Text>
              <Text style={[styles.bullet, { color: colors.text }]}>
                • Time and space complexity analysis
              </Text>
              <Text style={[styles.bullet, { color: colors.text }]}>
                • Practical code implementations
              </Text>
              <Text style={[styles.bullet, { color: colors.text }]}>
                • Common patterns and techniques
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  icon: {
    fontSize: 60,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  content: {
    padding: 16,
  },
  section: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoBox: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bulletList: {
    gap: 8,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 20,
  },
});
