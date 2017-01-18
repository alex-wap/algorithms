// digits.js

// check if all characters in string are digits

function digits(str){
  // if null or empty string, falsey
  if(!str){
    return "error, string is null or empty";
  }

  // regular expression for digit
  var re = /\d/;

  // iterate thru string
  for (var i = 0; i < str.length; i++){
    // regex test of string
    // false if non-digit
    // true if digit
    if (!re.test(str[i])){
      return false
    }
  }
  // return true if you can traverse thru entire str
  return true;

}

var test1 = digits("");
console.log("test1:", test1);

var test2 = digits("123");
console.log("test2:", test2);

var test3 = digits("11223");
console.log("test3:", test3);

var test4 = digits("1AbBAbBbbbBsSssS");
console.log("test4:", test4);

/*

Solution

1. regular expression for digit (var re = /\d/;)
2. iterate thru string
3. regex test of string: false if non-digit / true if digit
4. return true if you can traverse thru entire str

*/