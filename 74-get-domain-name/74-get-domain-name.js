// Extract domain name from URL

// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.
// For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//eslint-disable-next-line no-unused-vars
const domainName = (url) => {
  //eslint-disable-next-line no-useless-escape
  return url.match(/^(?:https{0,1}:\/\/){0,1}(?:www\.){0,1}([^\.]+)/)[1].toString();
};

// console.log(domainName("https://www.cnet.com"));
// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("www.xaker.ru"));

