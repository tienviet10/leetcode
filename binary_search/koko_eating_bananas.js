// * 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.


// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4

const minEatingSpeed = function(piles, h) {
  let l = 1,
    r = Math.max(...piles),
    res = r;

  while (l <= r) {
    let hours = 0,
      mid = Math.floor((l + r) / 2);

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours > h) {
      l = mid + 1;
    } else {
      res = Math.min(res, mid);
      r = mid - 1;
    }
  }

  return res;
};