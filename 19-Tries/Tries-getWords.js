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
    getWords(words = [], currentWord = "") {
        if (this.isWord) {
            words.push(currentWord);
        }
        for (const char in this.characters) {
            this.characters[char].getWords(words, currentWord + char);
        }
        return words;
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

console.log(t.getWords()); // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]

console.log(t.getWords().length); // 8