// * 763. Partition Labels

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.


const partitionLabels = function(s) {
  let size = 0,
    end = 0;
  const hashMap = {},
    res = [];

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    size++;
    end = Math.max(end, hashMap[s[i]]);
    if (i === end) {
      res.push(end - size + 1);
      size = 0;
    }
  }

  return res;
}

