// promice is used to handle asynchronous operations in JavaScript
// syntax:
// const promise = new Promise((resolve, reject) => {...});
// resolve: function to call when the promise is fulfilled
// reject: function to call when the promise is rejected
// .then() exicutes when the promise is resolved
// .catch() exicutes when the promise is rejected
// .finally() exicutes regardless of the promise outcome

let myPromise = new Promise((resolve, reject) => {//new promise is given to create a promise object
  let success = false;
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 2000);
});

myPromise
    .then(result=>console.log(result))//when promise is resolved
    .catch(error=>console.log(error))//when promise is rejected
    .finally(()=>console.log("Promise exicution finished!"));//always exicutes
    // asynchronous exicution is exucuted in the background without blocking the main thread