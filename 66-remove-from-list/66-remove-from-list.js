// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.
//
// It should remove all values from list a, which are present in list b.
//
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
// array_diff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (list1,list2) => {
  if (list1.length < 1) {
    return "There is no array to check!";
  }
  return list1.filter((element) => {
    return (!list2.includes(element));
  });
};

arrayDiff([1,2,3,4,3],[1,3]);
