// * 210. Course Schedule II

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

const findOrder = function(numCourses, prerequisites) {
  const output = [],
    cycle = new Set(),
    visited = new Set(),
    prereq = new Map();

  for (let [course, pre] of prerequisites) {
    prereq[course] = [...(prereq[course] || []), pre];
  }

  const dfs = (crs) => {
    if (cycle.has(crs)) return false;
    if (visited.has(crs)) return true;

    cycle.add(crs);
    for (let pre of prereq[crs] || []) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(crs);
    visited.add(crs);
    output.push(crs);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return output;
};