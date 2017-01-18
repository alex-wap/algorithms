// roman.js

// How to convert a number to Roman numerals? 

function roman(num) {
  // create hash map
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  // create output
  var roman = '';
  // for each key in hash
  for (var i in lookup ) {
    // while the number is greater than the value
    while ( num >= lookup[i] ) {
      // add key to string
      roman += i;
      // subtract value from num
      num -= lookup[i];
    }
  }
  return roman;
}

var test1 = roman(4);
console.log("test1:", test1);

var test2 = roman(123);
console.log("test2:", test2);

var test3 = roman(199);
console.log("test3:", test3);

var test4 = roman(1049);
console.log("test4:", test4);

/*

Solution

1. create hash map
2. create output string
3. for each key in hash
4. while the number is greater than the value
5. add key to string
6. subtract value from num
7. return output string

*/