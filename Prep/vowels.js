// vowels.js

// How to count number of vowels and consonants in a String?
// does not consider special chars

function vowels(s){
  // if null or empty string, falsey
  if(!s){
    return "error, string is null or empty";
  }

  // check only lower case
  var str = s.toLowerCase();

  // hash map
  var letters = {
    vowels: 0,
    cons: 0
  };

  // iterate thru string
  for (var i = 0; i < str.length; i++){
    // check for vowel
    if(str[i]=='a' || str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u'){
      // increase count
      letters["vowels"]++;
    } 
    else{
      letters["cons"]++;
    }
  }
  return str+" contains "+letters["vowels"]+" vowels and "+letters["cons"]+" consonants.";

}

var test1 = vowels("abcdefghijklmnopqrstuvwxyz");
console.log("test1:", test1);

var test2 = vowels("abcdef");
console.log("test2:", test2);

var test3 = vowels("aeiou");
console.log("test3:", test3);

var test4 = vowels("bcdfhqrstv");
console.log("test4:", test4);

/*

Solution

1. convert to lower case
2. create hash map with vowels and cons keys
3. iterate thru string
4. check for vowel, add to count
4a. create else if for special chars
5. else, increase count for cons
6. access hash map keys for output

*/