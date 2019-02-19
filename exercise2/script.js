function askTheName(question) {
  var name = prompt(name);
  if (name == "Alice" || name == "Bob") {
    name += "!";
    alert("I have been waiting for you, " + name);
  } else {
    alert("You are not the chosen one!!!");
  }
}

askTheName ("Can I have your name please?");
