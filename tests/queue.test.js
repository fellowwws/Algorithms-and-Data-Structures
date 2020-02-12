const Queue = require("../data-structures/queue");

describe("Empty Queue", () => {
  const myQ = new Queue();

  test("peek() should return undefined", () => {
    expect(myQ.peek()).toBe(undefined);
  });
  test("dequeue() should return undefined", () => {
    expect(myQ.dequeue()).toBe(undefined);
  });
});

describe("Queue with two items enqueued", () => {
  const myQ = new Queue();
  myQ.enqueue("Hello");
  myQ.enqueue("world");

  test("peek() should return 'Hello'", () => {
    expect(myQ.peek()).toBe("Hello");
  });
  test("dequeue() should return 'Hello'", () => {
    expect(myQ.dequeue()).toBe("Hello");
  });
});

describe("Queue with one item dequeued", () => {
  const myQ = new Queue();
  myQ.enqueue("Hello");
  myQ.enqueue("world");
  myQ.dequeue();

  test("peek() should return 'world'", () => {
    expect(myQ.peek()).toBe("world");
  });
  test("dequeue() should return 'world'", () => {
    expect(myQ.dequeue()).toBe("world");
  });
});

describe("Queue with all items dequeued", () => {
  const myQ = new Queue();
  myQ.enqueue("Hello");
  myQ.enqueue("world");
  myQ.dequeue();
  myQ.dequeue();

  test("peek() should return undefined", () => {
    expect(myQ.peek()).toBe(undefined);
  });
  test("dequeue() should return undefined", () => {
    expect(myQ.dequeue()).toBe(undefined);
  });
});
