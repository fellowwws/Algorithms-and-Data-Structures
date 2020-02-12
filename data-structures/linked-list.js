class LinkedList {
  constructor(value) {
    this.head = this._node(value);
    this.tail = this.head;
  }
  _node(value) {
    return { value, next: null };
  }

  insert(value) {
    const node = this._node(value);
    this.tail.next = node;
    this.tail = node;
  }
  remove() {
    let currentNode = this.head;

    if (currentNode.next === null) return;

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }
  contains(value) {
    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }
}
