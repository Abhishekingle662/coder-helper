import { Topic, QuizQuestion } from '../types';
import { neetcodeBlind75 } from './neetcode-blind75';

export const topics: Topic[] = [
  {
    id: 'time-space-complexity',
    name: 'Time & Space Complexity',
    description: 'Understanding Big O notation and algorithm analysis',
    icon: '⏱️',
    flashcards: [
      {
        id: 'tsc-1',
        topicId: 'time-space-complexity',
        question: 'What is O(1) time complexity?',
        answer: 'Constant time - the algorithm takes the same amount of time regardless of input size. Example: accessing an array element by index.',
        difficulty: 'easy',
      },
      {
        id: 'tsc-2',
        topicId: 'time-space-complexity',
        question: 'What is O(n) time complexity?',
        answer: 'Linear time - the execution time grows linearly with input size. Example: iterating through an array once.',
        difficulty: 'easy',
      },
      {
        id: 'tsc-3',
        topicId: 'time-space-complexity',
        question: 'What is O(log n) time complexity?',
        answer: 'Logarithmic time - the execution time grows logarithmically. Example: binary search in a sorted array.',
        difficulty: 'medium',
      },
      {
        id: 'tsc-4',
        topicId: 'time-space-complexity',
        question: 'What is O(n²) time complexity?',
        answer: 'Quadratic time - nested iterations over input. Example: nested loops checking all pairs in an array.',
        difficulty: 'medium',
      },
      {
        id: 'tsc-5',
        topicId: 'time-space-complexity',
        question: 'What is amortized time complexity?',
        answer: 'Average time per operation over a sequence of operations. Example: Dynamic array resize is O(1) amortized.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'tsc-ct-1',
        topicId: 'time-space-complexity',
        title: 'Measuring Time Complexity',
        description: 'Example of different time complexities',
        python: `# O(1) - Constant Time
def constant_time(arr):
    return arr[0] if arr else None

# O(n) - Linear Time
def linear_time(arr):
    for item in arr:
        print(item)

# O(n²) - Quadratic Time
def quadratic_time(arr):
    for i in arr:
        for j in arr:
            print(i, j)

# O(log n) - Logarithmic Time
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
        javascript: `// O(1) - Constant Time
function constantTime(arr) {
    return arr.length > 0 ? arr[0] : null;
}

// O(n) - Linear Time
function linearTime(arr) {
    arr.forEach(item => console.log(item));
}

// O(n²) - Quadratic Time
function quadraticTime(arr) {
    for (let i of arr) {
        for (let j of arr) {
            console.log(i, j);
        }
    }
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      },
    ],
  },
  {
    id: 'two-pointer',
    name: 'Two Pointer Pattern',
    description: 'Using two pointers to solve array problems efficiently',
    icon: '👉',
    flashcards: [
      {
        id: 'tp-1',
        topicId: 'two-pointer',
        question: 'What is the Two Pointer technique?',
        answer: 'A pattern using two pointers to iterate through data structures, often from opposite ends or at different speeds.',
        difficulty: 'easy',
      },
      {
        id: 'tp-2',
        topicId: 'two-pointer',
        question: 'When should you use Two Pointers?',
        answer: 'Use when: finding pairs in sorted arrays, removing duplicates, reversing arrays, or sliding window problems.',
        difficulty: 'medium',
      },
      {
        id: 'tp-3',
        topicId: 'two-pointer',
        question: 'What is the fast and slow pointer technique?',
        answer: 'Two pointers moving at different speeds, used for cycle detection (Floyd\'s algorithm) and finding middle elements.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'tp-ct-1',
        topicId: 'two-pointer',
        title: 'Two Pointer Examples',
        description: 'Common two pointer patterns',
        python: `# Two Sum in Sorted Array
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []

# Remove Duplicates
def remove_duplicates(arr):
    if not arr:
        return 0
    write = 1
    for read in range(1, len(arr)):
        if arr[read] != arr[read - 1]:
            arr[write] = arr[read]
            write += 1
    return write

# Reverse String
def reverse_string(s):
    chars = list(s)
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return ''.join(chars)`,
        javascript: `// Two Sum in Sorted Array
function twoSumSorted(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
    return [];
}

// Remove Duplicates
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let write = 1;
    for (let read = 1; read < arr.length; read++) {
        if (arr[read] !== arr[read - 1]) {
            arr[write] = arr[read];
            write++;
        }
    }
    return write;
}

// Reverse String
function reverseString(s) {
    const chars = s.split('');
    let left = 0, right = chars.length - 1;
    while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }
    return chars.join('');
}`,
      },
    ],
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Efficiently process subarrays or substrings',
    icon: '🪟',
    flashcards: [
      {
        id: 'sw-1',
        topicId: 'sliding-window',
        question: 'What is the Sliding Window pattern?',
        answer: 'A technique that maintains a window (subarray/substring) that slides through the data, avoiding redundant calculations.',
        difficulty: 'easy',
      },
      {
        id: 'sw-2',
        topicId: 'sliding-window',
        question: 'When to use Sliding Window?',
        answer: 'Use for: maximum/minimum subarray sum, longest substring problems, or any contiguous sequence problems.',
        difficulty: 'medium',
      },
      {
        id: 'sw-3',
        topicId: 'sliding-window',
        question: 'Fixed vs Variable Sliding Window?',
        answer: 'Fixed: window size is constant (k). Variable: window size changes based on conditions (expand/contract).',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'sw-ct-1',
        topicId: 'sliding-window',
        title: 'Sliding Window Examples',
        description: 'Fixed and variable window patterns',
        python: `# Fixed Window - Max Sum of K consecutive elements
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return None
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Variable Window - Longest Substring Without Repeating
def longest_substring_without_repeating(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Minimum Window Substring
def min_window_substring(s, t):
    from collections import Counter
    if not s or not t:
        return ""
    
    dict_t = Counter(t)
    required = len(dict_t)
    left = right = 0
    formed = 0
    window_counts = {}
    ans = float("inf"), None, None
    
    while right < len(s):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1
        
        while left <= right and formed == required:
            char = s[left]
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            
            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1
            left += 1
        
        right += 1
    
    return "" if ans[0] == float("inf") else s[ans[1]:ans[2] + 1]`,
        javascript: `// Fixed Window - Max Sum of K consecutive elements
function maxSumSubarray(arr, k) {
    if (arr.length < k) return null;
    let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

// Variable Window - Longest Substring Without Repeating
function longestSubstringWithoutRepeating(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Minimum Size Subarray Sum
function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    
    return minLen === Infinity ? 0 : minLen;
}`,
      },
    ],
  },
  {
    id: 'arrays',
    name: 'Arrays',
    description: 'Array manipulation and problem-solving techniques',
    icon: '📊',
    flashcards: [
      {
        id: 'arr-1',
        topicId: 'arrays',
        question: 'What is an array?',
        answer: 'A contiguous block of memory storing elements of the same type, with O(1) random access by index.',
        difficulty: 'easy',
      },
      {
        id: 'arr-2',
        topicId: 'arrays',
        question: 'Array vs Dynamic Array?',
        answer: 'Static arrays have fixed size. Dynamic arrays (Python list, JS array) resize automatically with amortized O(1) append.',
        difficulty: 'medium',
      },
      {
        id: 'arr-3',
        topicId: 'arrays',
        question: 'What is in-place array modification?',
        answer: 'Modifying an array without extra space (O(1) space), using techniques like two pointers or swapping.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'arr-ct-1',
        topicId: 'arrays',
        title: 'Array Operations',
        description: 'Common array manipulation patterns',
        python: `# Rotate Array Right by K steps
def rotate_array(nums, k):
    k = k % len(nums)
    nums[:] = nums[-k:] + nums[:-k]

# Find Missing Number (1 to n)
def find_missing_number(nums):
    n = len(nums) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

# Kadane's Algorithm - Maximum Subarray Sum
def max_subarray(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

# Product of Array Except Self
def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    # Left pass
    left_product = 1
    for i in range(n):
        result[i] = left_product
        left_product *= nums[i]
    
    # Right pass
    right_product = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]
    
    return result

# Merge Sorted Arrays
def merge_sorted_arrays(arr1, arr2):
    result = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    return result`,
        javascript: `// Rotate Array Right by K steps
function rotateArray(nums, k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(-k));
}

// Find Missing Number (1 to n)
function findMissingNumber(nums) {
    const n = nums.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

// Kadane's Algorithm - Maximum Subarray Sum
function maxSubarray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// Product of Array Except Self
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Left pass
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Right pass
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

// Merge Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    
    return result.concat(arr1.slice(i), arr2.slice(j));
}`,
      },
    ],
  },
  {
    id: 'strings',
    name: 'Strings',
    description: 'String manipulation and pattern matching',
    icon: '📝',
    flashcards: [
      {
        id: 'str-1',
        topicId: 'strings',
        question: 'Are strings mutable in Python and JavaScript?',
        answer: 'No, strings are immutable in both. Modifications create new strings. Use lists/arrays for mutable character sequences.',
        difficulty: 'easy',
      },
      {
        id: 'str-2',
        topicId: 'strings',
        question: 'What is a palindrome?',
        answer: 'A string that reads the same forwards and backwards. Check using two pointers from both ends.',
        difficulty: 'easy',
      },
      {
        id: 'str-3',
        topicId: 'strings',
        question: 'What is an anagram?',
        answer: 'Two strings with the same characters in different order. Check by sorting or using character frequency maps.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'str-ct-1',
        topicId: 'strings',
        title: 'String Operations',
        description: 'Common string manipulation patterns',
        python: `# Check Palindrome
def is_palindrome(s):
    # Clean string: lowercase and remove non-alphanumeric
    s = ''.join(c.lower() for c in s if c.isalnum())
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# Check Anagram
def is_anagram(s1, s2):
    from collections import Counter
    return Counter(s1) == Counter(s2)

# Reverse Words in String
def reverse_words(s):
    return ' '.join(s.split()[::-1])

# First Non-Repeating Character
def first_non_repeating(s):
    from collections import Counter
    char_count = Counter(s)
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    return -1

# Longest Common Prefix
def longest_common_prefix(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for string in strs[1:]:
        while not string.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

# String to Integer (atoi)
def my_atoi(s):
    s = s.lstrip()
    if not s:
        return 0
    
    sign = 1
    i = 0
    if s[0] in ['-', '+']:
        sign = -1 if s[0] == '-' else 1
        i = 1
    
    result = 0
    while i < len(s) and s[i].isdigit():
        result = result * 10 + int(s[i])
        i += 1
    
    result *= sign
    INT_MAX, INT_MIN = 2**31 - 1, -2**31
    return max(INT_MIN, min(result, INT_MAX))`,
        javascript: `// Check Palindrome
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Check Anagram
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    const count = {};
    for (let char of s1) count[char] = (count[char] || 0) + 1;
    for (let char of s2) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// Reverse Words in String
function reverseWords(s) {
    return s.trim().split(/\\s+/).reverse().join(' ');
}

// First Non-Repeating Character
function firstNonRepeating(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) return i;
    }
    return -1;
}

// Longest Common Prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// String to Integer (atoi)
function myAtoi(s) {
    s = s.trimStart();
    if (!s) return 0;
    
    let sign = 1;
    let i = 0;
    if (s[0] === '-' || s[0] === '+') {
        sign = s[0] === '-' ? -1 : 1;
        i = 1;
    }
    
    let result = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + parseInt(s[i]);
        i++;
    }
    
    result *= sign;
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
    return Math.max(INT_MIN, Math.min(result, INT_MAX));
}`,
      },
    ],
  },
  {
    id: 'trees',
    name: 'Trees',
    description: 'Binary trees, BST, and tree traversals',
    icon: '🌳',
    flashcards: [
      {
        id: 'tree-1',
        topicId: 'trees',
        question: 'What is a Binary Tree?',
        answer: 'A tree where each node has at most two children (left and right). Used for hierarchical data representation.',
        difficulty: 'easy',
      },
      {
        id: 'tree-2',
        topicId: 'trees',
        question: 'What are tree traversal methods?',
        answer: 'Inorder (Left-Root-Right), Preorder (Root-Left-Right), Postorder (Left-Right-Root), Level-order (BFS).',
        difficulty: 'medium',
      },
      {
        id: 'tree-3',
        topicId: 'trees',
        question: 'What is a Binary Search Tree (BST)?',
        answer: 'A binary tree where left subtree < node < right subtree. Supports O(log n) search, insert, delete on average.',
        difficulty: 'medium',
      },
      {
        id: 'tree-4',
        topicId: 'trees',
        question: 'What is a balanced tree?',
        answer: 'A tree where height difference between left and right subtrees is ≤ 1 for all nodes. Ensures O(log n) operations.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'tree-ct-1',
        topicId: 'trees',
        title: 'Tree Operations',
        description: 'Binary tree traversals and operations',
        python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Inorder Traversal (Recursive)
def inorder_traversal(root):
    result = []
    def traverse(node):
        if not node:
            return
        traverse(node.left)
        result.append(node.val)
        traverse(node.right)
    traverse(root)
    return result

# Level Order Traversal (BFS)
def level_order(root):
    if not root:
        return []
    from collections import deque
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result

# Maximum Depth
def max_depth(root):
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

# Check if Balanced
def is_balanced(root):
    def check_height(node):
        if not node:
            return 0
        left = check_height(node.left)
        if left == -1:
            return -1
        right = check_height(node.right)
        if right == -1:
            return -1
        if abs(left - right) > 1:
            return -1
        return 1 + max(left, right)
    return check_height(root) != -1

# Validate BST
def is_valid_bst(root):
    def validate(node, min_val, max_val):
        if not node:
            return True
        if not (min_val < node.val < max_val):
            return False
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))
    return validate(root, float('-inf'), float('inf'))

# Lowest Common Ancestor
def lowest_common_ancestor(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right`,
        javascript: `class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Inorder Traversal (Recursive)
function inorderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
}

// Level Order Traversal (BFS)
function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const level = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

// Maximum Depth
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Check if Balanced
function isBalanced(root) {
    function checkHeight(node) {
        if (!node) return 0;
        const left = checkHeight(node.left);
        if (left === -1) return -1;
        const right = checkHeight(node.right);
        if (right === -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    }
    return checkHeight(root) !== -1;
}

// Validate BST
function isValidBST(root) {
    function validate(node, min, max) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;
        return validate(node.left, min, node.val) && 
               validate(node.right, node.val, max);
    }
    return validate(root, -Infinity, Infinity);
}

// Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
}`,
      },
    ],
  },
  {
    id: 'graphs',
    name: 'Graphs',
    description: 'Graph traversal, shortest path, and graph algorithms',
    icon: '🕸️',
    flashcards: [
      {
        id: 'graph-1',
        topicId: 'graphs',
        question: 'What is a Graph?',
        answer: 'A data structure with nodes (vertices) connected by edges. Can be directed/undirected, weighted/unweighted.',
        difficulty: 'easy',
      },
      {
        id: 'graph-2',
        topicId: 'graphs',
        question: 'DFS vs BFS?',
        answer: 'DFS uses stack (recursion), goes deep first. BFS uses queue, explores level by level. BFS finds shortest path in unweighted graphs.',
        difficulty: 'medium',
      },
      {
        id: 'graph-3',
        topicId: 'graphs',
        question: 'What is Dijkstra\'s algorithm?',
        answer: 'Finds shortest path from source to all vertices in weighted graph with non-negative edges. Uses priority queue, O(E log V).',
        difficulty: 'hard',
      },
      {
        id: 'graph-4',
        topicId: 'graphs',
        question: 'What is topological sort?',
        answer: 'Linear ordering of vertices in a DAG where for every edge u→v, u comes before v. Used in task scheduling.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'graph-ct-1',
        topicId: 'graphs',
        title: 'Graph Algorithms',
        description: 'Common graph traversal and algorithms',
        python: `from collections import deque, defaultdict
import heapq

# DFS - Recursive
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited

# BFS
def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        vertex = queue.popleft()
        print(vertex, end=' ')
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return visited

# Detect Cycle in Undirected Graph
def has_cycle_undirected(graph, n):
    visited = set()
    
    def dfs_cycle(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs_cycle(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False
    
    for i in range(n):
        if i not in visited:
            if dfs_cycle(i, -1):
                return True
    return False

# Dijkstra's Algorithm
def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, current = heapq.heappop(pq)
        
        if current_dist > distances[current]:
            continue
        
        for neighbor, weight in graph[current]:
            distance = current_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

# Topological Sort (Kahn's Algorithm)
def topological_sort(graph, n):
    in_degree = [0] * n
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    queue = deque([i for i in range(n) if in_degree[i] == 0])
    result = []
    
    while queue:
        node = queue.popleft()
        result.append(node)
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return result if len(result) == n else []

# Number of Islands (Grid DFS)
def num_islands(grid):
    if not grid:
        return 0
    
    def dfs(i, j):
        if (i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or
            grid[i][j] != '1'):
            return
        grid[i][j] = '0'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count`,
        javascript: `// DFS - Recursive
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    
    for (let neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
    return visited;
}

// BFS
function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    
    while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);
        
        for (let neighbor of graph[vertex] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return visited;
}

// Detect Cycle in Undirected Graph
function hasCycleUndirected(graph, n) {
    const visited = new Set();
    
    function dfsCycle(node, parent) {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                if (dfsCycle(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            if (dfsCycle(i, -1)) return true;
        }
    }
    return false;
}

// Dijkstra's Algorithm
function dijkstra(graph, start) {
    const distances = {};
    const pq = [[0, start]];
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDist, current] = pq.shift();
        
        if (currentDist > distances[current]) continue;
        
        for (let [neighbor, weight] of graph[current] || []) {
            const distance = currentDist + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.push([distance, neighbor]);
            }
        }
    }
    
    return distances;
}

// Topological Sort (Kahn's Algorithm)
function topologicalSort(graph, n) {
    const inDegree = new Array(n).fill(0);
    
    for (let u in graph) {
        for (let v of graph[u]) {
            inDegree[v]++;
        }
    }
    
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        
        for (let neighbor of graph[node] || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === n ? result : [];
}

// Number of Islands (Grid DFS)
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    
    function dfs(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || 
            j >= grid[0].length || grid[i][j] !== '1') {
            return;
        }
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
}`,
      },
    ],
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Memoization, tabulation, and DP patterns',
    icon: '🧮',
    flashcards: [
      {
        id: 'dp-1',
        topicId: 'dynamic-programming',
        question: 'What is Dynamic Programming?',
        answer: 'An optimization technique that solves complex problems by breaking them into overlapping subproblems and storing results.',
        difficulty: 'medium',
      },
      {
        id: 'dp-2',
        topicId: 'dynamic-programming',
        question: 'Memoization vs Tabulation?',
        answer: 'Memoization (top-down): recursive with caching. Tabulation (bottom-up): iterative with table. Both avoid redundant calculations.',
        difficulty: 'medium',
      },
      {
        id: 'dp-3',
        topicId: 'dynamic-programming',
        question: 'When to use DP?',
        answer: 'Use when: overlapping subproblems, optimal substructure. Examples: Fibonacci, knapsack, longest common subsequence.',
        difficulty: 'hard',
      },
      {
        id: 'dp-4',
        topicId: 'dynamic-programming',
        question: 'What is the state in DP?',
        answer: 'The state represents a subproblem. Define state variables that uniquely identify each subproblem to avoid recomputation.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'dp-ct-1',
        topicId: 'dynamic-programming',
        title: 'DP Patterns',
        description: 'Common dynamic programming patterns',
        python: `# Fibonacci - Memoization (Top-Down)
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Fibonacci - Tabulation (Bottom-Up)
def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Climbing Stairs
def climb_stairs(n):
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Coin Change (Min coins)
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# Longest Common Subsequence
def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

# 0/1 Knapsack
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

# Longest Increasing Subsequence
def length_of_lis(nums):
    if not nums:
        return 0
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)

