// * 684. Redundant Connection

// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.


// Example 1:
// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]

const findRedundantConnection = function(edges) {
  const parent = [];
  const rank = [];
  for (let i = 0; i <= edges.length; i++) {
    parent[i] = i;
    rank[i] = 1;
  }

  const find = (x) => {
    let p = parent[x];
    while (p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }
    return p;
  };

  const union = (x, y) => {
    const p1 = find(x);
    const p2 = find(y);

    if (p1 === p2) return false;

    if (rank[p1] > rank[p2]) {
      parent[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      parent[p1] = p2;
      rank[p2] += rank[p1];
    }
    return true;
  };

  for (const [n1, n2] of edges) {
    if (!union(n1, n2)) return [n1, n2];
  }

};