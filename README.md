# Merge K Sorted Lists

You can merge multiple sorted lists using this module.

## Sample Usage

```js
const mergeKSortedLists = require("@mskashef/merge-k-sorted-lists");
const list1 = [1, 3, 5, 7];
const list2 = [2, 4, 6, 8];
const list3 = [9, 10, 11, 12];
console.log(mergeKSortedLists(
  list1, list2, list3
));
/*
OUTPUT:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/
```
