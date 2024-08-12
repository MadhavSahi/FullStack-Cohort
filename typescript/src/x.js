const p = new Promise((resolve, reject) => {
  if (true) {
    resolve("hey-resolve");
  } else {
    reject("hey-reject");
  }
});
async function asyncFxn() {
  console.log("hey1");
  const a = 1111;
  //console.log(a);
  console.log("pre1");
  console.log("pre2");
  const ans = await p;
  console.log(ans);
  console.log("hey4");
  console.log("hey5");
  console.log("hey6");
}

console.log("hey2");
asyncFxn();
console.log("hey3");
console.log("post");
