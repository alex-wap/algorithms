// uniqueChar.js

// Find the first non-repeated (unique) character in a given string. for Example if given String is "Morning" then it should print "M". 

function uniqueChar(str){
  console.log();
  // check for valid input
  if(typeof str !== 'string' || !str){
    return "invalid input, please provide a valid string"
  }

  // instantiate hash map
  var allChars = {};

  // split string into array of letters
  var letters = str.split("");


  for (var i = 0; i < letters.length; i++){
    // add key if not already there
    if(!allChars[letters[i]]){
      allChars[letters[i]] = 1;
    }
    // if dupe, update count
    else{
      allChars[letters[i]] += 1;
    }
  }

  // for each key in order, check count and return if count is one
  for (var i = 0; i < letters.length; i++){
    // add key if not already there
    if(allChars[letters[i]] == 1){
      return letters[i];
    }
  }

  // return false if no count is one
  return false;
}

var test1 = uniqueChar("");
console.log("test1:", test1);

var test2 = uniqueChar(1);
console.log("test2:", test2);

var test3 = uniqueChar("11223");
console.log("test3:", test3);

var test4 = uniqueChar("army!ar");
console.log("test4:", test4);

var test5 = uniqueChar("brian!bria");
console.log("test5:", test5);

var test6 = uniqueChar("aabbccdd");
console.log("test6:", test6);

/*

Solution

use string to build hash table
go thru hash table in same order
if count is one, return character

*/