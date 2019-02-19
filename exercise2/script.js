function askTheName(name) {
  var result = prompt(name);
  if (result == "Alice" || result == "Bob") {
    result += "!";
    alert("I have been waiting for you, " + result);
  } else {
    alert("You are not the chosen one!!!");
  }
}

askTheName ("Can I have your name please?");





//Modify the previous program such that only the users Alice and Bob are greeted with their names.
