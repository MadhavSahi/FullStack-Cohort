const func1 = () => {
  let a = 1;
  console.log(a);
};
const func2 = () => {
  let a = 1;
  console.log(a);
};
let x = 1;
let y = x;
// console.log(x===y);
const func3 = func1;
// console.log(func3===func1);
const obj1 = {
  key1: 1,
  key2: 2,
};
const obj2 = {
  key1: 1,
  key2: 2,
};
const obj3 = obj1;
// console.log(obj1==obj3);

const array1 = [1, 2, 3, 4, 5, 6];

const array2 = array1.map((x) => {
  return x * 7;
});
const array3 = array1.filter((x) => {
  return x % 2 == 0;
});
// const func0=(acc,curr)=>{
//     acc=acc+curr;
//     return acc;
// }
const array4 = array1.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(array4);