# Edit Distance
def min_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # delete
                    dp[i][j-1],    # insert
                    dp[i-1][j-1]   # replace
                )
    
    return dp[m][n]`,
        javascript: `// Fibonacci - Memoization (Top-Down)
function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// Fibonacci - Tabulation (Bottom-Up)
function fibTab(n) {
    if (n <= 1) return n;
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Climbing Stairs
function climbStairs(n) {
    if (n <= 2) return n;
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Coin Change (Min coins)
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Longest Common Subsequence
function lcs(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

// 0/1 Knapsack
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

// Longest Increasing Subsequence
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// Edit Distance
function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],      // delete
                    dp[i][j - 1],      // insert
                    dp[i - 1][j - 1]   // replace
                );
            }
        }
    }
    
    return dp[m][n];
}`,
      },
    ],
  },
  {
    id: 'fast-slow-pointers',
    name: 'Tortoise & Hare (Fast-Slow Pointers)',
    description: 'Detect cycles and find middle elements using two-speed pointers',
    icon: '🐢',
    flashcards: [
      {
        id: 'fsp-1',
        topicId: 'fast-slow-pointers',
        question: 'What is the Tortoise and Hare algorithm?',
        answer: 'Also known as Floyd\'s cycle detection algorithm, it uses two pointers moving at different speeds (slow moves 1 step, fast moves 2 steps) to detect cycles in linked lists.',
        difficulty: 'medium',
      },
      {
        id: 'fsp-2',
        topicId: 'fast-slow-pointers',
        question: 'How to find the middle of a linked list?',
        answer: 'Use slow and fast pointers. When fast reaches the end, slow will be at the middle. Fast moves 2 steps, slow moves 1 step.',
        difficulty: 'easy',
      },
      {
        id: 'fsp-3',
        topicId: 'fast-slow-pointers',
        question: 'How does cycle detection work?',
        answer: 'If there\'s a cycle, fast pointer will eventually meet slow pointer. If no cycle, fast pointer reaches null/end.',
        difficulty: 'medium',
      },
      {
        id: 'fsp-4',
        topicId: 'fast-slow-pointers',
        question: 'What problems use fast-slow pointers?',
        answer: 'Cycle detection, finding cycle start, middle element, palindrome linked list, and happy number problems.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'fsp-ct-1',
        topicId: 'fast-slow-pointers',
        title: 'Fast-Slow Pointer Patterns',
        description: 'Common applications of the tortoise and hare algorithm',
        python: `# Detect Cycle in Linked List
def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False

# Find Middle of Linked List
def find_middle(head):
    if not head:
        return None
    
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow

# Find Cycle Start
def find_cycle_start(head):
    if not head or not head.next:
        return None
    
    slow = head
    fast = head
    
    # Find meeting point
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    
    if not fast or not fast.next:
        return None
    
    # Find cycle start
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    
    return slow

# Happy Number
def is_happy(n):
    def get_next(num):
        total = 0
        while num > 0:
            digit = num % 10
            total += digit * digit
            num //= 10
        return total
    
    slow = n
    fast = n
    
    while True:
        slow = get_next(slow)
        fast = get_next(get_next(fast))
        if fast == 1:
            return True
        if slow == fast:
            return False`,
        javascript: `// Detect Cycle in Linked List
function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Find Middle of Linked List
function findMiddle(head) {
    if (!head) {
        return null;
    }
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Find Cycle Start
function findCycleStart(head) {
    if (!head || !head.next) {
        return null;
    }
    
    let slow = head;
    let fast = head;
    
    // Find meeting point
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    
    if (!fast || !fast.next) {
        return null;
    }
    
    // Find cycle start
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// Happy Number
function isHappy(n) {
    function getNext(num) {
        let total = 0;
        while (num > 0) {
            const digit = num % 10;
            total += digit * digit;
            num = Math.floor(num / 10);
        }
        return total;
    }
    
    let slow = n;
    let fast = n;
    
    while (true) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
        if (fast === 1) {
            return true;
        }
        if (slow === fast) {
            return false;
        }
    }
}`,
      },
    ],
  },
  {
    id: 'two-pass',
    name: 'Two Pass Pattern',
    description: 'Solve problems by iterating through data twice for efficiency',
    icon: '↔️',
    flashcards: [
      {
        id: 'tp2-1',
        topicId: 'two-pass',
        question: 'What is the Two Pass pattern?',
        answer: 'A technique where you iterate through the data twice: first to gather information, second to process based on that information.',
        difficulty: 'easy',
      },
      {
        id: 'tp2-2',
        topicId: 'two-pass',
        question: 'When to use Two Pass?',
        answer: 'When you need global information before processing individual elements, or when calculating relative positions/values.',
        difficulty: 'medium',
      },
      {
        id: 'tp2-3',
        topicId: 'two-pass',
        question: 'Two Pass vs Single Pass?',
        answer: 'Two pass is O(2n) = O(n) but requires complete dataset knowledge. Single pass is O(n) but may need extra space or not work for all problems.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'tp2-ct-1',
        topicId: 'two-pass',
        title: 'Two Pass Examples',
        description: 'Common two pass patterns',
        python: `# Product of Array Except Self
def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    # First pass: left products
    left = 1
    for i in range(n):
        result[i] = left
        left *= nums[i]
    
    # Second pass: multiply by right products
    right = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right
        right *= nums[i]
    
    return result

# Gas Station
def can_complete_circuit(gas, cost):
    if sum(gas) < sum(cost):
        return -1
    
    # First pass: find total gas and cost
    total_gas = sum(gas)
    total_cost = sum(cost)
    
    if total_gas < total_cost:
        return -1
    
    # Second pass: find starting point
    start = 0
    tank = 0
    
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    
    return start

# Replace Elements with Greatest on Right
def replace_elements(arr):
    n = len(arr)
    result = [-1] * n
    
    # First pass: find max from right
    max_right = -1
    for i in range(n - 1, -1, -1):
        result[i] = max_right
        max_right = max(max_right, arr[i])
    
    return result`,
        javascript: `// Product of Array Except Self
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // First pass: left products
    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    
    // Second pass: multiply by right products
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}

// Gas Station
function canCompleteCircuit(gas, cost) {
    const totalGas = gas.reduce((a, b) => a + b, 0);
    const totalCost = cost.reduce((a, b) => a + b, 0);
    
    if (totalGas < totalCost) {
        return -1;
    }
    
    // Second pass: find starting point
    let start = 0;
    let tank = 0;
    
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    
    return start;
}

