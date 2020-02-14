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
    if (typeof key !== "string") {
      return new TypeError("Invalid argument. Key must be a string");
    }

    const index = this._hash(key.toLowerCase());

    if (!this._exists(index)) {
      this._store[index] = [];
    }
    if (!this._isUnique(key, index)) {
      return new Error(`key ${key} already exists. Each key must be unique`);
    }

    this._store[index].push([key, value]);
  }
  retrieve(key) {
    const index = this._hash(key.toLowerCase());

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
  resize(size) {
    if (typeof size !== "number") return;

    const store = [...this._store]; // Make a copy
    this._store = [];
    this._size = size;

    for (let i = 0; i < store.length; i++) {
      const entries = store[i]; // [[key, val]] || undefined
      if (!entries) continue;

      for (let j = 0; j < entries.length; j++) {
        const [k, val] = entries[j];
        this.insert(k, val);
      }
    }
  }
}

module.exports = HashTable;
