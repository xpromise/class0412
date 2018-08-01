(() => {
  const arr = [1, 2, 3, 4, 5];
  const arr1 = arr.map(item => item + 10);
  console.log(arr1);
  const arr2 = arr.filter(item => item > 3);
  console.log(arr2);
})();