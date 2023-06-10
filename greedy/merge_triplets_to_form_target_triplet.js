// * 1899. Merge Triplets to Form Target Triplet

// A triplet is an array of three integers.You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet.You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.

// To obtain target, you may apply the following operation on triplets any number of times(possibly zero):

// Choose two indices(0 - indexed) i and j(i != j) and update triplets[j] to become[max(ai, aj), max(bi, bj), max(ci, cj)].
// For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to[max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].
// Return true if it is possible to obtain the target triplet[x, y, z] as an element of triplets, or false otherwise.

// Example 1:
// Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
// Output: true
// Explanation: Perform the following operations:
// - Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]
// The target triplet [2,7,5] is now an element of triplets.


const mergeTriplets = function(triplets, target) {

};