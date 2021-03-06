// dupeRemove.js

// remove duplicate characters from a string

// 1. use hash
// 2. use sort

function dupeRemove(str){
  // use hash

  // check for valid input
  if(typeof str !== 'string' || !str){
    return "invalid input, please provide a valid string"
  }

  // instantiate hash map
  var allChars = {};

  // instantiate str
  var noDupes = "";

  // split string into array of letters
  var letters = str.split("");


  for (var i = 0; i < letters.length; i++){
    // add key if not already there
    if(!allChars[letters[i]]){
      allChars[letters[i]] = 1;
    }
    // if dupe, do nothing
    else{}
  }

  // for each key in hash map, add to new string
  for (var key in allChars){
    // add letter to string 
    noDupes += key;
  }

  return noDupes;
}

function dupeRemove1(str){
  // use sort, check for dupes in place, order not preserved

  // check for valid input
  if(typeof str !== 'string' || !str){
    return "invalid input, please provide a valid string"
  }

  // split string into array of letters
  var letters = str.split("");

  // sort letters
  var sorted = letters.sort();

  // walk thru sorted array
  // use runner to track previous
  var previous = sorted[0];

  for (var i = 1; i < sorted.length; i++){
    // if dupe, remove
    if (sorted[i] == previous){
      sorted.splice(i,1);
      i--;
    }
    // else, change previous
    else{
      previous = sorted[i];
    }
  }
  // join array and return
  return sorted.join("");
}

var test1 = dupeRemove("");
console.log("test1:", test1);

var test2 = dupeRemove(1);
console.log("test2:", test2);

var test3 = dupeRemove("11223");
console.log("test3:", test3);

var test4 = dupeRemove("army!ar");
console.log("test4:", test4);

var test5 = dupeRemove("brian!bria");
console.log("test5:", test5);

var test6 = dupeRemove("aabbccdd");
console.log("test6:", test6);

var test1 = dupeRemove1("");
console.log("test1:", test1);

var test2 = dupeRemove1(1);
console.log("test2:", test2);

var test3 = dupeRemove1("11223");
console.log("test3:", test3);

var test4 = dupeRemove1("army!ar");
console.log("test4:", test4);

var test5 = dupeRemove1("brian!bria");
console.log("test5:", test5);

var test6 = dupeRemove1("aabbccdd");
console.log("test6:", test6);

/*

Solution

  use hash map
  1. create new string, hash map
  2. split string into letters array
  3. iterate thru letters, add key if new
  4. do nothing if dupe
  5. for each key in hash map, add to new string
  6. return string

  use sort (order not preserved)
  1. split string into array of letters
  2. sort letters
  3. walk thru sorted array
  4. use runner to track previous
  5. if dupe, remove and decrement i (length of arr is changed)
  6. if not dupe, change previous
  7. join array and return

*/