// Replace Elements with Greatest on Right
function replaceElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    
    // First pass: find max from right
    let maxRight = -1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = maxRight;
        maxRight = Math.max(maxRight, arr[i]);
    }
    
    return result;
}`,
      },
    ],
  },
  {
    id: 'bit-manipulation',
    name: 'Bit Manipulation',
    description: 'Master bitwise operations and binary number techniques',
    icon: '0️⃣',
    flashcards: [
      {
        id: 'bm-1',
        topicId: 'bit-manipulation',
        question: 'What are common bitwise operators?',
        answer: 'AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>). Used for efficient operations at the bit level.',
        difficulty: 'easy',
      },
      {
        id: 'bm-2',
        topicId: 'bit-manipulation',
        question: 'What is XOR\'s special property?',
        answer: 'XOR of a number with itself is 0. XOR is commutative and associative. Used to find single number, swap variables without temp.',
        difficulty: 'medium',
      },
      {
        id: 'bm-3',
        topicId: 'bit-manipulation',
        question: 'How to check if a number is power of 2?',
        answer: 'n & (n-1) == 0. Powers of 2 have only one bit set. Example: 8 (1000) & 7 (0111) = 0.',
        difficulty: 'medium',
      },
      {
        id: 'bm-4',
        topicId: 'bit-manipulation',
        question: 'How to count set bits?',
        answer: 'Use Brian Kernighan\'s algorithm: n & (n-1) removes rightmost set bit. Count iterations until n becomes 0.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'bm-ct-1',
        topicId: 'bit-manipulation',
        title: 'Bit Manipulation Techniques',
        description: 'Essential bitwise operations and patterns',
        python: `# Check if Power of 2
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

# Count Set Bits
def count_set_bits(n):
    count = 0
    while n:
        n &= (n - 1)  # Remove rightmost set bit
        count += 1
    return count

# Single Number (all others appear twice)
def single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

# Get, Set, Clear, Toggle bit
def get_bit(num, i):
    return (num & (1 << i)) != 0

def set_bit(num, i):
    return num | (1 << i)

def clear_bit(num, i):
    return num & ~(1 << i)

def toggle_bit(num, i):
    return num ^ (1 << i)

# Swap two numbers without temp
def swap(a, b):
    a ^= b
    b ^= a
    a ^= b
    return a, b

# Find Missing Number
def missing_number(nums):
    n = len(nums)
    xor = 0
    
    # XOR all numbers from 0 to n
    for i in range(n + 1):
        xor ^= i
    
    # XOR with array elements
    for num in nums:
        xor ^= num
    
    return xor

# Reverse Bits
def reverse_bits(n):
    result = 0
    for i in range(32):
        bit = (n >> i) & 1
        result |= (bit << (31 - i))
    return result`,
        javascript: `// Check if Power of 2
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// Count Set Bits
function countSetBits(n) {
    let count = 0;
    while (n) {
        n &= (n - 1);  // Remove rightmost set bit
        count++;
    }
    return count;
}

// Single Number (all others appear twice)
function singleNumber(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}

// Get, Set, Clear, Toggle bit
function getBit(num, i) {
    return (num & (1 << i)) !== 0;
}

function setBit(num, i) {
    return num | (1 << i);
}

function clearBit(num, i) {
    return num & ~(1 << i);
}

function toggleBit(num, i) {
    return num ^ (1 << i);
}

// Swap two numbers without temp
function swap(a, b) {
    a ^= b;
    b ^= a;
    a ^= b;
    return [a, b];
}

// Find Missing Number
function missingNumber(nums) {
    const n = nums.length;
    let xor = 0;
    
    // XOR all numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }
    
    // XOR with array elements
    for (const num of nums) {
        xor ^= num;
    }
    
    return xor;
}

// Reverse Bits
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        const bit = (n >> i) & 1;
        result |= (bit << (31 - i));
    }
    return result >>> 0; // Convert to unsigned
}`,
      },
    ],
  },
  {
    id: 'cyclic-sort',
    name: 'Cyclic Sort',
    description: 'Sort arrays with numbers in a given range efficiently',
    icon: '🔄',
    flashcards: [
      {
        id: 'cs-1',
        topicId: 'cyclic-sort',
        question: 'What is Cyclic Sort?',
        answer: 'An in-place sorting algorithm for arrays containing numbers in a given range (1 to n). Places each number at its correct index.',
        difficulty: 'medium',
      },
      {
        id: 'cs-2',
        topicId: 'cyclic-sort',
        question: 'When to use Cyclic Sort?',
        answer: 'When dealing with arrays containing numbers in range [1, n] or [0, n-1]. Find missing numbers, duplicates, or first K missing positive.',
        difficulty: 'medium',
      },
      {
        id: 'cs-3',
        topicId: 'cyclic-sort',
        question: 'Time complexity of Cyclic Sort?',
        answer: 'O(n) time and O(1) space. Each number is visited at most twice - once to place it and once when already in position.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'cs-ct-1',
        topicId: 'cyclic-sort',
        title: 'Cyclic Sort Patterns',
        description: 'Applications of cyclic sort algorithm',
        python: `# Basic Cyclic Sort
def cyclic_sort(nums):
    i = 0
    while i < len(nums):
        correct_index = nums[i] - 1
        if nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1
    return nums

# Find Missing Number
def find_missing_number(nums):
    i = 0
    n = len(nums)
    
    while i < n:
        correct_index = nums[i]
        if nums[i] < n and nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1
    
    # Find first missing
    for i in range(n):
        if nums[i] != i:
            return i
    
    return n

# Find All Missing Numbers
def find_all_missing(nums):
    i = 0
    while i < len(nums):
        correct_index = nums[i] - 1
        if nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1
    
    missing = []
    for i in range(len(nums)):
        if nums[i] != i + 1:
            missing.append(i + 1)
    
    return missing

# Find Duplicate Number
def find_duplicate(nums):
    i = 0
    while i < len(nums):
        correct_index = nums[i] - 1
        if nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1
    
    for i in range(len(nums)):
        if nums[i] != i + 1:
            return nums[i]
    
    return -1

# Find All Duplicates
def find_all_duplicates(nums):
    i = 0
    while i < len(nums):
        correct_index = nums[i] - 1
        if nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1
    
    duplicates = []
    for i in range(len(nums)):
        if nums[i] != i + 1:
            duplicates.append(nums[i])
    
    return duplicates`,
        javascript: `// Basic Cyclic Sort
function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
}

// Find Missing Number
function findMissingNumber(nums) {
    let i = 0;
    const n = nums.length;
    
    while (i < n) {
        const correctIndex = nums[i];
        if (nums[i] < n && nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    
    // Find first missing
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    
    return n;
}

// Find All Missing Numbers
function findAllMissing(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    
    const missing = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            missing.push(i + 1);
        }
    }
    
    return missing;
}

// Find Duplicate Number
function findDuplicate(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return nums[i];
        }
    }
    
    return -1;
}

// Find All Duplicates
function findAllDuplicates(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    
    const duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicates.push(nums[i]);
        }
    }
    
    return duplicates;
}`,
      },
    ],
  },
  {
    id: 'hash-tables',
    name: 'Hash Tables',
    description: 'Fast lookups and storage with hash maps and sets',
    icon: '#️⃣',
    flashcards: [
      {
        id: 'ht-1',
        topicId: 'hash-tables',
        question: 'What is a Hash Table?',
        answer: 'A data structure that maps keys to values using a hash function. Provides O(1) average-case insertion, deletion, and lookup.',
        difficulty: 'easy',
      },
      {
        id: 'ht-2',
        topicId: 'hash-tables',
        question: 'How does collision handling work?',
        answer: 'Two main methods: Chaining (linked list at each bucket) and Open Addressing (probe for next empty slot). Chaining is more common.',
        difficulty: 'medium',
      },
      {
        id: 'ht-3',
        topicId: 'hash-tables',
        question: 'When to use HashMap vs HashSet?',
        answer: 'HashMap stores key-value pairs for mapping. HashSet stores unique elements for membership testing. Both use hashing.',
        difficulty: 'easy',
      },
      {
        id: 'ht-4',
        topicId: 'hash-tables',
        question: 'What is load factor?',
        answer: 'Ratio of elements to buckets. When load factor exceeds threshold (typically 0.75), the hash table resizes to maintain O(1) operations.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'ht-ct-1',
        topicId: 'hash-tables',
        title: 'Hash Table Applications',
        description: 'Common hash table patterns and problems',
        python: `# Two Sum using HashMap
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Group Anagrams
def group_anagrams(strs):
    anagrams = {}
    for s in strs:
        key = ''.join(sorted(s))
        if key not in anagrams:
            anagrams[key] = []
        anagrams[key].append(s)
    return list(anagrams.values())

# First Non-Repeating Character
def first_non_repeating(s):
    char_count = {}
    
    # Count frequencies
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Find first non-repeating
    for char in s:
        if char_count[char] == 1:
            return char
    
    return None

# Subarray Sum Equals K
def subarray_sum(nums, k):
    count = 0
    prefix_sum = 0
    sum_count = {0: 1}
    
    for num in nums:
        prefix_sum += num
        if prefix_sum - k in sum_count:
            count += sum_count[prefix_sum - k]
        sum_count[prefix_sum] = sum_count.get(prefix_sum, 0) + 1
    
    return count

# LRU Cache
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []
    
    def get(self, key):
        if key not in self.cache:
            return -1
        
        self.order.remove(key)
        self.order.append(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            lru_key = self.order.pop(0)
            del self.cache[lru_key]
        
        self.cache[key] = value
        self.order.append(key)`,
        javascript: `// Two Sum using HashMap
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}

// Group Anagrams
function groupAnagrams(strs) {
    const anagrams = new Map();
    for (const s of strs) {
        const key = s.split('').sort().join('');
        if (!anagrams.has(key)) {
            anagrams.set(key, []);
        }
        anagrams.get(key).push(s);
    }
    return Array.from(anagrams.values());
}

// First Non-Repeating Character
function firstNonRepeating(s) {
    const charCount = new Map();
    
    // Count frequencies
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find first non-repeating
    for (const char of s) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    return null;
}

// Subarray Sum Equals K
function subarraySum(nums, k) {
    let count = 0;
    let prefixSum = 0;
    const sumCount = new Map([[0, 1]]);
    
    for (const num of nums) {
        prefixSum += num;
        if (sumCount.has(prefixSum - k)) {
            count += sumCount.get(prefixSum - k);
        }
        sumCount.set(prefixSum, (sumCount.get(prefixSum) || 0) + 1);
    }
    
    return count;
}

// LRU Cache
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        
        this.cache.set(key, value);
    }
}`,
      },
    ],
  },
  {
    id: 'searching-sorting',
    name: 'Searching & Sorting',
    description: 'Master binary search and sorting algorithms',
    icon: '🔍',
    flashcards: [
      {
        id: 'ss-1',
        topicId: 'searching-sorting',
        question: 'What is Binary Search?',
        answer: 'An efficient O(log n) search algorithm for sorted arrays. Repeatedly divides search space in half by comparing middle element.',
        difficulty: 'easy',
      },
      {
        id: 'ss-2',
        topicId: 'searching-sorting',
        question: 'Compare QuickSort vs MergeSort?',
        answer: 'QuickSort: O(n log n) average, O(n²) worst, O(log n) space, in-place. MergeSort: O(n log n) always, O(n) space, stable.',
        difficulty: 'medium',
      },
      {
        id: 'ss-3',
        topicId: 'searching-sorting',
        question: 'What is a stable sort?',
        answer: 'A sort that maintains relative order of equal elements. MergeSort and TimSort are stable. QuickSort typically isn\'t.',
        difficulty: 'medium',
      },
      {
        id: 'ss-4',
        topicId: 'searching-sorting',
        question: 'When to use binary search variations?',
        answer: 'Find first/last occurrence, search rotated array, find peak element, search 2D matrix. All require sorted or partially sorted data.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'ss-ct-1',
        topicId: 'searching-sorting',
        title: 'Search and Sort Algorithms',
        description: 'Essential searching and sorting implementations',
        python: `# Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Find First and Last Position
def search_range(nums, target):
    def find_bound(is_first):
        left, right = 0, len(nums) - 1
        result = -1
        
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                result = mid
                if is_first:
                    right = mid - 1
                else:
                    left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return result
    
    return [find_bound(True), find_bound(False)]

# QuickSort
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# MergeSort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Search in Rotated Sorted Array
def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if nums[mid] == target:
            return mid
        
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1`,
        javascript: `// Binary Search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Find First and Last Position
function searchRange(nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    return [findBound(true), findBound(false)];
}

// QuickSort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// MergeSort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return [...result, ...left.slice(i), ...right.slice(j)];
}

// Search in Rotated Sorted Array
function searchRotated(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}`,
      },
    ],
  },
  {
    id: 'stacks-queues',
    name: 'Stacks & Queues',
    description: 'LIFO and FIFO data structures for ordered processing',
    icon: '📚',
    flashcards: [
      {
        id: 'sq-1',
        topicId: 'stacks-queues',
        question: 'What is a Stack?',
        answer: 'LIFO (Last In First Out) data structure. Operations: push (add), pop (remove), peek (view top). All O(1). Used for undo, recursion, parsing.',
        difficulty: 'easy',
      },
      {
        id: 'sq-2',
        topicId: 'stacks-queues',
        question: 'What is a Queue?',
        answer: 'FIFO (First In First Out) data structure. Operations: enqueue (add), dequeue (remove), front (view first). O(1) ops. Used for BFS, scheduling.',
        difficulty: 'easy',
      },
      {
        id: 'sq-3',
        topicId: 'stacks-queues',
        question: 'What is a Monotonic Stack?',
        answer: 'A stack that maintains elements in monotonic (increasing/decreasing) order. Used for next greater/smaller element problems.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'sq-ct-1',
        topicId: 'stacks-queues',
        title: 'Stack and Queue Patterns',
        description: 'Common stack and queue applications',
        python: `# Valid Parentheses
