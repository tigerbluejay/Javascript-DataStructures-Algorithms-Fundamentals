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
        var char = word[index];
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }
    getWords(words = [], currentWord = "") {

        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
    autoComplete(prefix) {
        let node = this.findWord(prefix);
        if (!node) return [];

        return node.getWords().map(word => prefix + word);
    }
    removeWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = false;
            return;
        }

        const char = word[index];
        if (!this.characters[char]) {
            // Word not found in the Trie
            return;
        }

        const subTrie = this.characters[char];
        subTrie.removeWord(word, index + 1);

        // If the subTrie becomes empty after removing the word,
        // remove the reference to it from the current Trie node.
        if (Object.keys(subTrie.characters).length === 0 && !subTrie.isWord) {
            delete this.characters[char];
        }
    }
}

var t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');
t.addWord('forget');
t.addWord('awesome');
t.addWord('argue');

t.removeWord('fat');
console.log(t.characters.f.characters.a.characters.t.isWord); // false
console.log(t.characters.f.characters.a.characters.t.characters.e.isWord); // true

t.removeWord('argue');
console.log(t.characters.a.characters.r); // undefined