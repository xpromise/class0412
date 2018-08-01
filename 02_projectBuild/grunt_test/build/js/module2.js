"use strict";

(function () {
  var arr = [1, 2, 3, 4, 5];
  var arr1 = arr.map(function (item) {
    return item + 10;
  });
  console.log(arr1);
  var arr2 = arr.filter(function (item) {
    return item > 3;
  });
  console.log(arr2);
})();
