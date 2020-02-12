class HashTable {
  constructor(size = 128) {
    this._store = [];
    this._size = size;
  }
  _exists(index) {
    return !!this._store[index];
  }
  _isUnique(key, index) {
    const entries = this._store[index];
    for (let i = 0; i < entries.length; i++) {
      const [k, val] = entries[i];
      if (key === k) return false;
    }
    return true;
  }
  _hash(string) {
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % this._size;
  }

  insert(key, value) {
    //TODO edge cases
    //  1. case sensitivity? 'sarah' === 'Sarah'
    if (typeof key !== "string") {
      return new TypeError("invalid argument. key must be a string");
    }

    const index = this._hash(key);
    if (!this._exists(index)) {
      this._store[index] = [];
    }
    if (!this._isUnique(key, index)) {
      return new Error(`key ${key} already exists. each key must be unique`);
    }

    this._store[index].push([key, value]);
  }
  retrieve(key) {
    const index = this._hash(key);

    if (this._exists(index)) {
      const entries = this._store[index];

      for (let i = 0; i < entries.length; i++) {
        let [k, val] = entries[i];
        if (key === k) return val;
      }
    }
  }
  remove(key) {
    const index = this._hash(key);

    if (this._exists(index)) {
      const entries = this._store[index];
      let removed;
      for (let i = 0; i < entries.length; i++) {
        let [k, val] = entries[i];
        if (key === k) removed = entries.splice(i, 1);
      }

      return removed;
    }
  }
  resize() {
    /*TODO*/
  }
}

[
  ["paul", "0800-555-222"],
  ["john", "0800-223-999"],
  ["sarah", "0800-228-344"],
  ["tom", "0800-234-567"],
  ["jill", "0800-332-232"],
  ["fran", "0800-355-822"],
  ["lauren", "0800-233-899"],
  ["james", "0800-223-545"]
].forEach(([key, val]) => {
  myHashTable.insert(key, val);
});

for (let i = 0; i < data.length; i++) {
  const [key, val] = data[i];
  myHashTable.insert(key, val);
}