def is_valid_parentheses(s):
    stack = []
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in s:
        if char in pairs:
            stack.append(char)
        elif not stack or pairs[stack.pop()] != char:
            return False
    
    return len(stack) == 0

# Daily Temperatures (Monotonic Stack)
def daily_temperatures(temperatures):
    result = [0] * len(temperatures)
    stack = []
    
    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            prev_index = stack.pop()
            result[prev_index] = i - prev_index
        stack.append(i)
    
    return result

# Implement Queue using Stacks
class QueueWithStacks:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    
    def enqueue(self, x):
        self.stack1.append(x)
    
    def dequeue(self):
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2.pop() if self.stack2 else None
    
    def peek(self):
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2[-1] if self.stack2 else None

# Min Stack
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    
    def push(self, x):
        self.stack.append(x)
        if not self.min_stack or x <= self.min_stack[-1]:
            self.min_stack.append(x)
    
    def pop(self):
        if self.stack:
            val = self.stack.pop()
            if val == self.min_stack[-1]:
                self.min_stack.pop()
            return val
    
    def get_min(self):
        return self.min_stack[-1] if self.min_stack else None

# Sliding Window Maximum (Deque)
from collections import deque

def max_sliding_window(nums, k):
    result = []
    dq = deque()
    
    for i in range(len(nums)):
        # Remove indices outside window
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove smaller elements
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()
        
        dq.append(i)
        
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result`,
        javascript: `// Valid Parentheses
function isValidParentheses(s) {
    const stack = [];
    const pairs = {'(': ')', '[': ']', '{': '}'};
    
    for (const char of s) {
        if (char in pairs) {
            stack.push(char);
        } else if (stack.length === 0 || pairs[stack.pop()] !== char) {
            return false;
        }
    }
    
    return stack.length === 0;
}

// Daily Temperatures (Monotonic Stack)
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}

// Implement Queue using Stacks
class QueueWithStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(x) {
        this.stack1.push(x);
    }
    
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.length > 0 ? this.stack2.pop() : null;
    }
    
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : null;
    }
}

// Min Stack
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        }
    }
    
    pop() {
        if (this.stack.length > 0) {
            const val = this.stack.pop();
            if (val === this.minStack[this.minStack.length - 1]) {
                this.minStack.pop();
            }
            return val;
        }
    }
    
    getMin() {
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null;
    }
}

