function findDuplicates(arr) {
  let res = [];
  let countMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]]) {
      countMap[arr[i]] += 1;
    } else {
      countMap[arr[i]] = 1;
    }
  }
  for (let key in countMap) {
    if (countMap[key] > 1) {
      res.push(parseInt(key));
    }
  }
  console.log(res);
}
let arr = [1, 4, 5, 2, 3, 1, 7, 4];
findDuplicates(arr);
