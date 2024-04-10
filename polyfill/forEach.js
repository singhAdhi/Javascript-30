//polyfill foreach
let array = [1, 2, 3, 4, 5];

let data = array.forEach((x) => {
  return x;
});

console.log(data);

function all(i) {
  console.log(i);
}

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

array.myForEach(all);

//polyfill map

Array.prototype.myMap = function (cb) {
  let latArr = [];
  for (let i = 0; i < this.length; i++) {
    latArr.push(cb(this[i]));
  }
  console.log(latArr);
};

array.myMap((el) => el * 2);

//polyfill of filter

Array.prototype.myFilter = function (cb) {
  let filterData = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) filterData.push(this[i]);
  }
  return filterData;
};
array.myFilter((data) => data > 5);

//polyfill of reduce

Array.prototype.myReduce = function () {
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc += this[i];
  }
  return acc;
};

a.myReduce();
