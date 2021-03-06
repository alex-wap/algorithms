// anagrams.js

/*
write a program to check if two given strings are anagrams of each other. 
Two strings are anagrams if they are written using the same exact letters, ignoring space, punctuation and capitalization. 
Each letter should have the same count in both strings. For example, Army and Mary are anagram of each other.

*/

function anagrams(str1,str2){
  console.log();
  // check for valid input
  if(typeof str1 !== 'string' || typeof str2 !== 'string'){
    return "invalid input, please provide two valid strings"
  }
  if(!str1 || !str2){
    return "invalid input, please provide two valid strings"
  }

  // remove punctuation and make lowercase
  var simpleStr1 = str1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  var simpleStr2 = str2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

  // split string, sort the letters
  var arr1 = simpleStr1.split("").sort();
  var arr2 = simpleStr2.split("").sort();

  // return false if length is not equal
  if (arr1.length != arr2.length){
    return false;
  }

  // walk through array and check if matching
  for (var i = 0; i < arr1.length; i++){
    // return false if chars are not equal
    if (arr1[i] != arr2[i]){
      return false;
    }
  }

  // return true if strings match
  return true;
}

var test1 = anagrams("","1");
console.log("test1:", test1);

var test2 = anagrams("1",1);
console.log("test2:", test2);

var test3 = anagrams("11223","1");
console.log("test3:", test3);

var test4 = anagrams("army!","Mar..y.");
console.log("test4:", test4);

var test5 = anagrams("brian!","BRAIN.,;!");
console.log("test5:", test5);

/*

Solution

edge case: check for valid input
remove punctuation and make lowercase
split the strings into arrays and sort the letters
walk thru the arrays and check if the characters match
return false if they dont
return true if they do

*/