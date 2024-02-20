// // function findPairsWithSum(arr, targetSum) {
// //   const pairs = [];
// //   const sett = new Set();
// //   for (x of arr) {
// //     const complement = targetSum - x;
// //     if (sett.has(complement)) {
// //       pairs.push([complement,x]);
// //     } else {
// //       sett.add(x);
// //     }
// //   }
// //   return pairs;
// // }

// // // Example usage:
// // const inputArray = [1, 5, 7, -1, 5];
// // // const inputArray = [1, 5, 5, 5, 1];
// // const targetSum = 6;

// // const resultPairs = findPairsWithSum(inputArray, targetSum);
// // console.log(resultPairs);

// // const groupAnagrams=(words)=>{
// //     let resultObj={};
// //     for(let x of words){
// //         const newWord=x.split('').sort().join('');
// //         if(!resultObj[newWord]){
// //             resultObj[newWord]=[x]
// //         }
// //         else{
// //             resultObj[newWord].push(x);
// //         }
// //     }
// //     const resultArr=Object.values(resultObj);
// //     return resultArr;
// // };

// // const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// // const grouped = groupAnagrams(words);
// // console.log(grouped);

// const findIndexWithEqualSum = (inputArray) => {
//   const totalArrSum = inputArray.reduce((acc, cumm) => acc + cumm, 0);
//   let leftSum = 0;
//   for (let i = 0; i < inputArray.length; i++) {
//     const rightSum = totalArrSum - leftSum - inputArray[i];
//     if (leftSum === rightSum) {
//       return i;
//     }
//     leftSum += inputArray[i];
//   }
//   return -1;
// };

// const inputArray = [1, 2, 5, 4, 2, 3, 3];
// const resultIndex = findIndexWithEqualSum(inputArray);
// console.log(resultIndex);
const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the email address: ', (email) => {
  // Extract username U
  const atIndex = email.indexOf('@');
  const username = atIndex !== -1 ? email.substring(0, atIndex) : email;

  // Form the resultant string R
  const result = `${username}${username.length}`;

  // Print the output
  console.log(result);

  rl.close();
});
