const mergeKSortedLists = require("..");

test("Test", () => {
  const searchResult = JSON.stringify(
    mergeKSortedLists([
      [1, 3, 5, 7],
      [2, 4, 6, 8],
      [9, 10, 11, 12],
    ])
  );
  expect(searchResult).toBe("[1,2,3,4,5,6,7,8,9,10,11,12]");
});

test("Test", () => {
  const searchResult = JSON.stringify(
    mergeKSortedLists([[], [2, 4, 6, 8], []])
  );
  expect(searchResult).toBe("[2,4,6,8]");
});

test("Test", () => {
  const searchResult = JSON.stringify(
    mergeKSortedLists([
      [1, 2, 3, 4, 5],
      [1, 3, 5, 7],
    ])
  );
  expect(searchResult).toBe("[1,1,2,3,3,4,5,5,7]");
});

test("Test", () => {
  const searchResult = JSON.stringify(mergeKSortedLists([]));
  expect(searchResult).toBe("[]");
});

test("Test", () => {
  expect(mergeKSortedLists.bind(null, [1, 2, 3])).toThrow(TypeError);
});