// Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to 
// check whether these edges make up a valid tree.

// Example 1:
// Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true
//
//       0
//     / | \ 
//    1  2  3
//   /
//  4

// Example 2:
// Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
// Output: false
// 
//        0
//       / 
//     1 -- 4  
//   / \   
//  2 - 3  
//  ^^^^^

// Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as 
// [1,0] and thus will not appear together in edges.

// strategy: 
  // step 1: build a graph
    // Example 1:
    // { 
    //   '0': [ 1, 2, 3 ],
    //   '1': [ 0, 4 ],
    //   '2': [ 0 ],
    //   '3': [ 0 ],
    //   '4': [ 1 ] 
    // }
    // Example 2:
    // { 
    //   '0': [ 1 ],
    //   '1': [ 0, 2, 3, 4 ],
    //   '2': [ 1, 3 ],
    //   '3': [ 2, 1 ],
    //   '4': [ 1 ] 
    // }
  // step 2: detect cycles
var validTree = function(n, edges) {
  let map = {};
  
  // build graph
  for (let i = 0; i < n; i++) {
    map[i] = [];
  };

  // find all edges of a node
  for (let edge of edges) {
    map[edge[0]].push(edge[1]);
    map[edge[1]].push(edge[0]);
  }
  
  // detect cycles 
  let visited = new Set(),
      parent = {},
      hasCycle = false;

  (function dfs(root) {
    visited.add(root);

    for (let node of map[root]) {
      if (visited.has(node)) {
        if (parent[root] !== node) {
          hasCycle = true;
        } else {
          continue;
        }
      } else {
        parent[node] = root;
        dfs(node);
      }
    }
  })(0);

  if (hasCycle) return false;

  return visited.size === n;
};

// Tests
console.log(validTree(5, [[0,1], [0,2], [0,3], [1,4]])); // true
console.log(validTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]])); // false
console.log(validTree(4, [[0,1],[2,3]])); // false
