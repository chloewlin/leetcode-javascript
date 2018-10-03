// Implement a trie with insert, search, and startsWith methods.
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {};
  this.isWord = false;  
};

/**
 * Inserts a word into the trie. 
 */
Trie.prototype.insert = function(word) {
  let currTrie = this;
  for (let c of word) {
    if (!currTrie.children[c]) currTrie.children[c] = new Trie();
    currTrie = currTrie.children[c];
  }
  currTrie.isWord = true;  
};

/**
 * Returns if the word is in the trie. 
 */
Trie.prototype.search = function(word) {
  let currTrie = this;
  for (let c of word) {
    if (!currTrie.children[c]) return false; 
    currTrie = currTrie.children[c];
  }
  return currTrie.isWord;  
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 */
Trie.prototype.startsWith = function(prefix) {
  let currTrie = this;
  for (let c of prefix) {
    if (!currTrie.children[c]) return false; 
    currTrie = currTrie.children[c];
  }
  return true;  
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */