const HashTable = require("../data-structures/hash-table");

beforeEach(() => {
  const myHashTable = new HashTable(100);

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
});
