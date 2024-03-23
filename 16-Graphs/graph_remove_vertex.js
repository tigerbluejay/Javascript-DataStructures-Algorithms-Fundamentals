class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        // this removes from each vertex, another vertex
        // by assigning to the pair of vertexes all of the entries except the other vertex

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2 // Assign to vertex1 all that are not vertex 2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1 // Assing to vertex2 all that are not vertex 1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){ // for all the entries in this given vertex, loop
            const adjacentVertex = this.adjacencyList[vertex].pop(); 
            this.removeEdge(vertex, adjacentVertex); // removing all the edges
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
g.removeEdge("Hong Kong", "Dallas");
g.removeEdge("Dallas", "Tokyo");
g.removeVertex("Los Angeles");






