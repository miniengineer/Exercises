// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array,
// containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(array) {
  if (array.length < 1) {
    return "No one likes this";
  } else if (array.length === 1) {
    return `${array[0]} likes this`;
  } else if (array.length === 2) {
    return `${array[0]} and ${array[1]} likes this`;
  } else if (array.length === 3) {
    return `${array[0]}, ${array[1]} and ${array[2]} likes this`;
  } else if (array.length > 3) {
    return `${array[0]}, ${array[1]} and ${array.length - 2} others likes this`;
  }
}

likes(["Alex", "Jacob", "Mark", "Max", "Minira", "Vadim"]);
