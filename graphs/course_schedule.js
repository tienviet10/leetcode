// * 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.


const canFinish = function(numCourses, prerequisites) {
  const preMap = {};
  const visit = new Set();

  for (let [course, pre] of prerequisites) {
    preMap[course] = [...(preMap[course] || []), pre];
  }

  const bfs = (course) => {
    if (visit.has(course)) return false;
    if (preMap[course] === undefined) return true;

    visit.add(course);
    for (let pre of preMap[course]) {
      if (!bfs(pre)) return false;
    }
    visit.delete(course);
    preMap[course] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!(bfs(i))) return false;
  }
  return true;
};