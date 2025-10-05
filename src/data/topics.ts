import { Topic, QuizQuestion } from '../types';

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
];
