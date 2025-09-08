// async make a function that will return a promice
// syntax:
// async function myFunction() {...}
// await pauses the function exicution until the promice is resolved
// syntax:
// const result = await promise;
// async function always returns a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data loaded!");
    }, 2000);
  });
}
async function getData() {
  console.log("start");

  const result = await fetchData();//wait for 2s until the promise is resolved.
  console.log();
  console.log("end");
}
getData();
