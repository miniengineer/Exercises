// Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35,
// how many from 36-55, and how many of each of those age ranges actually voted.
// The resulting object containing this data should have 6 properties.
// See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   arr.reduce((a,b) => {
     if(b.age < 26) {
       if(b.voted) {
         return a.youngVotes++;
       };
       return a.youth++;
     } else if(b.age > 25 && b.age < 36) {
       if(b.voted) {
         return a.midVotes++;
       };
       return a.mids++;
     } else if(b.age > 35 && b.age < 56) {
       if(b.voted) {
         return a.oldVotes++;
       };
       return a.olds++;
     };
   }, {youngVoters: 0, youth: 0, midVoters: 0, mids: 0, oldVoters: 0, olds: 0});
};

console.log(voterResults(voters));
// Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/
