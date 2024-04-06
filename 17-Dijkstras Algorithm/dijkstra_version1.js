class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    /*
    1. This function should accept a starting and ending vertex
    2. Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list 
    with a value of infinity, except for the starting vertex which should have a value of 0.
    After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, 
    except the starting vertex, which should have a priority of 0 because that's where we begin.
    3. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    4. Start looping as long as there is anything in the priority queue
        a. dequeue a vertex from the priority queue
        b. If that vertex is the same as the ending vertex - we are done!
        c. Otherwise loop through each value in the adjacency list at that vertex
            i. Calculate the distance to that vertex from the starting vertex
            ii. if the distance is less than what is currently stored in our distances object
                x. update the distances object with new lower distance
                xx. update the previous object to contain that vertex
                xxx.enqueue the vertex with the total distance from the start node
    */

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {}; // this will record the distance between nodes
        const previous = {}; // this will record how we got to the current node previously (the previous node)
        let path = [] //to return at end - the shortest path
        let smallest;
        //build up initial state - set the first node distance to 0 and all others to infinity
        //the distances to each node (distances[node]) will be replaced as we traverse the algorithm
        //by the shortest distance possible to that node from the starting node.
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            // this is where the core logic of traversing takes place:
            // if there is a smallest value in the priority queue or if the distances of the smallest
            // node is different from infinity
            // we'll enter this if only for node A, since all others are set to infinity
            if(smallest || distances[smallest] !== Infinity){
                // This for loop plays a crucial role in exploring the neighboring nodes of the current node being processed 
                // in Dijkstra's algorithm. It helps identify potentially shorter paths and update the exploration progress accordingly.
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]

/* Dijkstra's algorithm is a way to determine in a weighted graph (like a map with weighted connections between the nodes)
what the shortest distances are from a starting node, to other nodes in the graph. */

/*
nodes: A PriorityQueue containing all the graph's nodes. 
Each element is an object with a val (node name) and priority (current distance estimate fr11om the starting node).
distances: An object that stores the current best distance found from the starting node to each node in the graph.
previous: An object that tracks the previous node visited in the shortest path found so far for each node.
path: An array that will eventually hold the shortest path from the starting node to the finish node 
(reconstructed after the algorithm completes). */

/*
The adjacencyList variable in the WeightedGraph class represents the graph's internal structure. It's an object where:
Keys: Each key represents a vertex (node) in the graph.
Values: The value associated with a key is an array of objects. 
Each object in the array represents an edge connected to the corresponding vertex.
Edge Object Properties:
node: This property holds the name of the neighboring vertex connected by the edge.
weight: This property holds the weight associated with the edge, 
representing the cost or distance to travel between the two connected vertices.
In essence, the adjacencyList acts as a concise way to store the graph's connections and edge weights for each vertex.
*/