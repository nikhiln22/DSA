
// representation of an graph in the adjacency matrix

const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

console.log('matrix:', matrix[0][1]);
console.log('matrix:', matrix[0][0]);

// representation of an graph in the adjacency list

adjacencyList = {
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}

console.log(adjacencyList['A']);
console.log(adjacencyList['B']);
console.log(adjacencyList['C']);

// implementataion of the graph data structure (adjacency list)

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    // adding new vertex to the list
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    // adding an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        // building an connection between the two vertices
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    // check if an edge exists between two given vertices
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    // Deleting an edge from an graph
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    // deleting an vertex from the graph
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }


    // printing the adjacency list
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "-->" + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph()  //instantiating the graph class

graph.addVertex("A");
graph.addVertex("B"); // adding the vertices in the graph
graph.addVertex("C");

graph.addEdge('A', 'B');  // adding the edges within the graph
graph.addEdge('B', 'C');

//graph.removeEdge('A', 'B'); // removing an edge between the two vertices

graph.removeVertex('B');    // removing the vertex 'B'

graph.display();  // displaying the graph

console.log(graph.hasEdge('A', 'B')); // checking whether the edges exist between the vertices 'A' and 'C'

console.log(graph.hasEdge('C', 'A')); // checking whether the edges exist between the vertices 'C' and 'A'


// find the shortest path in the unweighted graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
 
    shortestPath(start) {
        const queue = [start];
        const distances = {};
        const visited = {};
        distances[start] = 0;

        while (queue.length) {
            let vertex = queue.shift();

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    distances[neighbor] = distances[vertex] + 1;
                    queue.push(neighbor);
                }
            });
        }

        return distances;
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");

console.log(g.shortestPath("A")); 

// Detect an cycle in a directed graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
    }

    detectCycle() {
        const visited = {};
        const recStack = {};

        const dfs = (vertex) => {
            if (!visited[vertex]) {
                visited[vertex] = true;
                recStack[vertex] = true;

                for (let neighbor of this.adjacencyList[vertex]) {
                    if (!visited[neighbor] && dfs(neighbor)) {
                        return true;
                    } else if (recStack[neighbor]) {
                        return true;
                    }
                }
            }
            recStack[vertex] = false;
            return false;
        };

        for (let vertex in this.adjacencyList) {
            if (dfs(vertex)) {
                return true;
            }
        }

        return false;
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");

console.log(g.detectCycle()); 


// Given a Directed Acyclic Graph (DAG), perform a topological sort.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
    }

    topologicalSort() {
        const visited = {};
        const stack = [];

        const dfs = (vertex) => {
            visited[vertex] = true;
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
            stack.push(vertex);
        };

        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                dfs(vertex);
            }
        }

        return stack.reverse(); 
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("A", "D");

console.log(g.topologicalSort()); 

// Given a graph, implement a depth-first search (DFS) traversal starting from a given node.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); 
    }

    DFS(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfsHelper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsHelper(neighbor);
                }
            });
        }

        dfsHelper(start);
        return result;
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");

console.log(g.DFS("A")); 


// implement a Breadth-First Search (BFS) Traversal of a Graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); 
    }

    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");

console.log(g.BFS("A")); 






















