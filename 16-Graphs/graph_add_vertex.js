class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
