
// representation of an graph in the adjacency matrix

// const matrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0]
// ];

// console.log('matrix:', matrix[0][1]);
// console.log('matrix:', matrix[0][0]);

// representation of an graph in the adjacency list

// adjacencyList = {
//     'A':['B'],
//     'B':['A','C'],
//     'C':['B']
// }

// console.log(adjacencyList['A']);
// console.log(adjacencyList['B']);
// console.log(adjacencyList['C']);

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



