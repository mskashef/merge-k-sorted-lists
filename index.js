const mergeTwoSortedLists = (l1, l2) => {
  const merged = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < l1.length && p2 < l2.length) {
    let a = l1[p1];
    let b = l2[p2];
    if (a < b) {
      merged.push(a);
      p1++;
    } else if (a > b) {
      merged.push(b);
      p2++;
    } else {
      merged.push(a, b);
      p1++;
      p2++;
    }
  }
  while (p1 < l1.length) {
    merged.push(l1[p1]);
    p1++;
  }
  while (p2 < l2.length) {
    merged.push(l2[p2]);
    p2++;
  }
  return merged
};

const mergeKSortedLists = function(lists) {
  if (lists.length === 0) return []
  let result = lists[0]
  for (let i = 1; i < lists.length; i++) {
    if (!Array.isArray(lists[i])) throw new TypeError(`lists[${i}] is not type of array!`)
    result = mergeTwoSortedLists(result, lists[i])
  }
  return result
};

module.exports = mergeKSortedLists;