// Sliding Window Maximum
function maxSlidingWindow(nums, k) {
    const result = [];
    const dq = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices outside window
        while (dq.length > 0 && dq[0] < i - k + 1) {
            dq.shift();
        }
        
        // Remove smaller elements
        while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop();
        }
        
        dq.push(i);
        
        if (i >= k - 1) {
            result.push(nums[dq[0]]);
        }
    }
    
    return result;
}`,
      },
    ],
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    description: 'Master singly and doubly linked list operations',
    icon: '🔗',
    flashcards: [
      {
        id: 'll-1',
        topicId: 'linked-lists',
        question: 'What is a Linked List?',
        answer: 'A linear data structure where elements (nodes) contain data and a pointer to the next node. O(1) insertion/deletion, O(n) access.',
        difficulty: 'easy',
      },
      {
        id: 'll-2',
        topicId: 'linked-lists',
        question: 'Singly vs Doubly Linked List?',
        answer: 'Singly: one pointer (next). Doubly: two pointers (next, prev). Doubly allows backward traversal but uses more memory.',
        difficulty: 'easy',
      },
      {
        id: 'll-3',
        topicId: 'linked-lists',
        question: 'How to reverse a linked list?',
        answer: 'Iterative: Use three pointers (prev, curr, next). Recursive: Reverse rest of list, then fix pointers. Both O(n) time, O(1)/O(n) space.',
        difficulty: 'medium',
      },
      {
        id: 'll-4',
        topicId: 'linked-lists',
        question: 'Common linked list patterns?',
        answer: 'Fast-slow pointers, dummy node, in-place reversal, merge operations, detecting cycles.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'll-ct-1',
        topicId: 'linked-lists',
        title: 'Linked List Operations',
        description: 'Essential linked list algorithms',
        python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Reverse Linked List
def reverse_list(head):
    prev = None
    curr = head
    
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    
    return prev

# Merge Two Sorted Lists
def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    
    while l1 and l2:
        if l1.val <= l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    
    curr.next = l1 if l1 else l2
    return dummy.next

# Remove Nth Node From End
def remove_nth_from_end(head, n):
    dummy = ListNode(0)
    dummy.next = head
    fast = slow = dummy
    
    # Move fast n steps ahead
    for _ in range(n):
        fast = fast.next
    
    # Move both until fast reaches end
    while fast.next:
        fast = fast.next
        slow = slow.next
    
    # Remove nth node
    slow.next = slow.next.next
    return dummy.next

# Reorder List (L0→Ln→L1→Ln-1→L2→Ln-2→...)
def reorder_list(head):
    if not head or not head.next:
        return
    
    # Find middle
    slow = fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    
    # Reverse second half
    second = slow.next
    slow.next = None
    second = reverse_list(second)
    
    # Merge two halves
    first = head
    while second:
        temp1 = first.next
        temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2

# Add Two Numbers
def add_two_numbers(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        total = val1 + val2 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        
        curr = curr.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    
    return dummy.next`,
        javascript: `class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Reverse Linked List
function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
}

// Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;
    return dummy.next;
}

// Remove Nth Node From End
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    
    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove nth node
    slow.next = slow.next.next;
    return dummy.next;
}

// Reorder List
function reorderList(head) {
    if (!head || !head.next) {
        return;
    }
    
    // Find middle
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let second = slow.next;
    slow.next = null;
    second = reverseList(second);
    
    // Merge two halves
    let first = head;
    while (second) {
        const temp1 = first.next;
        const temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}

// Add Two Numbers
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        const total = val1 + val2 + carry;
        carry = Math.floor(total / 10);
        curr.next = new ListNode(total % 10);
        
        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
}`,
      },
    ],
  },
  {
    id: 'heaps',
    name: 'Heaps',
    description: 'Priority queues and heap data structure operations',
    icon: '⛰️',
    flashcards: [
      {
        id: 'hp-1',
        topicId: 'heaps',
        question: 'What is a Heap?',
        answer: 'A complete binary tree where parent is always larger (max heap) or smaller (min heap) than children. Used for priority queues.',
        difficulty: 'easy',
      },
      {
        id: 'hp-2',
        topicId: 'heaps',
        question: 'Heap operations complexity?',
        answer: 'Insert: O(log n), Extract min/max: O(log n), Peek: O(1), Heapify: O(n). Building heap from array is O(n).',
        difficulty: 'medium',
      },
      {
        id: 'hp-3',
        topicId: 'heaps',
        question: 'When to use heaps?',
        answer: 'Top K elements, median finding, task scheduling, merge K sorted lists, Dijkstra\'s algorithm.',
        difficulty: 'medium',
      },
      {
        id: 'hp-4',
        topicId: 'heaps',
        question: 'Heap vs BST?',
        answer: 'Heap: faster insertion/deletion O(log n), only min/max access. BST: sorted order, range queries possible.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'hp-ct-1',
        topicId: 'heaps',
        title: 'Heap Applications',
        description: 'Common heap-based algorithms',
        python: `import heapq

# Kth Largest Element
def find_kth_largest(nums, k):
    # Min heap of size k
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]

# Top K Frequent Elements
def top_k_frequent(nums, k):
    from collections import Counter
    count = Counter(nums)
    # Use negative frequency for max heap
    return [num for num, _ in count.most_common(k)]

# Merge K Sorted Lists
def merge_k_lists(lists):
    heap = []
    dummy = ListNode(0)
    curr = dummy
    
    # Initialize heap
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    
    # Extract min and add next
    while heap:
        val, i, node = heapq.heappop(heap)
        curr.next = node
        curr = curr.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    
    return dummy.next

# Find Median from Data Stream
class MedianFinder:
    def __init__(self):
        self.small = []  # Max heap (negate values)
        self.large = []  # Min heap
    
    def add_num(self, num):
        heapq.heappush(self.small, -num)
        
        # Balance heaps
        if self.small and self.large and -self.small[0] > self.large[0]:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        
        # Maintain size property
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        if len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)
    
    def find_median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2

# Task Scheduler
def least_interval(tasks, n):
    from collections import Counter
    count = Counter(tasks)
    max_freq = max(count.values())
    max_count = sum(1 for c in count.values() if c == max_freq)
    
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)`,
        javascript: `// Note: JavaScript doesn't have built-in heap
// Using array-based min heap implementation

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    
    bubbleDown(idx) {
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === idx) break;
            
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

// Kth Largest Element
function findKthLargest(nums, k) {
    const heap = new MinHeap();
    for (const num of nums) {
        heap.push(num);
        if (heap.size() > k) {
            heap.pop();
        }
    }
    return heap.peek();
}

// Find Median from Data Stream
class MedianFinder {
    constructor() {
        this.small = [];  // Max heap (negate values)
        this.large = [];  // Min heap
    }
    
    addNum(num) {
        // Simplified implementation
        this.small.push(num);
        this.small.sort((a, b) => b - a);
        
        if (this.small.length > this.large.length + 1) {
            this.large.push(this.small.shift());
            this.large.sort((a, b) => a - b);
        }
    }
    
    findMedian() {
        if (this.small.length > this.large.length) {
            return this.small[0];
        }
        return (this.small[0] + this.large[0]) / 2;
    }
}`,
      },
    ],
  },
  {
    id: 'recursion-backtracking',
    name: 'Recursion & Backtracking',
    description: 'Solve problems by exploring all possibilities recursively',
    icon: '🔁',
    flashcards: [
      {
        id: 'rb-1',
        topicId: 'recursion-backtracking',
        question: 'What is Recursion?',
        answer: 'A function that calls itself with a smaller problem until reaching a base case. Essential for divide-and-conquer, tree traversal.',
        difficulty: 'easy',
      },
      {
        id: 'rb-2',
        topicId: 'recursion-backtracking',
        question: 'What is Backtracking?',
        answer: 'A recursive algorithm that explores all possibilities by making choices and undoing them if they lead to invalid solutions.',
        difficulty: 'medium',
      },
      {
        id: 'rb-3',
        topicId: 'recursion-backtracking',
        question: 'Common backtracking problems?',
        answer: 'N-Queens, Sudoku solver, permutations, combinations, subsets, word search, palindrome partitioning.',
        difficulty: 'medium',
      },
      {
        id: 'rb-4',
        topicId: 'recursion-backtracking',
        question: 'Recursion vs Iteration?',
        answer: 'Recursion: cleaner code, natural for trees/graphs, O(n) stack space. Iteration: O(1) space, no stack overflow risk.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'rb-ct-1',
        topicId: 'recursion-backtracking',
        title: 'Recursion and Backtracking Patterns',
        description: 'Classic recursive and backtracking algorithms',
        python: `# Generate All Subsets
def subsets(nums):
    result = []
    
    def backtrack(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    
    backtrack(0, [])
    return result

# Generate Permutations
def permute(nums):
    result = []
    
    def backtrack(path):
        if len(path) == len(nums):
            result.append(path[:])
            return
        
        for num in nums:
            if num not in path:
                path.append(num)
                backtrack(path)
                path.pop()
    
    backtrack([])
    return result

# Combination Sum
def combination_sum(candidates, target):
    result = []
    
    def backtrack(start, target, path):
        if target == 0:
            result.append(path[:])
            return
        if target < 0:
            return
        
        for i in range(start, len(candidates)):
            path.append(candidates[i])
            backtrack(i, target - candidates[i], path)
            path.pop()
    
    backtrack(0, target, [])
    return result

# N-Queens
def solve_n_queens(n):
    result = []
    board = [['.'] * n for _ in range(n)]
    
    def is_valid(row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        # Check diagonals
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1
        
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1
        
        return True
    
    def backtrack(row):
        if row == n:
            result.append([''.join(row) for row in board])
            return
        
        for col in range(n):
            if is_valid(row, col):
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'
    
    backtrack(0)
    return result

# Word Search
def exist(board, word):
    rows, cols = len(board), len(board[0])
    
    def backtrack(r, c, index):
        if index == len(word):
            return True
        
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            board[r][c] != word[index]):
            return False
        
        temp = board[r][c]
        board[r][c] = '#'
        
        found = (backtrack(r+1, c, index+1) or
                 backtrack(r-1, c, index+1) or
                 backtrack(r, c+1, index+1) or
                 backtrack(r, c-1, index+1))
        
        board[r][c] = temp
        return found
    
    for r in range(rows):
        for c in range(cols):
            if backtrack(r, c, 0):
                return True
    return False`,
        javascript: `// Generate All Subsets
function subsets(nums) {
    const result = [];
    
    function backtrack(start, path) {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

// Generate Permutations
function permute(nums) {
    const result = [];
    
    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        for (const num of nums) {
            if (!path.includes(num)) {
                path.push(num);
                backtrack(path);
                path.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}

// Combination Sum
function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, target, path) {
        if (target === 0) {
            result.push([...path]);
            return;
        }
        if (target < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, target - candidates[i], path);
            path.pop();
        }
    }
    
    backtrack(0, target, []);
    return result;
}

// N-Queens
function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isValid(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        
        // Check diagonals
        let i = row - 1, j = col - 1;
        while (i >= 0 && j >= 0) {
            if (board[i][j] === 'Q') return false;
            i--;
            j--;
        }
        
        i = row - 1;
        j = col + 1;
        while (i >= 0 && j < n) {
            if (board[i][j] === 'Q') return false;
            i--;
            j++;
        }
        
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
}

// Word Search
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    function backtrack(r, c, index) {
        if (index === word.length) {
            return true;
        }
        
        if (r < 0 || r >= rows || c < 0 || c >= cols || 
            board[r][c] !== word[index]) {
            return false;
        }
        
        const temp = board[r][c];
        board[r][c] = '#';
        
        const found = backtrack(r+1, c, index+1) ||
                      backtrack(r-1, c, index+1) ||
                      backtrack(r, c+1, index+1) ||
                      backtrack(r, c-1, index+1);
        
        board[r][c] = temp;
        return found;
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (backtrack(r, c, 0)) {
                return true;
            }
        }
    }
    return false;
}`,
      },
    ],
  },
  {
    id: 'system-design-overview',
    name: 'System Design Overview',
    description: 'Fundamentals of designing scalable systems and architecture',
    icon: '🏛️',
    flashcards: [
      {
        id: 'sdo-1',
        topicId: 'system-design-overview',
        question: 'What are key system design principles?',
        answer: 'Scalability, reliability, availability, maintainability, fault tolerance, performance, consistency, and trade-offs (CAP theorem).',
        difficulty: 'easy',
      },
      {
        id: 'sdo-2',
        topicId: 'system-design-overview',
        question: 'What is horizontal vs vertical scaling?',
        answer: 'Vertical: add more power (CPU, RAM) to one machine. Horizontal: add more machines. Horizontal is preferred for scalability.',
        difficulty: 'medium',
      },
      {
        id: 'sdo-3',
        topicId: 'system-design-overview',
        question: 'What is the CAP theorem?',
        answer: 'In distributed systems, you can have at most 2 of 3: Consistency (all nodes see same data), Availability (system responds), Partition tolerance (works despite network failures).',
        difficulty: 'hard',
      },
      {
        id: 'sdo-4',
        topicId: 'system-design-overview',
        question: 'What are common architectural patterns?',
        answer: 'Monolithic, microservices, event-driven, layered, client-server, peer-to-peer, service-oriented architecture (SOA).',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'sdo-ct-1',
        topicId: 'system-design-overview',
        title: 'System Design Concepts',
        description: 'Key components and patterns in system design',
        python: `# Load Balancer Example (Round Robin)
class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.current = 0
    
    def get_server(self):
        server = self.servers[self.current]
        self.current = (self.current + 1) % len(self.servers)
        return server

# Rate Limiter (Token Bucket)
import time

class RateLimiter:
    def __init__(self, capacity, refill_rate):
        self.capacity = capacity
        self.tokens = capacity
        self.refill_rate = refill_rate
        self.last_refill = time.time()
    
    def allow_request(self):
        self._refill()
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
    
    def _refill(self):
        now = time.time()
        tokens_to_add = (now - self.last_refill) * self.refill_rate
        self.tokens = min(self.capacity, self.tokens + tokens_to_add)
        self.last_refill = now

# Circuit Breaker Pattern
class CircuitBreaker:
    def __init__(self, failure_threshold, timeout):
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.failures = 0
        self.last_failure_time = None
        self.state = 'CLOSED'  # CLOSED, OPEN, HALF_OPEN
    
    def call(self, func, *args, **kwargs):
        if self.state == 'OPEN':
            if time.time() - self.last_failure_time > self.timeout:
                self.state = 'HALF_OPEN'
            else:
                raise Exception("Circuit breaker is OPEN")
        
        try:
            result = func(*args, **kwargs)
            self.on_success()
            return result
        except Exception as e:
            self.on_failure()
            raise e
    
    def on_success(self):
        self.failures = 0
        self.state = 'CLOSED'
    
    def on_failure(self):
        self.failures += 1
        self.last_failure_time = time.time()
        if self.failures >= self.failure_threshold:
            self.state = 'OPEN'

# Consistent Hashing
import hashlib

class ConsistentHash:
    def __init__(self, nodes, replicas=3):
        self.replicas = replicas
        self.ring = {}
        self.sorted_keys = []
        for node in nodes:
            self.add_node(node)
    
    def add_node(self, node):
        for i in range(self.replicas):
            key = self._hash(f"{node}:{i}")
            self.ring[key] = node
            self.sorted_keys.append(key)
        self.sorted_keys.sort()
    
    def get_node(self, key):
        if not self.ring:
            return None
        hash_key = self._hash(key)
        for ring_key in self.sorted_keys:
            if hash_key <= ring_key:
                return self.ring[ring_key]
        return self.ring[self.sorted_keys[0]]
    
    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)`,
        javascript: `// Load Balancer Example (Round Robin)
class LoadBalancer {
    constructor(servers) {
        this.servers = servers;
        this.current = 0;
    }
    
    getServer() {
        const server = this.servers[this.current];
        this.current = (this.current + 1) % this.servers.length;
        return server;
    }
}

// Rate Limiter (Token Bucket)
class RateLimiter {
    constructor(capacity, refillRate) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillRate = refillRate;
        this.lastRefill = Date.now();
    }
    
    allowRequest() {
        this._refill();
        if (this.tokens >= 1) {
            this.tokens -= 1;
            return true;
        }
        return false;
    }
    
    _refill() {
        const now = Date.now();
        const tokensToAdd = ((now - this.lastRefill) / 1000) * this.refillRate;
        this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
        this.lastRefill = now;
    }
}

// Circuit Breaker Pattern
class CircuitBreaker {
    constructor(failureThreshold, timeout) {
        this.failureThreshold = failureThreshold;
        this.timeout = timeout;
        this.failures = 0;
        this.lastFailureTime = null;
        this.state = 'CLOSED';  // CLOSED, OPEN, HALF_OPEN
    }
    
    async call(func, ...args) {
        if (this.state === 'OPEN') {
            if (Date.now() - this.lastFailureTime > this.timeout) {
                this.state = 'HALF_OPEN';
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }
        
        try {
            const result = await func(...args);
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }
    
    onSuccess() {
        this.failures = 0;
        this.state = 'CLOSED';
    }
    
    onFailure() {
        this.failures += 1;
        this.lastFailureTime = Date.now();
        if (this.failures >= this.failureThreshold) {
            this.state = 'OPEN';
        }
    }
}

// Consistent Hashing
const crypto = require('crypto');

class ConsistentHash {
    constructor(nodes, replicas = 3) {
        this.replicas = replicas;
        this.ring = new Map();
        this.sortedKeys = [];
        for (const node of nodes) {
            this.addNode(node);
        }
    }
    
    addNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const key = this._hash(\`\${node}:\${i}\`);
            this.ring.set(key, node);
            this.sortedKeys.push(key);
        }
        this.sortedKeys.sort((a, b) => a - b);
    }
    
    getNode(key) {
        if (this.ring.size === 0) {
            return null;
        }
        const hashKey = this._hash(key);
        for (const ringKey of this.sortedKeys) {
            if (hashKey <= ringKey) {
                return this.ring.get(ringKey);
            }
        }
        return this.ring.get(this.sortedKeys[0]);
    }
    
    _hash(key) {
        return parseInt(crypto.createHash('md5').update(key).digest('hex'), 16);
    }
}`,
      },
    ],
  },
  {
    id: 'networking-api',
    name: 'Networking & API Design',
    description: 'RESTful APIs, protocols, and network communication',
    icon: '🌐',
    flashcards: [
      {
        id: 'na-1',
        topicId: 'networking-api',
        question: 'What is REST?',
        answer: 'Representational State Transfer - architectural style using HTTP methods (GET, POST, PUT, DELETE) for stateless communication between client and server.',
        difficulty: 'easy',
      },
      {
        id: 'na-2',
        topicId: 'networking-api',
        question: 'HTTP vs HTTPS vs WebSocket?',
        answer: 'HTTP: unencrypted request-response. HTTPS: encrypted HTTP with SSL/TLS. WebSocket: bidirectional persistent connection for real-time communication.',
        difficulty: 'medium',
      },
      {
        id: 'na-3',
        topicId: 'networking-api',
        question: 'What is API versioning?',
        answer: 'Managing API changes without breaking existing clients. Methods: URL path (/v1/users), header (Accept-Version), query param (?version=1).',
        difficulty: 'medium',
      },
      {
        id: 'na-4',
        topicId: 'networking-api',
        question: 'REST vs GraphQL vs gRPC?',
        answer: 'REST: resource-based, over-fetching. GraphQL: query exactly what you need. gRPC: binary protocol, fast, for microservices.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'na-ct-1',
        topicId: 'networking-api',
        title: 'API Design Patterns',
        description: 'Common patterns for designing APIs',
        python: `# RESTful API Example (Flask)
from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory database
users = {}
user_id_counter = 1

@app.route('/api/v1/users', methods=['GET'])
def get_users():
    return jsonify(list(users.values()))

@app.route('/api/v1/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = users.get(user_id)
    if user:
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

@app.route('/api/v1/users', methods=['POST'])
def create_user():
    global user_id_counter
    data = request.get_json()
    user = {
        'id': user_id_counter,
        'name': data.get('name'),
        'email': data.get('email')
    }
    users[user_id_counter] = user
    user_id_counter += 1
    return jsonify(user), 201

@app.route('/api/v1/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    if user_id not in users:
        return jsonify({'error': 'User not found'}), 404
    data = request.get_json()
    users[user_id].update(data)
    return jsonify(users[user_id])

@app.route('/api/v1/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    if user_id in users:
        del users[user_id]
        return '', 204
    return jsonify({'error': 'User not found'}), 404

# Pagination Example
@app.route('/api/v1/posts', methods=['GET'])
def get_posts():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    
    # Simulate pagination
    start = (page - 1) * per_page
    end = start + per_page
    
    return jsonify({
        'data': posts[start:end],
        'page': page,
        'per_page': per_page,
        'total': len(posts)
    })

# API Authentication Middleware
def require_auth(f):
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token or not validate_token(token):
            return jsonify({'error': 'Unauthorized'}), 401
        return f(*args, **kwargs)
    return decorated

def validate_token(token):
    # Implement token validation
    return token == 'valid-token'`,
        javascript: `// RESTful API Example (Express.js)
const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
const users = {};
let userIdCounter = 1;

app.get('/api/v1/users', (req, res) => {
    res.json(Object.values(users));
});

app.get('/api/v1/users/:id', (req, res) => {
    const user = users[req.params.id];
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.post('/api/v1/users', (req, res) => {
    const user = {
        id: userIdCounter,
        name: req.body.name,
        email: req.body.email
    };
    users[userIdCounter] = user;
    userIdCounter += 1;
    res.status(201).json(user);
});

app.put('/api/v1/users/:id', (req, res) => {
    const userId = req.params.id;
    if (!users[userId]) {
        return res.status(404).json({ error: 'User not found' });
    }
    users[userId] = { ...users[userId], ...req.body };
    res.json(users[userId]);
});

app.delete('/api/v1/users/:id', (req, res) => {
    const userId = req.params.id;
    if (users[userId]) {
        delete users[userId];
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Pagination Example
app.get('/api/v1/posts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.per_page) || 10;
    
    const start = (page - 1) * perPage;
    const end = start + perPage;
    
    res.json({
        data: posts.slice(start, end),
        page: page,
        per_page: perPage,
        total: posts.length
    });
});

// API Authentication Middleware
function requireAuth(req, res, next) {
    const token = req.headers.authorization;
    if (!token || !validateToken(token)) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

function validateToken(token) {
    // Implement token validation
    return token === 'valid-token';
}

// Protected route example
app.get('/api/v1/protected', requireAuth, (req, res) => {
    res.json({ message: 'Protected data' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});`,
      },
    ],
  },
  {
    id: 'scalable-systems',
    name: 'Scalable Systems',
    description: 'Design systems that handle growing traffic and data',
    icon: '📈',
    flashcards: [
      {
        id: 'scl-1',
        topicId: 'scalable-systems',
        question: 'What is caching and why use it?',
        answer: 'Storing frequently accessed data in fast storage (Redis, Memcached) to reduce database load and improve response times. Common patterns: cache-aside, write-through.',
        difficulty: 'medium',
      },
      {
        id: 'scl-2',
        topicId: 'scalable-systems',
        question: 'What is CDN?',
        answer: 'Content Delivery Network - geographically distributed servers that cache static content closer to users for faster delivery.',
        difficulty: 'easy',
      },
      {
        id: 'scl-3',
        topicId: 'scalable-systems',
        question: 'Database sharding vs replication?',
        answer: 'Sharding: split data across multiple databases for scalability. Replication: copy data to multiple databases for reliability and read performance.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'scl-ct-1',
        topicId: 'scalable-systems',
        title: 'Caching Strategies',
        description: 'Implementing caching patterns',
        python: `# Cache-Aside Pattern
import redis

class CacheAside:
    def __init__(self):
        self.cache = redis.Redis(host='localhost', port=6379)
        self.ttl = 3600  # 1 hour
    
    def get(self, key):
        # Try cache first
        cached = self.cache.get(key)
        if cached:
            return cached.decode()
        
        # Cache miss - get from database
        value = self.get_from_database(key)
        
        # Store in cache
        if value:
            self.cache.setex(key, self.ttl, value)
        
        return value
    
    def get_from_database(self, key):
        # Simulate database query
        return f"data_{key}"

# Write-Through Cache
class WriteThrough:
    def __init__(self):
        self.cache = {}
        self.database = {}
    
    def write(self, key, value):
        # Write to cache and database
        self.cache[key] = value
        self.database[key] = value
    
    def read(self, key):
        # Read from cache
        if key in self.cache:
            return self.cache[key]
        
        # Cache miss
        if key in self.database:
            value = self.database[key]
            self.cache[key] = value
            return value
        
        return None`,
        javascript: `// Cache-Aside Pattern
const Redis = require('redis');

class CacheAside {
    constructor() {
        this.cache = Redis.createClient();
        this.ttl = 3600;  // 1 hour
    }
    
    async get(key) {
        // Try cache first
        const cached = await this.cache.get(key);
        if (cached) {
            return cached;
        }
        
        // Cache miss - get from database
        const value = await this.getFromDatabase(key);
        
        // Store in cache
        if (value) {
            await this.cache.setEx(key, this.ttl, value);
        }
        
        return value;
    }
    
    async getFromDatabase(key) {
        // Simulate database query
        return \`data_\${key}\`;
    }
}

// Write-Through Cache
class WriteThrough {
    constructor() {
        this.cache = new Map();
        this.database = new Map();
    }
    
    write(key, value) {
        // Write to cache and database
        this.cache.set(key, value);
        this.database.set(key, value);
    }
    
    read(key) {
        // Read from cache
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }
        
        // Cache miss
        if (this.database.has(key)) {
            const value = this.database.get(key);
            this.cache.set(key, value);
            return value;
        }
        
        return null;
    }
}`,
      },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'SQL, NoSQL, and database design principles',
    icon: '💾',
    flashcards: [
      {
        id: 'db-1',
        topicId: 'databases',
        question: 'SQL vs NoSQL databases?',
        answer: 'SQL: structured, ACID, relational (MySQL, PostgreSQL). NoSQL: flexible schema, eventual consistency, horizontal scaling (MongoDB, Cassandra, Redis).',
        difficulty: 'easy',
      },
      {
        id: 'db-2',
        topicId: 'databases',
        question: 'What is database indexing?',
        answer: 'Data structure that improves query speed. Trade-off: faster reads but slower writes and extra storage. Use B-trees, hash indexes.',
        difficulty: 'medium',
      },
      {
        id: 'db-3',
        topicId: 'databases',
        question: 'What is database normalization?',
        answer: 'Organizing data to reduce redundancy. 1NF: atomic values, 2NF: no partial dependencies, 3NF: no transitive dependencies. Denormalize for performance.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'db-ct-1',
        topicId: 'databases',
        title: 'Database Operations',
        description: 'Common database patterns and queries',
        python: `# SQL Query Examples
import sqlite3

class DatabaseOperations:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()
    
    def create_users_table(self):
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        self.conn.commit()
    
    def insert_user(self, name, email):
        try:
            self.cursor.execute(
                "INSERT INTO users (name, email) VALUES (?, ?)",
                (name, email)
            )
            self.conn.commit()
            return self.cursor.lastrowid
        except sqlite3.IntegrityError:
            return None
    
    def get_user_by_email(self, email):
        self.cursor.execute(
            "SELECT * FROM users WHERE email = ?",
            (email,)
        )
        return self.cursor.fetchone()
    
    def get_users_paginated(self, page=1, per_page=10):
        offset = (page - 1) * per_page
        self.cursor.execute(
            "SELECT * FROM users LIMIT ? OFFSET ?",
            (per_page, offset)
        )
        return self.cursor.fetchall()

# MongoDB Example
from pymongo import MongoClient

class MongoOperations:
    def __init__(self):
        self.client = MongoClient('localhost', 27017)
        self.db = self.client['mydb']
        self.users = self.db['users']
    
    def insert_user(self, user_data):
        result = self.users.insert_one(user_data)
        return result.inserted_id
    
    def find_users(self, query):
        return list(self.users.find(query))
    
    def update_user(self, user_id, update_data):
        result = self.users.update_one(
            {'_id': user_id},
            {'$set': update_data}
        )
        return result.modified_count
    
    def delete_user(self, user_id):
        result = self.users.delete_one({'_id': user_id})
        return result.deleted_count`,
        javascript: `// SQL Query Examples (using pg for PostgreSQL)
const { Pool } = require('pg');

class DatabaseOperations {
    constructor() {
        this.pool = new Pool({
            host: 'localhost',
            database: 'mydb',
            user: 'user',
            password: 'password'
        });
    }
    
    async createUsersTable() {
        await this.pool.query(\`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        \`);
    }
    
    async insertUser(name, email) {
        try {
            const result = await this.pool.query(
                'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id',
                [name, email]
            );
            return result.rows[0].id;
        } catch (error) {
            return null;
        }
    }
    
    async getUserByEmail(email) {
        const result = await this.pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        return result.rows[0];
    }
    
    async getUsersPaginated(page = 1, perPage = 10) {
        const offset = (page - 1) * perPage;
        const result = await this.pool.query(
            'SELECT * FROM users LIMIT $1 OFFSET $2',
            [perPage, offset]
        );
        return result.rows;
    }
}

// MongoDB Example
const { MongoClient } = require('mongodb');

class MongoOperations {
    constructor() {
        this.client = new MongoClient('mongodb://localhost:27017');
        this.dbName = 'mydb';
    }
    
    async connect() {
        await this.client.connect();
        this.db = this.client.db(this.dbName);
        this.users = this.db.collection('users');
    }
    
    async insertUser(userData) {
        const result = await this.users.insertOne(userData);
        return result.insertedId;
    }
    
    async findUsers(query) {
        return await this.users.find(query).toArray();
    }
    
    async updateUser(userId, updateData) {
        const result = await this.users.updateOne(
            { _id: userId },
            { $set: updateData }
        );
        return result.modifiedCount;
    }
    
    async deleteUser(userId) {
        const result = await this.users.deleteOne({ _id: userId });
        return result.deletedCount;
    }
}`,
      },
    ],
  },
  {
    id: 'distributed-systems',
    name: 'Distributed Systems',
    description: 'Build fault-tolerant systems across multiple machines',
    icon: '🌍',
    flashcards: [
      {
        id: 'ds-1',
        topicId: 'distributed-systems',
        question: 'What is eventual consistency?',
        answer: 'All replicas will eventually be consistent if no new updates. Trade-off: availability over immediate consistency.',
        difficulty: 'medium',
      },
      {
        id: 'ds-2',
        topicId: 'distributed-systems',
        question: 'What is a message queue?',
        answer: 'Async communication pattern (RabbitMQ, Kafka). Producers send messages, consumers process them. Decouples services, enables scaling.',
        difficulty: 'easy',
      },
      {
        id: 'ds-3',
        topicId: 'distributed-systems',
        question: 'What is the Two-Phase Commit?',
        answer: 'Distributed transaction protocol. Phase 1: prepare (all nodes vote). Phase 2: commit/abort. Ensures atomicity across multiple databases.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'ds-ct-1',
        topicId: 'distributed-systems',
        title: 'Distributed System Patterns',
        description: 'Message queues and distributed coordination',
        python: `# Message Queue Producer
import pika

class MessageProducer:
    def __init__(self, queue_name):
        self.connection = pika.BlockingConnection(
            pika.ConnectionParameters('localhost')
        )
        self.channel = self.connection.channel()
        self.queue_name = queue_name
        self.channel.queue_declare(queue=queue_name)
    
    def send_message(self, message):
        self.channel.basic_publish(
            exchange='',
            routing_key=self.queue_name,
            body=message
        )
    
    def close(self):
        self.connection.close()

# Message Queue Consumer
class MessageConsumer:
    def __init__(self, queue_name):
        self.connection = pika.BlockingConnection(
            pika.ConnectionParameters('localhost')
        )
        self.channel = self.connection.channel()
        self.queue_name = queue_name
        self.channel.queue_declare(queue=queue_name)
    
    def callback(self, ch, method, properties, body):
        print(f"Received message: {body.decode()}")
        # Process message
        ch.basic_ack(delivery_tag=method.delivery_tag)
    
    def start_consuming(self):
        self.channel.basic_consume(
            queue=self.queue_name,
            on_message_callback=self.callback
        )
        self.channel.start_consuming()

# Distributed Lock (using Redis)
import redis
import time
import uuid

class DistributedLock:
    def __init__(self, redis_client, lock_name, timeout=10):
        self.redis = redis_client
        self.lock_name = lock_name
        self.timeout = timeout
        self.identifier = str(uuid.uuid4())
    
    def acquire(self):
        end = time.time() + self.timeout
        while time.time() < end:
            if self.redis.set(
                self.lock_name, 
                self.identifier, 
                nx=True, 
                ex=self.timeout
            ):
                return True
            time.sleep(0.001)
        return False
    
    def release(self):
        pipe = self.redis.pipeline(True)
        while True:
            try:
                pipe.watch(self.lock_name)
                if pipe.get(self.lock_name).decode() == self.identifier:
                    pipe.multi()
                    pipe.delete(self.lock_name)
                    pipe.execute()
                    return True
                pipe.unwatch()
                break
            except redis.WatchError:
                pass
        return False`,
        javascript: `// Message Queue Producer (RabbitMQ)
const amqp = require('amqplib');

class MessageProducer {
    async connect(queueName) {
        this.connection = await amqp.connect('amqp://localhost');
        this.channel = await this.connection.createChannel();
        this.queueName = queueName;
        await this.channel.assertQueue(queueName);
    }
    
    async sendMessage(message) {
        this.channel.sendToQueue(
            this.queueName,
            Buffer.from(message)
        );
    }
    
    async close() {
        await this.channel.close();
        await this.connection.close();
    }
}

// Message Queue Consumer
class MessageConsumer {
    async connect(queueName) {
        this.connection = await amqp.connect('amqp://localhost');
        this.channel = await this.connection.createChannel();
        this.queueName = queueName;
        await this.channel.assertQueue(queueName);
    }
    
    async startConsuming(callback) {
        this.channel.consume(this.queueName, (msg) => {
            if (msg !== null) {
                const content = msg.content.toString();
                console.log(\`Received: \${content}\`);
                callback(content);
                this.channel.ack(msg);
            }
        });
    }
}

// Distributed Lock (using Redis)
const Redis = require('redis');
const { v4: uuidv4 } = require('uuid');

class DistributedLock {
    constructor(lockName, timeout = 10000) {
        this.redis = Redis.createClient();
        this.lockName = lockName;
        this.timeout = timeout;
        this.identifier = uuidv4();
    }
    
    async acquire() {
        const end = Date.now() + this.timeout;
        while (Date.now() < end) {
            const result = await this.redis.set(
                this.lockName,
                this.identifier,
                {
                    NX: true,
                    EX: Math.floor(this.timeout / 1000)
                }
            );
            if (result === 'OK') {
                return true;
            }
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        return false;
    }
    
    async release() {
        const value = await this.redis.get(this.lockName);
        if (value === this.identifier) {
            await this.redis.del(this.lockName);
            return true;
        }
        return false;
    }
}`,
      },
    ],
  },
  {
    id: 'behavioral-overview',
    name: 'Behavioral Interview Overview',
    description: 'Master behavioral interviews with the STAR method',
    icon: '💬',
    flashcards: [
      {
        id: 'bo-1',
        topicId: 'behavioral-overview',
        question: 'What is the STAR method?',
        answer: 'Framework for answering behavioral questions: Situation (context), Task (responsibility), Action (what you did), Result (outcome and learnings).',
        difficulty: 'easy',
      },
      {
        id: 'bo-2',
        topicId: 'behavioral-overview',
        question: 'Common behavioral question categories?',
        answer: 'Leadership, teamwork, conflict resolution, problem-solving, adaptability, time management, failure/mistakes, achievements.',
        difficulty: 'easy',
      },
      {
        id: 'bo-3',
        topicId: 'behavioral-overview',
        question: 'How to prepare for behavioral interviews?',
        answer: 'Prepare 8-10 stories covering different competencies. Use STAR format. Practice out loud. Be specific with metrics and outcomes.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'bo-ct-1',
        topicId: 'behavioral-overview',
        title: 'STAR Method Examples',
        description: 'Sample behavioral interview responses',
        python: `"""
STAR Method Template:

Situation: Set the context
- Where were you?
- What was the challenge?
- Who was involved?

Task: Define your responsibility
- What was your role?
- What needed to be accomplished?
- What were the constraints?

Action: Explain what you did
- What specific steps did you take?
- Why did you choose this approach?
- What was your thought process?

Result: Share the outcome
- What was the impact?
- What did you learn?
- What would you do differently?

Example: "Tell me about a time you resolved a conflict"

Situation: 
"During a project at my previous company, two senior engineers 
had opposing views on the architecture design - one wanted 
microservices, the other preferred monolithic."

Task:
"As the tech lead, I needed to facilitate a decision that would 
keep the project on schedule while ensuring technical soundness."

Action:
"I organized a structured design review where each engineer 
presented their approach with pros/cons. I created a decision 
matrix evaluating scalability, maintainability, and time-to-market. 
We also prototyped critical components in both approaches."

Result:
"We chose a hybrid approach - monolithic for MVP with clear 
service boundaries for future microservices migration. The team 
aligned, delivered on time, and we successfully migrated to 
microservices 6 months later. I learned the importance of 
data-driven decisions and involving stakeholders in the process."

Common Questions & Topics:

Leadership:
- "Tell me about a time you led a project"
- "Describe a situation where you motivated a team"
- "How did you handle a underperforming team member?"

Teamwork:
- "Tell me about a successful collaboration"
- "Describe a time you worked with a difficult colleague"
- "How do you handle disagreements in a team?"

Problem-Solving:
- "Tell me about a complex problem you solved"
- "Describe a time you had to think outside the box"
- "How did you handle a situation with incomplete information?"

Failure/Learning:
- "Tell me about a time you failed"
- "Describe a project that didn't go as planned"
- "What's the biggest mistake you've made?"

Time Management:
- "How do you prioritize multiple projects?"
- "Tell me about a time you missed a deadline"
- "Describe how you handle competing priorities"
"""`,
        javascript: `/*
STAR Method Template:

Situation: Set the context
- Where were you?
- What was the challenge?
- Who was involved?

Task: Define your responsibility
- What was your role?
- What needed to be accomplished?
- What were the constraints?

Action: Explain what you did
- What specific steps did you take?
- Why did you choose this approach?
- What was your thought process?

Result: Share the outcome
- What was the impact?
- What did you learn?
- What would you do differently?

Example: "Tell me about a technical challenge you overcame"

Situation:
"At my startup, we faced severe performance issues - page load 
times exceeded 5 seconds, causing 40% user drop-off."

Task:
"As lead frontend engineer, I needed to reduce load time to 
under 2 seconds within one sprint."

Action:
"I profiled the application and identified three bottlenecks:
1. Implemented code splitting to reduce initial bundle size by 60%
2. Added lazy loading for images and components
3. Introduced Redis caching for API responses
4. Optimized database queries with proper indexing"

Result:
"Load time dropped to 1.2 seconds, user retention increased by 
35%, and we reduced server costs by 25%. This experience taught 
me to always measure before optimizing and the importance of 
performance budgets."

Common Questions by Category:

Technical Leadership:
- "Describe your experience with system design"
- "How do you make technical trade-off decisions?"
- "Tell me about a time you improved code quality"

Innovation:
- "Describe a time you introduced a new technology"
- "How did you convince your team to adopt a new approach?"
- "Tell me about an innovative solution you created"

Conflict & Challenges:
- "Describe a disagreement with your manager"
- "How do you handle tight deadlines?"
- "Tell me about a time you had to say no"

Customer Focus:
- "Tell me about a time you advocated for the user"
- "How do you balance user needs with technical constraints?"
- "Describe a time you received negative feedback"
*/`,
      },
    ],
  },
  {
    id: 'behavioral-theory',
    name: 'Behavioral Theory',
    description: 'Understanding competencies and assessment criteria',
    icon: '📖',
    flashcards: [
      {
        id: 'bt-1',
        topicId: 'behavioral-theory',
        question: 'What are leadership principles?',
        answer: 'Core values companies assess: ownership, customer obsession, bias for action, think big, earn trust, dive deep, deliver results, have backbone.',
        difficulty: 'medium',
      },
      {
        id: 'bt-2',
        topicId: 'behavioral-theory',
        question: 'How to show impact in stories?',
        answer: 'Use metrics and numbers: "improved performance by 40%", "reduced costs by $50K", "increased user engagement by 30%", "saved 10 hours/week".',
        difficulty: 'medium',
      },
      {
        id: 'bt-3',
        topicId: 'behavioral-theory',
        question: 'What makes a strong behavioral answer?',
        answer: 'Specific (not generic), recent (last 2 years), shows growth/learning, demonstrates skills relevant to role, has measurable impact.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'bt-ct-1',
        topicId: 'behavioral-theory',
        title: 'Competency Framework',
        description: 'Key competencies interviewers assess',
        python: `"""
BEHAVIORAL COMPETENCIES FRAMEWORK

1. OWNERSHIP & ACCOUNTABILITY
✓ Take responsibility for outcomes
✓ Don't blame others
✓ Follow through on commitments
✓ Think long-term

Example Stories:
- Took ownership of legacy code
- Fixed production bug after hours
- Voluntarily improved documentation

2. PROBLEM SOLVING
✓ Analytical thinking
✓ Root cause analysis
✓ Creative solutions
✓ Data-driven decisions

Example Stories:
- Debugged complex issue
- Optimized slow algorithm
- Designed scalable solution

3. COMMUNICATION
✓ Explain technical concepts simply
✓ Active listening
✓ Written documentation
✓ Presentation skills

Example Stories:
- Presented architecture to non-technical stakeholders
- Wrote comprehensive technical docs
- Facilitated design review

4. COLLABORATION
✓ Cross-functional teamwork
✓ Mentoring others
✓ Giving/receiving feedback
✓ Conflict resolution

Example Stories:
- Worked with product/design teams
- Mentored junior developer
- Resolved team disagreement

5. ADAPTABILITY
✓ Learning new technologies
✓ Pivoting strategies
✓ Handling ambiguity
✓ Change management

Example Stories:
- Learned new framework under tight deadline
- Pivoted project mid-way
- Adapted to changing requirements

6. DELIVERY & EXECUTION
✓ Meeting deadlines
✓ Quality output
✓ Prioritization
✓ Managing scope

Example Stories:
- Delivered project on time
- Improved code quality
- Prioritized features effectively

7. INNOVATION
✓ Proposing new ideas
✓ Process improvement
✓ Technical innovation
✓ Challenging status quo

Example Stories:
- Introduced CI/CD pipeline
- Automated manual process
- Proposed new architecture

8. CUSTOMER FOCUS
✓ User empathy
✓ Product thinking
✓ Quality consciousness
✓ Feedback incorporation

Example Stories:
- Improved user experience
- Fixed critical user-reported bug
- Implemented user feedback

RED FLAGS TO AVOID:
✗ Taking credit for team's work
✗ Blaming others for failures
✗ No learning from mistakes
✗ Vague or generic answers
✗ No measurable outcomes
✗ Only theoretical knowledge
✗ Negative attitude
✗ Can't handle feedback
"""`,
        javascript: `/*
INTERVIEW ASSESSMENT CRITERIA

TECHNICAL COMPETENCE
- Problem-solving ability
- System design thinking
- Code quality awareness
- Technical breadth/depth
- Learning agility

LEADERSHIP
- Taking initiative
- Influencing without authority
- Mentoring others
- Strategic thinking
- Decision-making

COMMUNICATION
- Articulating ideas clearly
- Active listening
- Asking clarifying questions
- Documentation
- Presentation skills

COLLABORATION
- Teamwork
- Cross-functional work
- Conflict resolution
- Giving feedback
- Building relationships

DELIVERY
- Project execution
- Time management
- Quality focus
- Scope management
- Reliability

PREPARATION STRATEGY:

1. Inventory Your Experiences (8-10 stories)
   □ 2-3 leadership stories
   □ 2-3 technical challenges
   □ 1-2 conflict/difficult situations
   □ 1-2 failure/learning stories
   □ 1-2 innovation/improvement stories

2. Structure Each Story
   □ Write out STAR format
   □ Add specific metrics
   □ Identify key competencies shown
   □ Note learnings/takeaways
   □ Practice out loud

3. Tailor to Company
   □ Research company values
   □ Understand role requirements
   □ Prepare relevant examples
   □ Use company terminology

4. Practice Delivery
   □ 2-3 minute responses
   □ Natural conversational tone
   □ Pause for questions
   □ Be authentic

COMMON MISTAKES:
✗ Rambling too long
✗ Being too brief
✗ Using "we" instead of "I"
✗ Lack of specific details
✗ No reflection/learning
✗ Defensive about failures
✗ Memorized responses
✗ Not asking questions
*/`,
      },
    ],
  },
  {
    id: 'behavioral-tactics',
    name: 'Behavioral Tactics',
    description: 'Strategic techniques for acing behavioral interviews',
    icon: '🎯',
    flashcards: [
      {
        id: 'bta-1',
        topicId: 'behavioral-tactics',
        question: 'How to handle "Tell me about yourself"?',
        answer: '2-minute pitch: current role (30s), relevant experience (60s), why you\'re interested in this role (30s). Focus on career progression and achievements.',
        difficulty: 'easy',
      },
      {
        id: 'bta-2',
        topicId: 'behavioral-tactics',
        question: 'How to answer "Why this company?"?',
        answer: 'Research company mission, products, culture. Connect to your values and career goals. Be specific about what excites you.',
        difficulty: 'medium',
      },
      {
        id: 'bta-3',
        topicId: 'behavioral-tactics',
        question: 'How to handle questions you don\'t have experience with?',
        answer: 'Be honest, then pivot to similar experience or explain how you would approach it. Show transferable skills and learning ability.',
        difficulty: 'hard',
      },
    ],
    codeTemplates: [
      {
        id: 'bta-ct-1',
        topicId: 'behavioral-tactics',
        title: 'Interview Tactics Guide',
        description: 'Proven strategies for behavioral success',
        python: `"""
TACTICAL INTERVIEW STRATEGIES

PREPARATION TACTICS:

1. Story Matrix (Create a grid)
   Stories →  | Lead | Team | Conflict | Fail | Tech
   Principles ↓
   Ownership  |  X   |      |          |      |  X
   Customer   |      |  X   |          |      |
   Innovation |      |      |          |  X   |  X
   Quality    |  X   |      |          |      |

2. Practice Out Loud
   - Record yourself
   - Time your responses (2-3 min)
   - Get feedback from others
   - Refine for clarity

3. Prepare Questions to Ask
   - About team/culture
   - About technical challenges
   - About growth opportunities
   - About success metrics

DURING INTERVIEW TACTICS:

1. Buy Time to Think
   ✓ "That's a great question, let me think..."
   ✓ "Can you clarify what you mean by...?"
   ✓ Pause and take a breath
   ✓ Repeat question to confirm understanding

2. Pivoting When Stuck
   ✓ "I haven't faced exactly that situation, but..."
   ✓ "A similar experience I had was..."
   ✓ "If I were in that situation, I would..."

3. Showing Depth
   ✓ Interviewer: "Tell me more about..."
   ✓ Prepared follow-ups for each story
   ✓ Technical details ready
   ✓ Alternative approaches considered

4. Recovery from Poor Answer
   ✓ "Actually, let me give you a better example..."
   ✓ "To clarify what I meant..."
   ✓ Ask if you can revisit later

5. Reading the Room
   ✓ Watch body language
   ✓ Adjust length based on engagement
   ✓ Ask "Does that answer your question?"
   ✓ Offer to elaborate or move on

SPECIFIC QUESTION TACTICS:

"Tell me about a time you failed"
✓ Choose a real failure
✓ Focus on learning
✓ Show how you've improved
✓ End on positive note
✗ Don't blame others
✗ Don't pick trivial failure

"Tell me about a conflict"
✓ Show empathy for other side
✓ Focus on resolution
✓ Professional disagreement
✓ Win-win outcome
✗ Don't trash talk anyone
✗ Don't avoid conflict entirely

"Why are you leaving your job?"
✓ Focus on growth opportunity
✓ Speak positively about current role
✓ Connect to new opportunity
✗ Don't complain about current job
✗ Don't mention just money

"What's your greatest weakness?"
✓ Choose real but not deal-breaker
✓ Explain what you're doing about it
✓ Show self-awareness
✗ Don't say "I'm a perfectionist"
✗ Don't list critical flaw

ENDING TACTICS:

1. Strong Closing
   - Summarize your fit
   - Express enthusiasm
   - Ask about next steps
   - Thank interviewer

2. Follow-up
   - Send thank you email (24hrs)
   - Reference specific conversation points
   - Reiterate interest
   - Keep it brief (3-4 sentences)
"""`,
        javascript: `/*
ADVANCED BEHAVIORAL TACTICS

HANDLING DIFFICULT QUESTIONS:

1. "Walk me through a project from start to finish"
   Structure:
   - Problem/context (20s)
   - Your role/approach (30s)
   - Key challenges (30s)
   - Solution/outcome (40s)
   - Learnings (20s)

2. "Tell me about your biggest accomplishment"
   Tips:
   - Choose relevant to role
   - Quantify impact
   - Show progression
   - Team vs individual balance

3. "Describe your management/leadership style"
   Framework:
   - Servant leadership
   - Empowerment
   - Clear communication
   - Context-dependent
   - Give example

4. "How do you handle stress/pressure?"
   Approach:
   - Acknowledge it's real
   - Give coping strategies
   - Show effectiveness under pressure
   - Specific example

BODY LANGUAGE & PRESENCE:

✓ Maintain eye contact
✓ Smile genuinely
✓ Sit up straight
✓ Use hand gestures naturally
✓ Show enthusiasm
✓ Take notes
✓ Nod in understanding

✗ Fidgeting
✗ Crossing arms
✗ Looking down
✗ Monotone voice
✗ Negative expressions

VIRTUAL INTERVIEW TIPS:

□ Test tech 30 min before
□ Good lighting (face camera)
□ Professional background
□ Minimize distractions
□ Look at camera (not screen)
□ Dress professionally
□ Have water nearby
□ Keep notes visible

RED FLAGS YOU MIGHT RAISE:

✗ Job hopping without explanation
✗ Can't explain technical decisions
✗ No questions for interviewer
✗ Unprepared/didn't research company
✗ Inappropriate humor
✗ Talking too much about money
✗ Negative about past employers
✗ Can't handle feedback

TURNING NEGATIVES TO POSITIVES:

Gap in employment:
→ Used time for learning/projects/family

Fired from job:
→ Mutual fit issue, learned valuable lessons

Failed project:
→ Risk-taking, learning experience, improved

Lack of certain experience:
→ Quick learner, transferable skills, eager

FINAL PREPARATION CHECKLIST:

□ Research company thoroughly
□ Prepare 8-10 STAR stories
□ Practice out loud
□ Prepare questions to ask
□ Review job description
□ Prepare resume talking points
□ Plan outfit
□ Get good sleep
□ Arrive/login early
□ Bring portfolio/work samples
*/`,
      },
    ],
  },
  {
    id: 'behavioral-practice',
    name: 'Practice & Mock Interviews',
    description: 'Common questions and practice scenarios',
    icon: '🎤',
    flashcards: [
      {
        id: 'bp-1',
        topicId: 'behavioral-practice',
        question: 'Top 5 most common behavioral questions?',
        answer: '1) Tell me about yourself, 2) Why this company?, 3) Tell me about a challenge, 4) Describe a conflict, 5) Tell me about a failure.',
        difficulty: 'easy',
      },
      {
        id: 'bp-2',
        topicId: 'behavioral-practice',
        question: 'How to practice effectively?',
        answer: 'Record yourself, practice with peers, time responses (2-3 min), get feedback, iterate on stories, practice different question variations.',
        difficulty: 'medium',
      },
      {
        id: 'bp-3',
        topicId: 'behavioral-practice',
        question: 'What questions should you ask interviewers?',
        answer: 'Team dynamics, biggest challenges, success metrics, career growth, typical projects, tech stack decisions, what they love about company.',
        difficulty: 'medium',
      },
    ],
    codeTemplates: [
      {
        id: 'bp-ct-1',
        topicId: 'behavioral-practice',
        title: '50 Common Behavioral Questions',
        description: 'Practice questions organized by category',
        python: `"""
50 COMMON BEHAVIORAL INTERVIEW QUESTIONS

LEADERSHIP (10)
1. Tell me about a time you led a team
2. Describe a situation where you had to influence without authority
3. How did you handle an underperforming team member?
4. Tell me about a time you mentored someone
5. Describe when you had to make an unpopular decision
6. How do you motivate a team?
7. Tell me about delegating work
8. Describe when you took on a leadership role
9. How do you build consensus?
10. Tell me about managing a remote team

TEAMWORK & COLLABORATION (10)
11. Describe a successful team project
12. Tell me about working with a difficult colleague
13. How do you handle disagreements in a team?
14. Describe cross-functional collaboration
15. Tell me about giving constructive feedback
16. How do you handle receiving criticism?
17. Describe a time you helped a struggling teammate
18. Tell me about building team culture
19. How do you handle team conflicts?
20. Describe working with diverse perspectives

PROBLEM-SOLVING (10)
21. Tell me about a complex technical problem you solved
22. Describe thinking outside the box
23. How do you approach ambiguous problems?
24. Tell me about debugging a difficult issue
25. Describe optimizing system performance
26. How do you prioritize competing solutions?
27. Tell me about a time you had incomplete information
28. Describe a creative solution
29. How do you handle technical debt?
30. Tell me about preventing future problems

FAILURE & LEARNING (5)
31. Tell me about your biggest failure
32. Describe a project that didn't go as planned
33. What's the biggest mistake you've made?
34. Tell me about missing a deadline
35. How do you handle failure?

COMMUNICATION (5)
36. Describe explaining technical concepts to non-technical people
37. Tell me about a presentation you gave
38. How do you handle difficult conversations?
39. Describe written communication (documentation)
40. Tell me about miscommunication and resolution

TIME MANAGEMENT & PRIORITIZATION (5)
41. How do you handle multiple projects?
42. Tell me about working under tight deadline
43. Describe prioritizing competing demands
44. How do you say no to requests?
45. Tell me about managing scope creep

INNOVATION & IMPROVEMENT (5)
46. Describe introducing a new technology
47. Tell me about process improvement
48. How do you stay current with technology?
49. Describe automating a manual process
50. Tell me about challenging the status quo

PRACTICE EXERCISE:

For each question above:
1. Write 2-3 bullet points for situation
2. Identify 1-2 key actions you took
3. Quantify the result
4. Note what you learned

Example for Question 21:
Situation:
- Production API slow (5s response time)
- Affecting 100K users
- No obvious errors in logs

Actions:
- Profiled application with APM tool
- Identified N+1 query problem
- Implemented eager loading
- Added database indexes

Result:
- Reduced response time to 200ms
- 96% improvement
- Zero downtime deployment

Learning:
- Importance of monitoring
- Query optimization techniques
- Proactive performance testing
"""`,
        javascript: `/*
MOCK INTERVIEW SCENARIOS

Scenario 1: Technical Leadership
Role: Senior Engineer
Question: "Tell me about a time you had to make a difficult 
technical decision with limited time"

Good Answer Structure:
- Context: Feature deadline in 2 weeks, database choice needed
- Options: PostgreSQL (familiar) vs MongoDB (better fit)
- Analysis: Created comparison matrix, ran benchmarks
- Decision: Chose PostgreSQL initially for speed, designed 
  with migration path
- Result: Delivered on time, migrated to MongoDB 6 months later
- Learning: Balance pragmatism with long-term design

Scenario 2: Conflict Resolution
Role: Team Lead
Question: "Describe a conflict with a colleague and how you 
resolved it"

Good Answer Structure:
- Situation: Frontend dev wanted to use new framework mid-project
- Issue: Would delay deadline by 3 weeks
- Approach:
  * Listened to their reasoning
  * Acknowledged benefits
  * Explained project constraints
  * Proposed compromise (use in next project + spike work now)
- Result: Completed project on time, team learned new tech
- Relationship: Colleague appreciated being heard

Scenario 3: Failure Recovery
Role: Engineer
Question: "Tell me about a production bug you caused"

Good Answer Structure:
- Incident: Deployed code that crashed payment system
- Impact: 30 min downtime, lost revenue
- Response:
  * Immediately rolled back
  * Root cause: didn't test edge case
  * Communicated transparently to stakeholders
- Prevention:
  * Added integration tests
  * Implemented staged rollouts
  * Created runbook for rollbacks
- Learning: Importance of testing and having rollback plan

PRACTICE EXERCISES:

Exercise 1: 30-Second Pitch
Summarize your background in 30 seconds
- Current role
- Years of experience
- Key skills
- Career goal

Exercise 2: Story Refinement
Take one of your stories and refine it:
□ Remove unnecessary details
□ Add specific metrics
□ Emphasize your individual contribution
□ Make the learning clear
□ Keep under 3 minutes

Exercise 3: Question Variations
Practice answering the same story in different ways:
- As a leadership example
- As a problem-solving example
- As a teamwork example
- As a failure/learning example

Exercise 4: Difficult Questions
Practice these challenging questions:
- "Why do you have gaps in employment?"
- "Why were you fired?"
- "Why so many job changes?"
- "What's your biggest weakness?"
- "Why didn't you get promoted?"

FEEDBACK CHECKLIST:

After each practice:
□ Was I specific enough?
□ Did I quantify results?
□ Was I concise (under 3 min)?
□ Did I show learning?
□ Was it relevant to the role?
□ Did I emphasize my role (not team's)?
□ Was I authentic?
□ Did I answer the question asked?

PEER PRACTICE FORMAT:

Round 1: Warm-up questions (5 min)
- Tell me about yourself
- Why this role?

Round 2: STAR stories (20 min)
- Behavioral questions
- Practice STAR format
- Get feedback

Round 3: Follow-up questions (10 min)
- Dive deeper into stories
- Handle curveballs
- Technical probing

Round 4: Questions for interviewer (5 min)
- Practice asking questions
- Show curiosity
- Assess company fit
*/`,
      },
    ],
  },
  neetcodeBlind75, // Import the NeetCode Blind 75 topic
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    topicId: 'time-space-complexity',
    question: 'What is the time complexity of accessing an element in an array by index?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 0,
  },
  {
    id: 'q2',
    topicId: 'two-pointer',
    question: 'Which technique uses two pointers from opposite ends of an array?',
    options: ['Sliding Window', 'Two Pointer', 'Binary Search', 'DFS'],
    correctAnswer: 1,
  },
  {
    id: 'q3',
    topicId: 'sliding-window',
    question: 'What pattern is best for finding the longest substring without repeating characters?',
    options: ['Two Pointer', 'Variable Sliding Window', 'Fixed Sliding Window', 'Binary Search'],
    correctAnswer: 1,
  },
  {
    id: 'q4',
    topicId: 'arrays',
    question: 'What is the Kadane\'s algorithm used for?',
    options: ['Sorting arrays', 'Finding maximum subarray sum', 'Binary search', 'Array reversal'],
    correctAnswer: 1,
  },
  {
    id: 'q5',
    topicId: 'strings',
    question: 'Which data structure is best for checking if two strings are anagrams?',
    options: ['Array', 'HashMap/Object', 'Stack', 'Queue'],
    correctAnswer: 1,
  },
  {
    id: 'q6',
    topicId: 'trees',
    question: 'In which tree traversal is the root visited first?',
    options: ['Inorder', 'Preorder', 'Postorder', 'Level-order'],
    correctAnswer: 1,
  },
  {
    id: 'q7',
    topicId: 'graphs',
    question: 'Which algorithm finds the shortest path in a weighted graph?',
    options: ['DFS', 'BFS', 'Dijkstra\'s', 'Topological Sort'],
    correctAnswer: 2,
  },
  {
    id: 'q8',
    topicId: 'dynamic-programming',
    question: 'What are the two main DP approaches?',
    options: ['DFS and BFS', 'Recursion and Iteration', 'Memoization and Tabulation', 'Divide and Conquer'],
    correctAnswer: 2,
  },
  {
    id: 'q9',
    topicId: 'trees',
    question: 'In a Binary Search Tree, where are smaller values located?',
    options: ['Right subtree', 'Left subtree', 'Root', 'Anywhere'],
    correctAnswer: 1,
  },
  {
    id: 'q10',
    topicId: 'graphs',
    question: 'Which traversal explores level by level?',
    options: ['DFS', 'BFS', 'Inorder', 'Preorder'],
    correctAnswer: 1,
  },
  {
    id: 'q11',
    topicId: 'fast-slow-pointers',
    question: 'What is Floyd\'s cycle detection also known as?',
    options: ['Binary Search', 'Tortoise and Hare', 'Two Pointer', 'Sliding Window'],
    correctAnswer: 1,
  },
  {
    id: 'q12',
    topicId: 'bit-manipulation',
    question: 'What does XOR of a number with itself equal?',
    options: ['1', '0', 'The number', 'Infinity'],
    correctAnswer: 1,
  },
  {
    id: 'q13',
    topicId: 'cyclic-sort',
    question: 'What is the time complexity of cyclic sort?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    correctAnswer: 2,
  },
  {
    id: 'q14',
    topicId: 'hash-tables',
    question: 'What is the average time complexity for hash table lookups?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
    correctAnswer: 2,
  },
  {
    id: 'q15',
    topicId: 'searching-sorting',
    question: 'Which sorting algorithm has O(n log n) time in the worst case?',
    options: ['QuickSort', 'MergeSort', 'BubbleSort', 'InsertionSort'],
    correctAnswer: 1,
  },
  {
    id: 'q16',
    topicId: 'stacks-queues',
    question: 'What does LIFO stand for?',
    options: ['Last In First Out', 'List In First Out', 'Last Item For Output', 'Linear Input Format Order'],
    correctAnswer: 0,
  },
  {
    id: 'q17',
    topicId: 'linked-lists',
    question: 'What is the time complexity of accessing an element in a linked list?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 2,
  },
  {
    id: 'q18',
    topicId: 'heaps',
    question: 'What is the time complexity of extracting min/max from a heap?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 1,
  },
  {
    id: 'q19',
    topicId: 'recursion-backtracking',
    question: 'What is backtracking primarily used for?',
    options: ['Sorting', 'Searching', 'Exploring all possibilities', 'Hashing'],
    correctAnswer: 2,
  },
  {
    id: 'q20',
    topicId: 'system-design-overview',
    question: 'What does CAP theorem stand for?',
    options: ['Consistency, Availability, Partition tolerance', 'Cache, API, Performance', 'Compute, Availability, Persistence', 'Configuration, Automation, Protocol'],
    correctAnswer: 0,
  },
  {
    id: 'q21',
    topicId: 'networking-api',
    question: 'Which HTTP method is typically used to update a resource?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correctAnswer: 2,
  },
  {
    id: 'q22',
    topicId: 'scalable-systems',
    question: 'What is a CDN used for?',
    options: ['Database replication', 'Content delivery', 'Code deployment', 'Container management'],
    correctAnswer: 1,
  },
  {
    id: 'q23',
    topicId: 'databases',
    question: 'Which database type is schema-flexible?',
    options: ['SQL', 'NoSQL', 'Both', 'Neither'],
    correctAnswer: 1,
  },
  {
    id: 'q24',
    topicId: 'distributed-systems',
    question: 'What does eventual consistency mean?',
    options: ['Data is always consistent', 'Data will eventually be consistent', 'Data is never consistent', 'Data consistency is not guaranteed'],
    correctAnswer: 1,
  },
  {
    id: 'q25',
    topicId: 'behavioral-overview',
    question: 'What does STAR stand for in behavioral interviews?',
    options: ['Situation, Task, Action, Result', 'Story, Task, Answer, Review', 'Start, Talk, Act, Respond', 'Situation, Timeline, Achievement, Response'],
    correctAnswer: 0,
  },
];
