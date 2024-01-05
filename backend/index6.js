const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("PASS");
    } else {
      reject("FAIL");
    }
  }, 1000);
});

const pro = async () => {
  try {
    const res = await promise1;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  finally{
    console.log("FINALLY");
  }
};
pro();
// promise1
//   .then((ans) => {
//     console.log(ans);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("FINALLY EXECUTED");
//   });
