let myPromise = new Promise((resolve, reject) => {
  const prompt = require("prompt-sync")();
  let success = prompt("Enter true or false:");
  setTimeout(() => {
    if (success==="true") {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise exicution finished!"));
