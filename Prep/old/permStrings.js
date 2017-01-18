// permStrings.js

// How to find all permutations of String?

function permStrings(str){
  // base case, str length 1
  if(str.length < 2){
    return str;
  }
  // arr to store perms
  var perms = [];

  // for each char of str
  for (var i = 0; i < str.length; i++){
    var char = str[i];
    if(str.indexOf(char) != i){
      continue;
    }
    // create temp for remaining str
    var remainStr = str.slice(0,i)+str.slice(i+1,str.length);
    // for each substring of the remaining str
    for (var sub of permStrings(remainStr)){
      // push combo of char with sub arrangement
      perms.push(char+sub);
    }
  }
  // return all perms
  return perms;
}

var test1 = permStrings("123");
console.log("test1:", test1);
console.log("test1 length:", test1.length);

var test2 = permStrings("1234");
console.log("test2:", test2);
console.log("test2 length:", test2.length);

var test3 = permStrings("wxyz");
console.log("test3:", test3);
console.log("test3 length:", test3.length);

var test4 = permStrings("abcde");
console.log("test4:", test4);
console.log("test4 length:", test4.length);

/*

Solution

1. base case, str length 1
2. create arr to store perms
3. for each char of str
4. if repeat char, skip that loop
5. create temp for remaining string
6. for each substring of the remaining str
7. push combo of char with sub arrangement
8. return all perms

*/