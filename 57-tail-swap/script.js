// You'll be given two strings, and each will contain exactly
// one colon in the middle (but not at beginning or end).
// The length of the strings, before and after the colon, are random.
//
// Your job is to return a list of two strings (in the same order as the original list),
// but with the characters after each colon swapped.
//
// tailSwap('abc:123', 'cde:456') == ['abc:456', 'cde:123']
// tailSwap('a:12345', '777:xyz') == ['a:xyz', '777:12345']

function tailSwap(str1,str2) {
  let tail1 = str1.slice(str1.indexOf(':'),str1.length);
  let tail2 = str2.slice(str2.indexOf(':'),str2.length);
  let result = [];
  result.push(str1.replace(tail1,tail2));
  result.push(str2.replace(tail2,tail1));
  return result;
}

tailSwap('abc:123', 'cde:456');
