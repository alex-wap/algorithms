/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var arr = s.split("");
    console.log(arr);
    var newarr = [];
    for (var i = arr.length-1; i>=0;i--){
        newarr.push(arr[i]);
        console.log(arr[i]);
    }
    return newarr.join("");
};