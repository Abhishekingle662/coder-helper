import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { ProgressProvider } from './src/context/ProgressContext';
import { RootStackParamList } from './src/types';
import { HomeScreen } from './src/screens/HomeScreen';
import { TopicDetailScreen } from './src/screens/TopicDetailScreen';
import { FlashcardsScreen } from './src/screens/FlashcardsScreen';
import { CodeTemplatesScreen } from './src/screens/CodeTemplatesScreen';
import { DailyQuizScreen } from './src/screens/DailyQuizScreen';
import { ProgressScreen } from './src/screens/ProgressScreen';
import AnimatedSplash from './src/components/AnimatedSplash';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { colors, isDark } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.surface,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopicDetail"
          component={TopicDetailScreen}
          options={{ title: 'Topic Details' }}
        />
        <Stack.Screen
          name="Flashcards"
          component={FlashcardsScreen}
          options={{ title: 'Flashcards' }}
        />
        <Stack.Screen
          name="CodeTemplates"
          component={CodeTemplatesScreen}
          options={{ title: 'Code Templates' }}
        />
        <Stack.Screen
          name="DailyQuiz"
          component={DailyQuizScreen}
          options={{ title: 'Daily Quiz' }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{ title: 'Progress' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [appReady, setAppReady] = useState(false);

  if (!appReady) {
    return <AnimatedSplash onFinish={() => setAppReady(true)} />;
  }

  return (
    <ThemeProvider>
      <ProgressProvider>
        <AppNavigator />
      </ProgressProvider>
    </ThemeProvider>
  );
}
