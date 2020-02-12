class Stack {
  constructor() {
    this._store = {};
    this._length = 0;
  }
  _isEmpty() {
    return !!this._length === 0;
  }

  push(value) {
    if (typeof value !== "function") {
      return new TypeError("invalid argument. value must be a function");
    }
    this._store[this._length] = value;
    this._length++;
  }
  pop() {
    if (this._isEmpty()) return;

    const last = this._store[this._length - 1];
    delete this._store[this._length - 1];
    this._length--;
    return last;
  }
  peek() {
    if (this._isEmpty()) return;
    return this._store[this._length - 1];
  }
}
