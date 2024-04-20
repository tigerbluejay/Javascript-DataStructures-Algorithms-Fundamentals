
/* This function should add the given word 
starting from the given index to the Trie.

It will be recursive and notify the correct child of this Trie 
to add the word starting from a later index.

Consider what the add function should do when it reaches the end 
of the word as a word does not necessarily end at a leaf.

You must mark nodes which are the ends of words so that the words 
can be reconstructed later. */

class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
            return;
        }
        
        // grab the letter
        const char = word[index];
        // if it doesn't exist create the trie
        if (!this.characters[char]) {
            this.characters[char] = new Trie();
        }
        
        // build the trie
        this.characters[char].addWord(word, index + 1);
    }
}

var firstTrie = new Trie();

firstTrie.addWord("fun");

console.log(firstTrie.characters); // { f: Trie { characters: { u: Trie { characters: { n: Trie { isWord: true, characters: {} } } } } } }
console.log(!!firstTrie.characters["f"]); // true
console.log(!!firstTrie.characters["f"].characters["u"]); // true
console.log(firstTrie.characters["f"].characters["u"].characters["n"].isWord); // true
console.log(!!firstTrie.characters["f"].characters["u"].characters["n"]); // true
console.log(!!firstTrie.characters["f"].characters["u"].characters["n"].characters); // false
console.log(!!firstTrie.characters["f"].characters["u"].characters["l"]); // false

var secondTrie = new Trie();
secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has");
secondTrie.addWord("have");
secondTrie.addWord("hate");

console.log(secondTrie.characters["h"].characters["a"].isWord); // true
console.log(secondTrie.characters["h"].characters["a"].characters["t"].isWord); // true
console.log(secondTrie.characters["h"].characters["a"].characters["v"].isWord); // false
console.log(secondTrie.characters["h"].characters["a"].characters["v"].characters["e"].isWord); // true
console.log(secondTrie.characters["h"].characters["a"].characters["t"].characters["e"].isWord); // true

console.log(Object.keys(secondTrie.characters["h"].characters["a"].characters).length); // 3