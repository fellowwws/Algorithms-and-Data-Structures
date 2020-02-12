const Queue = require("../data-structures/queue");

const myQ = new Queue();

// beforeEach(() => {
// });

// test("", () => {
//   expect().toBe();
// });

describe("A new Queue()", () => {
  test("_store to be empty", () => {
    expect(myQ._store).toEqual({});
  });
  test("peek() should return undefined", () => {
    expect(myQ.peek()).toBe(undefined);
  });
  test("dequeue() should return undefined", () => {
    expect(myQ.dequeue()).toBe(undefined);
  });
});
