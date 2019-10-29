/**
 * Some common algos:
 * DFS BFS
 * Dijkstra's
 * Bellman-Ford
 * Floyd-Warshall
 * A*
 * DAG of SCC's
 */

class Vertex {
  constructor(value, neighbors) {
    this.value = value;
    this.marked = false;
    this.neighbors = neighbors;
    this.post = null;
  }
}

class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }
}

function explore(v, G) {
  console.log(v.value);
  v.marked = true;
  for (u in v.neighbors) {
    const vertex = G.vertices[v.neighbors[u] - 1];
    if (!vertex.marked) {
      explore(vertex, G);
    }
  }
  return;
}

function DFS(G) {
  for (v in G.vertices) {
    const vertex = G.vertices[v];
    if (!vertex.marked) {
      explore(vertex, G);
    }
  }
}

const one = new Vertex(1, [2, 3]);
const two = new Vertex(2, [4]);
const three = new Vertex(3, [4, 5]);
const four = new Vertex(4, [5]);
const five = new Vertex(5, []);

const six = new Vertex(6, [7]);
const seven = new Vertex(7, []);

const G = new Graph([one, two, three, four, five, six, seven], []);
DFS(G);