function showStatus(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i].readingStatus) {
      result += "The book by " + array[i].author + " named " + array[i].title + " was read." + "\n";
    } else {
      result += "You are still reading " + "the " + array[i].title  + " by " + array[i].author + "\n";
    }
  }
  return result;
}

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: false
  }];

showStatus(library);
