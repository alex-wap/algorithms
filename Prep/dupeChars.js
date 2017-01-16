// dupeChars.js

// You need to write a program to print duplicate characters from a given String, 
// for example if String is "Java" then program should print "a". 
// Bonus points if your program is robust and handle different kinds of input 
// e.g. String without duplicate, null or empty String etc. Bonus points if you also write unit tests for normal and edge cases.

function dupeChars(str){
  // if null or empty string, falsey
  if(!str){
    return "error, string is null or empty";
  }

  // dupes is return string
  var dupes = "";

  // object will store all chars and check for duplicates
  var allChars = {};

  // split str into array
  var chars = str.split("");

  // for each char, check if it is a key in the object
  for (var i = 0; i < chars.length; i++){
    // add key if not already there
    if(!allChars[chars[i]]){
      allChars[chars[i]] = 1;
    }
    // if dupe, update count
    else{
      allChars[chars[i]] += 1;
    }
  }

  // for each key, check count and output dupes
  for (var key in allChars){
    if (allChars[key] > 1){
      dupes += "\n"+key+": "+allChars[key];
    }
  }

  // if no dupe characters
  if(!dupes){
    return "string contains no dupes";
  } else{
    return dupes;
  }
}

var test1 = dupeChars("");
console.log("test1:", test1);

var test2 = dupeChars("123");
console.log("test2:", test2);

var test3 = dupeChars("11223");
console.log("test3:", test3);

var test4 = dupeChars("aAbBAbBbbbBsSssS");
console.log("test4:", test4);

/*

Solution

Use a hash map to set key:value pairs for character:count.
Iterate through the object to return characters with count greater than 1.
Check edge cases: no dupes, falsey input

*/