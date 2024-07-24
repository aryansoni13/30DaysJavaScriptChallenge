// ! TASK 1

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});

//! Task 2

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => {
  console.error(error);
});

//! Task 3

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data} and processed`);
    }, 1000);
  });
};

fetchData()
  .then((data) => processData(data))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//! Tasl 4

const asyncFunction1 = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async function resolved");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
};

asyncFunction1();

//! Task 5

const asyncFunction2 = async () => {
  const promise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Async function rejected");
    }, 2000);
  });

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

asyncFunction2();

//! Tasl 6

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

//! Task 7

const fetchDataAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchDataAsync();

//! Task 8

const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Result A"), 1000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Result B"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Result C"), 3000)
);

Promise.all([promiseA, promiseB, promiseC])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));

//! Task 9

const promise6 = new Promise((resolve) =>
  setTimeout(() => resolve("First resolved"), 3000)
);
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("Second resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third resolved"), 1000)
);

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
