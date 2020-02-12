class Queue {
  constructor() {
    this._store = {};
    this._length = 0;
    this._startIndex = 0;
    this._nextIndex = 0;
  }
  _isEmpty() {
    return this._length === 0;
  }
  _isLast() {
    return this._length - 1 === 0;
  }

  enqueue(value) {
    //TODO edge cases
    this._store[this._nextIndex] = value;
    this._nextIndex++;
    this._length++;
  }
  dequeue() {
    if (!this._isEmpty()) {
      const start = this._store[this._startIndex];
      delete this._store[this._startIndex];

      if (this._isLast()) {
        this._length--;
        this._startIndex = 0;
        this._nextIndex = 0;
      } else {
        this._length--;
        this._startIndex++;
      }
      return start;
    }
  }
  peek() {
    return this._store[this._startIndex];
  }
}

module.exports = Queue;
