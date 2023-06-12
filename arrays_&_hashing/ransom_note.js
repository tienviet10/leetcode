// * 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

const canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const hashMagazine = {};

  for (const m of magazine) {
    hashMagazine[m] = (hashMagazine[m] || 0) + 1;
  }

  for (const r of ransomNote) {
    if (r in hashMagazine) hashMagazine[r]--;
    if (!(r in hashMagazine) || hashMagazine[r] < 0) return false;
  }

  return true;
};