import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useTheme } from '../context/ThemeContext';

type CodeTemplatesScreenRouteProp = RouteProp<RootStackParamList, 'CodeTemplates'>;

interface Props {
  route: CodeTemplatesScreenRouteProp;
}

export const CodeTemplatesScreen: React.FC<Props> = ({ route }) => {
  const { topic } = route.params;
  const { colors } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'javascript'>('python');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <Text style={[styles.topicName, { color: colors.text }]}>
          {topic.icon} {topic.name}
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Code Templates
        </Text>
      </View>

      <View style={styles.languageSelector}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            {
              backgroundColor:
                selectedLanguage === 'python' ? colors.primary : colors.surface,
              borderColor: colors.border,
            },
          ]}
          onPress={() => setSelectedLanguage('python')}
        >
          <Text
            style={[
              styles.languageButtonText,
              {
                color: selectedLanguage === 'python' ? '#ffffff' : colors.text,
              },
            ]}
          >
            🐍 Python
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.languageButton,
            {
              backgroundColor:
                selectedLanguage === 'javascript' ? colors.primary : colors.surface,
              borderColor: colors.border,
            },
          ]}
          onPress={() => setSelectedLanguage('javascript')}
        >
          <Text
            style={[
              styles.languageButtonText,
              {
                color: selectedLanguage === 'javascript' ? '#ffffff' : colors.text,
              },
            ]}
          >
            ⚡ JavaScript
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {topic.codeTemplates.map((template) => (
          <View
            key={template.id}
            style={[
              styles.templateCard,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.templateTitle, { color: colors.text }]}>
              {template.title}
            </Text>
            <Text style={[styles.templateDescription, { color: colors.textSecondary }]}>
              {template.description}
            </Text>
            <View style={[styles.codeContainer, { backgroundColor: colors.background }]}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={[styles.code, { color: colors.text }]}>
                  {selectedLanguage === 'python' ? template.python : template.javascript}
                </Text>
              </ScrollView>
            </View>
          </View>
        ))}
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
  topicName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  languageSelector: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  languageButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  templateCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  templateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  templateDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  codeContainer: {
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 12,
    lineHeight: 18,
  },
});
