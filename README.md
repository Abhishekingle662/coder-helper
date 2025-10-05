# AlgoFlash 🚀

A React Native + Expo mobile app that teaches coding concepts through interactive flashcards and code templates.

## 📱 Features

### Core Features
- **📚 Topic Browser**: Explore 8 comprehensive coding topics
  - Time & Space Complexity
  - Two Pointer Pattern
  - Sliding Window
  - Arrays
  - Strings
  - Trees
  - Graphs
  - Dynamic Programming

- **🔄 Interactive Flashcards**: 
  - Flip animation to reveal answers
  - Difficulty levels (Easy, Medium, Hard)
  - Progress tracking with completion indicators
  - Study cards at your own pace

- **💻 Code Templates**: 
  - Python and JavaScript implementations
  - Real-world examples and patterns
  - Syntax highlighting
  - Copy-friendly code snippets

- **📝 Daily Quiz**: 
  - 10 curated questions daily
  - Instant feedback on answers
  - Score tracking and history
  - Study streak counter

- **📊 Progress Tracking**:
  - Overall completion percentage
  - Topic-wise progress breakdown
  - Quiz score history
  - Study streak visualization
  - Offline storage with AsyncStorage

- **🎨 Themes**:
  - Light mode
  - Dark mode
  - Auto (system preference)
  - Clean, modern UI

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (optional, will be installed automatically)
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishekingle662/coder-helper.git
cd coder-helper
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - **iOS**: Press `i` or scan QR code with Expo Go app
   - **Android**: Press `a` or scan QR code with Expo Go app
   - **Web**: Press `w` (limited functionality)

## 📖 Usage Guide

### Studying Flashcards
1. Navigate to a topic from the home screen
2. Tap "Start Learning" to begin flashcards
3. Tap on a card to flip and see the answer
4. Use navigation buttons to move between cards
5. Completed cards are marked with a checkmark

### Viewing Code Templates
1. Select a topic from the home screen
2. Tap "View Code" to see templates
3. Toggle between Python and JavaScript
4. Scroll through multiple examples per topic

### Taking Daily Quiz
1. Tap "Daily Quiz" from the home screen
2. Answer 10 multiple-choice questions
3. Get instant feedback on each answer
4. View your score and maintain your streak
5. Only one quiz per day counts toward your streak

### Tracking Progress
1. Tap "Progress" from the home screen
2. View overall statistics and completion
3. Check topic-wise progress breakdown
4. Review quiz score history
5. Change theme or reset progress in settings

## 🏗️ Project Structure

```
coder-helper/
├── App.tsx                 # Main app component
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── assets/                # Images and icons
└── src/
    ├── components/        # Reusable components
    │   ├── FlashcardComponent.tsx
    │   └── TopicCard.tsx
    ├── context/          # React Context providers
    │   ├── ThemeContext.tsx
    │   └── ProgressContext.tsx
    ├── data/             # Static data
    │   └── topics.ts
    ├── screens/          # Screen components
    │   ├── HomeScreen.tsx
    │   ├── TopicDetailScreen.tsx
    │   ├── FlashcardsScreen.tsx
    │   ├── CodeTemplatesScreen.tsx
    │   ├── DailyQuizScreen.tsx
    │   └── ProgressScreen.tsx
    ├── types/            # TypeScript types
    │   └── index.ts
    └── utils/            # Utility functions
```

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **Storage**: AsyncStorage for offline data persistence
- **State Management**: React Context API
- **Styling**: React Native StyleSheet API

## 📚 Topics Covered

### 1. Time & Space Complexity
- Big O notation fundamentals
- Complexity analysis examples
- Common time complexities

### 2. Two Pointer Pattern
- Opposite direction pointers
- Fast and slow pointers
- Array manipulation techniques

### 3. Sliding Window
- Fixed window size
- Variable window size
- Substring problems

### 4. Arrays
- Array operations
- In-place modifications
- Classic algorithms (Kadane's, etc.)

### 5. Strings
- String manipulation
- Pattern matching
- Palindromes and anagrams

### 6. Trees
- Binary trees
- Tree traversals (DFS, BFS)
- Binary Search Trees

### 7. Graphs
- Graph representations
- DFS and BFS traversal
- Shortest path algorithms

### 8. Dynamic Programming
- Memoization
- Tabulation
- Classic DP problems

## 🎯 Future Enhancements

- [ ] Social features (share progress, compete with friends)
- [ ] More topics (Heaps, Tries, Backtracking, etc.)
- [ ] Spaced repetition algorithm
- [ ] Custom flashcard creation
- [ ] Code playground for testing snippets
- [ ] Video explanations
- [ ] Community contributions
- [ ] Multiple quiz difficulty levels

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created with ❤️ for coding enthusiasts

## 🙏 Acknowledgments

- Inspired by coding interview preparation needs
- Built with Expo and React Native
- Icons from Unicode emoji set
