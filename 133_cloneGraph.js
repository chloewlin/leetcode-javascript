// Given the head of a graph, return a deep copy (clone) of the graph. Each node in the graph contains a label (int) 
// and a list (List[UndirectedGraphNode]) of its neighbors. There is an edge between the given node and each of the 
// nodes in its neighbors.


// OJ's undirected graph serialization (so you can understand error output):
// Nodes are labeled uniquely.

// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
 

// As an example, consider the serialized graph {0,1,2#1,2#2,2}.

// The graph has a total of three nodes, and therefore contains three parts as separated by #.

// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 

// Visually, the graph looks like the following:

//        1
//       / \
//      /   \
//     0 --- 2
//          / \
//          \_/
// Note: The information about the tree serialization is only meant so that you can understand error output if you 
// get a wrong answer. You don't need to understand the serialization to solve the problem.

function GraphNode(label) {
  this.label = label;
  this.neighbors = [];
};

const cloneGraph = (graph) => {
  let map = {};

  return (traverse = (node) => {
    if (!map[node.label]) {
      let newNode = new GraphNode(node.label);
      map[node.label] = newNode;
      newNode.neighbors = node.neighbors.map(traverse);
    }
    return map[node.label];
  })(graph);
};

// Tests
let g = new GraphNode(0);
let g1 = new GraphNode(1);
let g2 = new GraphNode(2);
g.neighbors = [g1, g2];
g1.neighbors = [g, g2];
g2.neighbors = [g, g1];
console.log(g);
console.log(cloneGraph(g));
