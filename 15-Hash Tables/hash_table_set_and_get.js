class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) { // this line matches the key to the proper nested item
                                               // in the case there is more than one key value pair per index
                                               // in this case maroon and yellow map to the same index
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  /*
  this.keyMap[index]:
  Accesses the bucket at the given index within the keyMap array. 
  Remember, each bucket itself is also an array, potentially 
  holding multiple [key, value] pairs if collisions have occurred.

  [i]:
  Accesses the i-th element within the bucket at index. 
  This is important because a bucket might contain multiple [key, value] pairs due to collisions. 
  The loop in the get method iterates through these elements to find a matching key.

  [1]:
  Finally, this accesses the 1-th index of the [key, value] pair located at the i-th position 
  within the bucket. Since each [key, value] pair is an array itself, 0 holds the key, and 1 
  holds the value. So, this expression specifically retrieves the value associated with the 
  targeted [key, value] pair.

  To illustrate:
  If index is 5, this.keyMap[index] refers to the bucket at position 5 in keyMap.
  If i is 2, this.keyMap[index][i] refers to the 3rd [key, value] pair within that bucket (indexing starts at 0).
  this.keyMap[index][i][1] ultimately extracts the value from that 3rd [key, value] pair.
*/

}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

ht.get("salmon");
ht.get("yellow");
