class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    findWord(word, index = 0) {
        if (index === word.length) {
            return this.isWord ? this : undefined;
        }
        
        const char = word[index];
        if (this.characters[char]) {
            return this.characters[char].findWord(word, index + 1);
        } else {
            return undefined;
        }
    }
}

var t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');

console.log(t.findWord('taco')); // undefined
console.log(t.findWord('fat').characters); // { t: Trie { characters: {} } }
console.log(t.findWord('father').characters); // {}
console.log(t.findWord('father').isWord); // true