// * 846. Hand of Straights

// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.


// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]


const isNStraightHand = function(hand, groupSize) {
  const hashMap = new Map();

  for (const card of hand) {
    hashMap.set(card, (hashMap.get(card) || 0) + 1);
  }

  hand.sort((a, b) => a - b);

  for (const card of hand) {
    if (hashMap.get(card) === 0) continue;

    for (let i = 0; i < groupSize; i++) {
      const currCard = card + i;

      if (hashMap.get(currCard) === undefined || hashMap.get(currCard) === 0) return false;

      hashMap.set(currCard, hashMap.get(currCard) - 1);
    }
  }

  return true;
};