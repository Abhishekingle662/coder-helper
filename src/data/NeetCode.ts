import { Flashcard, Topic } from '../types';

export interface NeetCode75Problem {
  id: string;
  title: string;
  pattern: string;
  difficulty: 'easy' | 'medium' | 'hard';
  leetcodeUrl: string;
  videoId?: string;
  notes?: string;
}

export const NeetCode75Problems: NeetCode75Problem[] = [
  { id: 'nc75-001', title: 'Contains Duplicate', pattern: 'Arrays & Hashing', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/', videoId: '3OamzN90kPg', notes: 'hashset to get unique values in array, to check for duplicates easily' },
  { id: 'nc75-002', title: 'Valid Anagram', pattern: 'Arrays & Hashing', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/valid-anagram/', videoId: '9UtInBqnCgA', notes: 'hashmap to count each char in str1, decrement for str2' },
  { id: 'nc75-003', title: 'Two Sum', pattern: 'Arrays & Hashing', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/two-sum/', videoId: 'KLlXCFG5TnA', notes: 'use hash map to instantly check for difference value, map will add index of last occurrence of a num, don\'t use same element twice' },
  { id: 'nc75-004', title: 'Group Anagrams', pattern: 'Arrays & Hashing', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/', videoId: 'vzdNOK2oB2E', notes: 'for each of 26 chars, use count of each char in each word as tuple for key in dict, value is the list of anagrams' },
  { id: 'nc75-005', title: 'Top K Frequent Elements', pattern: 'Arrays & Hashing', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/', videoId: 'YPTqKIgVk-k', notes: 'minheap that\'s kept at size k, if its bigger than k pop the min, by the end it should be left with k largest' },
  { id: 'nc75-006', title: 'Product of Array Except Self', pattern: 'Arrays & Hashing', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/', videoId: 'bNvIQI2wAjk', notes: 'make two passes, first in-order, second in-reverse, to compute products' },
  { id: 'nc75-007', title: 'Encode and Decode Strings', pattern: 'Arrays & Hashing', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/encode-and-decode-strings/', videoId: 'B1k_sxOSgv8', notes: 'store length of str before each string and delimiter like \'#\'' },
  { id: 'nc75-008', title: 'Longest Consecutive Sequence', pattern: 'Arrays & Hashing', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/', videoId: 'P6RZZMu_maU', notes: 'use bruteforce and try to optimize, consider the max subseq containing each num; add each num to hashset, for each num if num-1 doesn\'t exist, count the consecutive nums after num, ie num+1; there is also a union-find solution' },
  { id: 'nc75-009', title: 'Valid Palindrome', pattern: 'Two Pointers', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/', videoId: 'jJXJ16kPFWg', notes: 'left, right pointers, update left and right until each points at alphanum, compare left and right, continue until left >= right, don\'t distinguish between upper/lowercase' },
  { id: 'nc75-010', title: '3Sum', pattern: 'Two Pointers', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/3sum/', videoId: 'jzZsG8n2R9A', notes: 'sort input, for each first element, find next two where -a = b+c, if a=prevA, skip a, if b=prevB skip b to elim duplicates; to find b,c use two pointers, left/right on remaining list' },
  { id: 'nc75-011', title: 'Container With Most Water', pattern: 'Two Pointers', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/', videoId: 'UuiTKBwPgAo', notes: 'shrinking window, left/right initially at endpoints, shift the pointer with min height' },
  { id: 'nc75-012', title: 'Best Time to Buy And Sell Stock', pattern: 'Sliding Window', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', videoId: '1pkOgXD63yU', notes: 'find local min and search for local max, sliding window' },
  { id: 'nc75-013', title: 'Longest Substring Without Repeating Characters', pattern: 'Sliding Window', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', videoId: 'wiGpQwVHdE0', notes: 'sliding window, if we see same char twice within curr window, shift start position' },
  { id: 'nc75-014', title: 'Longest Repeating Character Replacement', pattern: 'Sliding Window', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/longest-repeating-character-replacement/', videoId: 'gqXU1UyA8pk', notes: 'PAY ATTENTION: limited to chars A-Z; for each capital char, check if it could create the longest repeating substr, use sliding window to optimize; check if windowlen=1 works, if yes, increment len, if not, shift window right' },
  { id: 'nc75-015', title: 'Minimum Window Substring', pattern: 'Sliding Window', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/', videoId: 'jSto0O4AJbM', notes: 'need is num of unique char in T, HAVE is num of char we have valid count for, sliding window, move right until valid, if valid, increment left until invalid, to check validity keep track if the count of each unique char is satisfied' },
  { id: 'nc75-016', title: 'Valid Parentheses', pattern: 'Stack', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/', videoId: 'WTzjTskDFMg', notes: 'push opening brace on stack, pop if matching close brace, at end if stack empty, return true' },
  { id: 'nc75-017', title: 'Find Minimum In Rotated Sorted Array', pattern: 'Binary Search', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', videoId: 'nIVW4P8b1VA', notes: 'check if half of array is sorted in order to find pivot, arr is guaranteed to be in at most two sorted subarrays' },
  { id: 'nc75-018', title: 'Search In Rotated Sorted Array', pattern: 'Binary Search', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', videoId: 'U8XENwh8Oy8', notes: 'at most two sorted halfs, mid will be apart of left sorted or right sorted, if target is in range of sorted portion then search it, otherwise search other half' },
  { id: 'nc75-019', title: 'Reverse Linked List', pattern: 'Linked List', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/', videoId: 'G0_I-ZF0S38', notes: 'iterate through maintaining cur and prev; recursively reverse, return new head of list' },
  { id: 'nc75-020', title: 'Merge Two Sorted Lists', pattern: 'Linked List', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/', videoId: 'XIdigk956u0', notes: 'insert each node from one list into the other' },
  { id: 'nc75-021', title: 'Reorder List', pattern: 'Linked List', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/reorder-list/', videoId: 'S5bfdUTrKLM', notes: 'reverse second half of list, then easily reorder it; non-optimal way is to store list in array' },
  { id: 'nc75-022', title: 'Remove Nth Node From End of List', pattern: 'Linked List', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', videoId: 'XVuQxVej6y8', notes: 'use dummy node at head of list, compute len of list; two pointers, second has offset of n from first' },
  { id: 'nc75-023', title: 'Linked List Cycle', pattern: 'Linked List', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/', videoId: 'gBTe7lFR3vc', notes: 'dict to remember visited nodes; two pointers at different speeds, if they meet there is loop' },
  { id: 'nc75-024', title: 'Merge K Sorted Lists', pattern: 'Linked List', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/merge-k-sorted-lists/', videoId: 'q5a5OiGbT6Q', notes: 'divied and conquer, merge lists, N totalnodes, k-lists, O(N*logk). For each list, find min val, insert it into list, use priorityQ to optimize finding min O(N*logk)' },
  { id: 'nc75-025', title: 'Invert Binary Tree', pattern: 'Trees', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/invert-binary-tree/', videoId: 'OnSn2XEQ4MY', notes: 'recursive dfs to invert subtrees; bfs to invert levels, use collections.deque; iterative dfs is easy with stack if doing pre-order traversal' },
  { id: 'nc75-026', title: 'Maximum Depth of Binary Tree', pattern: 'Trees', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', videoId: 'hTM3phVI6YQ', notes: 'recursive dfs to find max-depth of subtrees; iterative bfs to count number of levels in tree' },
  { id: 'nc75-027', title: 'Same Tree', pattern: 'Trees', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/same-tree/', videoId: 'vRbbcKXCxOw', notes: 'recursive dfs on both trees at the same time; iterative bfs compare each level of both trees' },
  { id: 'nc75-028', title: 'Subtree of Another Tree', pattern: 'Trees', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/subtree-of-another-tree/', videoId: 'E36O5SWp-LE', notes: 'traverse s to check if any subtree in s equals t; merkle hashing?' },
  { id: 'nc75-029', title: 'Lowest Common Ancestor of a Binary Search Tree', pattern: 'Trees', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', videoId: 'gs2LMfuOR9k', notes: 'compare p, q values to curr node, base case: one is in left, other in right subtree, then curr is lca' },
  { id: 'nc75-030', title: 'Binary Tree Level Order Traversal', pattern: 'Trees', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', videoId: '6ZnyEApgFYg', notes: 'iterative bfs, add prev level which doesn\'t have any nulls to the result' },
  { id: 'nc75-031', title: 'Validate Binary Search Tree', pattern: 'Trees', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/', videoId: 's6ATEkipzow', notes: 'trick is use built in python min/max values float("inf"), "-inf", as parameters; iterative in-order traversal, check each val is greater than prev' },
  { id: 'nc75-032', title: 'Kth Smallest Element In a Bst', pattern: 'Trees', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', videoId: '5LUXSvjmGCw', notes: 'non-optimal store tree in sorted array; iterative dfs in-order and return the kth element processed, go left until null, pop, go right once' },
  { id: 'nc75-033', title: 'Construct Binary Tree From Preorder And Inorder Traversal', pattern: 'Trees', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', videoId: 'ihj4IQGZ2zc', notes: 'first element in pre-order is root, elements left of root in in-order are left subtree, right of root are right subtree, recursively build subtrees' },
  { id: 'nc75-034', title: 'Binary Tree Maximum Path Sum', pattern: 'Trees', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', videoId: 'Hr5cWUld4vU', notes: 'helper returns maxpathsum without splitting branches, inside helper we also update maxSum by computing maxpathsum WITH a split' },
  { id: 'nc75-035', title: 'Serialize And Deserialize Binary Tree', pattern: 'Trees', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', videoId: 'u4JAi2JJhI8', notes: 'bfs every single non-null node is added to string, and it\'s children are added too, even if they\'re null, deserialize by adding each non-null node to queue, deque node, it\'s children are next two nodes in string' },
  { id: 'nc75-036', title: 'Implement Trie Prefix Tree', pattern: 'Tries', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/implement-trie-prefix-tree/', videoId: 'oobqoCJlHA0', notes: 'node has children characters, and bool if its an ending character, node DOESN\'T have or need char, since root node doesn\'t have a char, only children' },
  { id: 'nc75-037', title: 'Design Add And Search Words Data Structure', pattern: 'Tries', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/add-and-search-word-data-structure-design/', videoId: 'BTf05gs_8iU', notes: 'if char = "." run search for remaining portion of word on all of curr nodes children' },
  { id: 'nc75-038', title: 'Word Search II', pattern: 'Tries', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/word-search-ii/', videoId: 'asbcE9mZz_U', notes: 'trick: I though use trie to store the grid, reverse thinking, instead store dictionary words, dfs on each cell, check if cell\'s char exists as child of root node in trie, if it does, update currNode, and check neighbors, a word could exist multiple times in grid, so don\'t add duplicates' },
  { id: 'nc75-039', title: 'Find Median From Data Stream', pattern: 'Heap / Priority Queue', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/find-median-from-data-stream/', videoId: 'itmhHWaHupI', notes: 'maintain curr median, and all num greater than med in a minHeap, and all num less than med in a maxHeap, after every insertion update median depending on odd/even num of elements' },
  { id: 'nc75-040', title: 'Combination Sum', pattern: 'Backtracking', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/combination-sum/', videoId: 'GBKI9VSKdGg', notes: 'visualize the decision tree, base case is curSum = or > target, each candidate can have children of itself or elements to right of it inorder to elim duplicate solutions' },
  { id: 'nc75-041', title: 'Word Search', pattern: 'Backtracking', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/word-search/', videoId: 'pfiQ_PS1g8E', notes: 'dfs on each cell, for each search remember visited cells, and remove cur visited cell right before you return from dfs' },
  { id: 'nc75-042', title: 'Number of Islands', pattern: 'Graphs', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/', videoId: 'pV2kpPD66nE', notes: 'foreach cell, if cell is 1 and unvisited run dfs, increment cound and marking each contigous 1 as visited' },
  { id: 'nc75-043', title: 'Clone Graph', pattern: 'Graphs', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/clone-graph/', videoId: 'mQeF6bN8hMk', notes: 'recursive dfs, hashmap for visited nodes' },
  { id: 'nc75-044', title: 'Pacific Atlantic Water Flow', pattern: 'Graphs', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', videoId: 's-VkcjHqkGI', notes: 'dfs each cell, keep track of visited, and track which reach pac, atl; dfs on cells adjacent to pac, atl, find overlap of cells that are visited by both pac and atl cells' },
  { id: 'nc75-045', title: 'Course Schedule', pattern: 'Graphs', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/course-schedule/', videoId: 'EgI5nU9etnU', notes: 'build adjacentcy_list with edges, run dfs on each V, if while dfs on V we see V again, then loop exists, otherwise V isnt in a loop, 3 states= not visited, visited, still visiting' },
  { id: 'nc75-046', title: 'Number of Connected Components In An Undirected Graph', pattern: 'Graphs', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/', videoId: '8f1XPm4WOUc', notes: 'dfs on each node that hasn\'t been visited, increment component count, adjacency list; bfs and union find are possible' },
  { id: 'nc75-047', title: 'Graph Valid Tree', pattern: 'Graphs', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/graph-valid-tree/', videoId: 'bXsUuownnoQ', notes: 'union find, if union return false, loop exists, at end size must equal n, or its not connected; dfs to get size and check for loop, since each edge is double, before dfs on neighbor of N, remove N from neighbor list of neighbor' },
  { id: 'nc75-048', title: 'Alien Dictionary', pattern: 'Advanced Graphs', difficulty: 'hard', leetcodeUrl: 'https://leetcode.com/problems/alien-dictionary/', videoId: '6kTZYvNNyps', notes: 'chars of a word not in order, the words are in order, find adjacency list of each unique char by iterating through adjacent words and finding first chars that are different, run topsort on graph and do loop detection' },
  { id: 'nc75-049', title: 'Climbing Stairs', pattern: '1-D Dynamic Programming', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/', videoId: 'Y0lT9Fck7qI', notes: 'subproblem find (n-1) and (n-2), sum = n' },
  { id: 'nc75-050', title: 'House Robber', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/house-robber/', videoId: '73r3KWiEvyk', notes: 'for each num, get max of prev subarr, or num + prev subarr not including last element, store results of prev, and prev not including last element' },
  { id: 'nc75-051', title: 'House Robber II', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/house-robber-ii/', videoId: 'rWAJCfYYOvM', notes: 'subarr = arr without first & last, get max of subarr, then pick which of first/last should be added to it' },
  { id: 'nc75-052', title: 'Longest Palindromic Substring', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/longest-palindromic-substring/', videoId: 'XYQecbcd6_c', notes: 'foreach char in str, consider it were the middle, consider if pali was odd or even' },
  { id: 'nc75-053', title: 'Palindromic Substrings', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/palindromic-substrings/', videoId: '4RACzI5-du8', notes: 'same as longest palindromic string, each char in str as middle and expand outwards, do same for pali of even len; maybe read up on manachers alg' },
  { id: 'nc75-054', title: 'Decode Ways', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/decode-ways/', videoId: '6aEyTjOwlJU', notes: 'can cur char be decoded in one or two ways? Recursion -> cache -> iterative dp solution, a lot of edge cases to determine, 52, 31, 29, 10, 20 only decoded one way, 11, 26 decoded two ways' },
  { id: 'nc75-055', title: 'Coin Change', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/coin-change/', videoId: 'H9bfqozjoqs', notes: 'top-down: recursive dfs, for amount, branch for each coin, cache to store prev coin_count for each amount; bottom-up: compute coins for amount = 1, up until n, using for each coin (amount - coin), cache prev values' },
  { id: 'nc75-056', title: 'Maximum Product Subarray', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/maximum-product-subarray/', videoId: 'lXVy6YWFcRM', notes: 'dp: compute max and max-abs-val for each prefix subarr' },
  { id: 'nc75-057', title: 'Word Break', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/word-break/', videoId: 'Sx9NNgInc3A', notes: 'for each prefix, if prefix is in dict and wordbreak(remaining str)=True, then return True, cache result of wordbreak' },
  { id: 'nc75-058', title: 'Longest Increasing Subsequence', pattern: '1-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/longest-increasing-subsequence/', videoId: 'cjWnW0hdF1Y', notes: 'recursive: foreach num, get subseq with num and without num, only include num if prev was less, cache solution of each; dp=subseq length which must end with each num, curr num must be after a prev dp or by itself' },
  { id: 'nc75-059', title: 'Unique Paths', pattern: '2-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/unique-paths/', videoId: 'IlEsdxuD4lY', notes: 'work backwards from solution, store paths for each position in grid, to further optimize, we don\'t store whole grid, only need to store prev row' },
  { id: 'nc75-060', title: 'Longest Common Subsequence', pattern: '2-D Dynamic Programming', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/', videoId: 'Ua0GhsJSlWM', notes: 'recursive: if first chars are equal find lcs of remaining of each, else max of: lcs of first and remain of 2nd and lcs of 2nd remain of first, cache result; nested forloop to compute the cache without recursion' },
  { id: 'nc75-061', title: 'Maximum Subarray', pattern: 'Greedy', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/', videoId: '5WZl3MMT0Eg', notes: 'pattern: prev subarray cant be negative, dynamic programming: compute max sum for each prefix' },
  { id: 'nc75-062', title: 'Jump Game', pattern: 'Greedy', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/jump-game/', videoId: 'Yan0cv2cLy8', notes: 'visualize the recursive tree, cache solution for O(n) time/mem complexity, iterative is O(1) mem, just iterate backwards to see if element can reach goal node, if yes, then set it equal to goal node, continue' },
  { id: 'nc75-063', title: 'Insert Interval', pattern: 'Intervals', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/insert-interval/', videoId: 'A8NUOmlwOlM', notes: 'insert new interval in order, then merge intervals; newinterval could only merge with one interval that comes before it, then add remaining intervals' },
  { id: 'nc75-064', title: 'Merge Intervals', pattern: 'Intervals', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/merge-intervals/', videoId: '44H3cEC2fFM', notes: 'sort each interval, overlapping intervals should be adjacent, iterate and build solution; also graph method, less efficient, more complicated' },
  { id: 'nc75-065', title: 'Non Overlapping Intervals', pattern: 'Intervals', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/non-overlapping-intervals/', videoId: 'nONCGxWoUfM', notes: 'instead of removing, count how max num of intervals you can include, sort intervals, dp to compute max intervals up until the i-th interval' },
  { id: 'nc75-066', title: 'Meeting Rooms', pattern: 'Intervals', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms/', videoId: 'PaJxqZVPhbg', notes: 'sort intervals by start time, if second interval doesn\'t overlap with first, then third def wont overlap with first' },
  { id: 'nc75-067', title: 'Meeting Rooms II', pattern: 'Intervals', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/meeting-rooms-ii/', videoId: 'FdzJmTCVyJU', notes: 'we care about the points in time where we are starting/ending a meeting, we already are given those, just separate start/end and traverse counting num of meetings going at these points in time; for each meeting check if a prev meeting has finished before curr started, using min heap' },
  { id: 'nc75-068', title: 'Rotate Image', pattern: 'Math & Geometry', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/rotate-image/', videoId: 'fMSJSS7eO1w', notes: 'rotate layer-by-layer, use that it\'s a square as advantage, rotate positions in reverse order, store a in temp, a = b, b = c, c = d, d = temp' },
  { id: 'nc75-069', title: 'Spiral Matrix', pattern: 'Math & Geometry', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/spiral-matrix/', videoId: 'BJnMZNwUk1M', notes: 'keep track of visited cells; keep track of boundaries, layer-by-layer' },
  { id: 'nc75-070', title: 'Set Matrix Zeroes', pattern: 'Math & Geometry', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/set-matrix-zeroes/', videoId: 'T41rL0L3Pnw', notes: 'use sets to keep track of all rows, cols to zero out, after, for each num if it is in a zero row or col then change it to 0; flag first cell in row, and col to mark row/col that needs to be zeroed' },
  { id: 'nc75-071', title: 'Number of 1 Bits', pattern: 'Bit Manipulation', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/number-of-1-bits/', videoId: '5Km3utixwZs', notes: 'modulo, and dividing n; mod and div are expensive, to divide use bit shift, instead of mod to get 1\'s place use bitwise & 1' },
  { id: 'nc75-072', title: 'Counting Bits', pattern: 'Bit Manipulation', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/counting-bits/', videoId: 'RyBM56RIWrM', notes: 'write out result for num=16 to figure out pattern; res[i] = res[i - offset], where offset is the biggest power of 2 <= I' },
  { id: 'nc75-073', title: 'Reverse Bits', pattern: 'Bit Manipulation', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/reverse-bits/', videoId: 'UcoN6UjAI64', notes: 'reverse each of 32 bits' },
  { id: 'nc75-074', title: 'Missing Number', pattern: 'Bit Manipulation', difficulty: 'easy', leetcodeUrl: 'https://leetcode.com/problems/missing-number/', videoId: 'WnPLSRLSANE', notes: 'compute expected sum - real sum; xor n with each index and value' },
  { id: 'nc75-075', title: 'Sum of Two Integers', pattern: 'Bit Manipulation', difficulty: 'medium', leetcodeUrl: 'https://leetcode.com/problems/sum-of-two-integers/', videoId: 'gVUrDV4tZfY', notes: 'add bit by bit, be mindful of carry, after adding, if carry is still 1, then add it as well' }
];

export const NeetCode75Flashcards: Flashcard[] = NeetCode75Problems.map((problem) => {
  const lines = [
    `Pattern: ${problem.pattern}`,
    `Difficulty: ${problem.difficulty.toUpperCase()}`,
    problem.notes ? `Notes: ${problem.notes}` : null,
    problem.leetcodeUrl ? `LeetCode: ${problem.leetcodeUrl}` : null,
    problem.videoId ? `Video: https://www.youtube.com/watch?v=${problem.videoId}` : null,
  ].filter(Boolean) as string[];
  return {
    id: problem.id,
    topicId: 'need-code-75',
    question: problem.title,
    answer: lines.join(`\n`),
    difficulty: problem.difficulty,
  };
});

const problemTitleLines = NeetCode75Problems
  .map((problem) => `  '${problem.title}'`)
  .join(',\n');

const pythonPracticeTemplate = `from dataclasses import dataclass, field
from typing import List, Set

NEED_CODE_75: List[str] = [
${problemTitleLines}
]
That's it!`;

const javascriptPracticeTemplate = `const NEED_CODE_75 = [
${problemTitleLines}
];
That's it!`;

export const NeetCode75Topic: Topic = {
  id: 'need-code-75',
  name: 'NeetCode 75',
  description: 'Curated list of 75 essential coding interview problems grouped by NeetCode patterns.',
  icon: 'NC',
  flashcards: NeetCode75Flashcards,
  codeTemplates: [
    {
      id: 'nc75-ct-1',
      topicId: 'need-code-75',
      title: 'Practice Progress Tracker',
      description: 'Small utility to chunk problems and log solved items while working through the list.',
      python: pythonPracticeTemplate,
      javascript: javascriptPracticeTemplate,
    },
  ],
};

