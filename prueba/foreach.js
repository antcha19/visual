var a = [3, 21, 15, 61, 9, 54];
var sum = 0;
a.forEach (function (num) {//
sum += num;
});
console.log (sum); // Print 163
a.forEach (function (num, index, array) {// index and array are optional parameters
console.log ("Index" + index + "in [" + array + "] is" + num);
}); // Print -> Index 0 in [3,21,15,61,9,54] is 3, Index 1 in [3,21,15,61,9,54] is 21, ...