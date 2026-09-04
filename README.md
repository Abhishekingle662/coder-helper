# AlgoFlash 🚀

A React Native + Expo mobile app that teaches coding concepts through interactive flashcards and code templates.

## 📚 Database Learning Roadmap (NEW)

Structured curriculum for learning **databases, SQL, and PostgreSQL** — from first principles through building real applications and large-scale system design.

- **[Start here →](docs/database-learning/README.md)**
- [Full roadmap (8 phases)](docs/database-learning/ROADMAP.md)
- [SQL examples](sql/examples/)
- [Project briefs](projects/)

## 📱 Features

### Core Features
- **📚 Topic Browser**: Explore 27 comprehensive coding topics
  
  **🧠 Coding Patterns** (12 topics):
  - Time & Space Complexity
  - Two Pointer Pattern
  - Sliding Window
  - Tortoise & Hare (Fast-Slow Pointers)
  - Two Pass Pattern
  - Bit Manipulation
  - Cyclic Sort
  - Hash Tables
  - Searching & Sorting
  - Stacks & Queues
  - Linked Lists
  - Recursion & Backtracking
  
  **📊 Data Structures** (4 topics):
  - Arrays
  - Strings
  - Trees
  - Graphs
  
  **🧮 Advanced Topics** (3 topics):
  - Dynamic Programming
  - Heaps
  - Distributed Systems
  
  **🏗️ System Design** (3 topics):
  - System Design Overview
  - Networking & API Design
  - Scalable Systems
  
  **💾 Databases** (1 topic):
  - Databases (SQL & NoSQL)
  
  **💬 Behavioral Interviews** (4 topics):
  - Behavioral Interview Overview
  - Behavioral Theory
  - Behavioral Tactics
  - Practice & Mock Interviews

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

### 🧠 Coding Patterns & Algorithms

#### 1. Time & Space Complexity
- Big O notation fundamentals
- Complexity analysis examples
- Common time complexities

#### 2. Two Pointer Pattern
- Opposite direction pointers
- Fast and slow pointers
- Array manipulation techniques

#### 3. Sliding Window
- Fixed window size
- Variable window size
- Substring problems

#### 4. Tortoise & Hare (Fast-Slow Pointers)
- Floyd's cycle detection
- Finding middle elements
- Cycle detection in linked lists

#### 5. Two Pass Pattern
- Iterating through data twice
- Product of array except self
- Gas station problems

#### 6. Bit Manipulation
- Bitwise operators (AND, OR, XOR, NOT)
- Common bit manipulation tricks
- Single number and missing number problems

#### 7. Cyclic Sort
- Sorting arrays with numbers in range [1, n]
- Finding missing and duplicate numbers
- In-place sorting with O(n) time

### 📊 Core Data Structures

#### 8. Hash Tables
- Hash maps and hash sets
- Two sum and anagram problems
- LRU cache implementation

#### 9. Searching & Sorting
- Binary search and variations
- QuickSort and MergeSort
- Search in rotated sorted array

#### 10. Stacks & Queues
- LIFO and FIFO operations
- Monotonic stack patterns
- Valid parentheses and daily temperatures

#### 11. Linked Lists
- Singly and doubly linked lists
- Reverse linked list
- Merge sorted lists and detect cycles

#### 12. Arrays
- Array operations
- In-place modifications
- Kadane's algorithm

#### 13. Strings
- String manipulation
- Pattern matching
- Palindromes and anagrams

#### 14. Trees
- Binary trees and BST
- Tree traversals (DFS, BFS)
- Lowest common ancestor

#### 15. Graphs
- Graph representations
- DFS and BFS traversal
- Dijkstra's and topological sort

#### 16. Heaps
- Min and max heaps
- Priority queues
- Kth largest element and median finder

#### 17. Dynamic Programming
- Memoization and tabulation
- Classic DP problems
- Fibonacci, LCS, knapsack

#### 18. Recursion & Backtracking
- Recursive problem solving
- N-Queens and permutations
- Combination sum and word search

### 🏗️ System Design & Architecture

#### 19. System Design Overview
- Scalability principles
- CAP theorem
- Load balancing and consistent hashing

#### 20. Networking & API Design
- RESTful APIs
- HTTP methods and status codes
- API versioning and authentication

#### 21. Scalable Systems
- Caching strategies (Redis, Memcached)
- CDN and content delivery
- Database sharding and replication

#### 22. Databases
- SQL vs NoSQL
- Database indexing
- Query optimization

#### 23. Distributed Systems
- Eventual consistency
- Message queues (RabbitMQ, Kafka)
- Distributed locks

### 💬 Behavioral Interviews

#### 24. Behavioral Interview Overview
- STAR method framework
- Common question categories
- Preparation strategies

#### 25. Behavioral Theory
- Leadership principles
- Competency framework
- Assessment criteria

#### 26. Behavioral Tactics
- Handling difficult questions
- Body language and presence
- Virtual interview tips

#### 27. Practice & Mock Interviews
- 50 common behavioral questions
- Mock interview scenarios
- Feedback and practice exercises

## 🎯 Future Enhancements

- [ ] Social features (share progress, compete with friends)
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
