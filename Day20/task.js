//! Task 1

localStorage.setItem("myString", "Hello, World!");

const retrievedString = localStorage.getItem("myString");
console.log(retrievedString);

//! Task 2

const myObject = { name: "John Doe", email: "john@example.com" };
localStorage.setItem("myObject", JSON.stringify(myObject));

const retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(retrievedObject);

//! Task 4
console.log("Before removal:", localStorage.getItem("myObject"));

localStorage.removeItem("myObject");
console.log("After removal:", localStorage.getItem("myObject"));

//! Task 5

sessionStorage.setItem("mySessionString", "Session Hello!");

const retrievedSessionString = sessionStorage.getItem("mySessionString");
console.log(retrievedSessionString);

//! Task 6

const mySessionObject = {
  sessionName: "Jane Doe",
  sessionEmail: "jane@example.com",
};
sessionStorage.setItem("mySessionObject", JSON.stringify(mySessionObject));

const retrievedSessionObject = JSON.parse(
  sessionStorage.getItem("mySessionObject")
);
console.log(retrievedSessionObject);

//! Task 8

console.log("Before removal:", sessionStorage.getItem("mySessionObject"));

sessionStorage.removeItem("mySessionObject");

console.log("After removal:", sessionStorage.getItem("mySessionObject")); // Output: null

//! Task 9

function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  const localStorageValue = localStorage.getItem(key);
  const sessionStorageValue = sessionStorage.getItem(key);

  console.log(`LocalStorage: ${localStorageValue}`);
  console.log(`SessionStorage: ${sessionStorageValue}`);
}

saveToBothStorages("testKey", "testValue");

//! Task 10
function clearBothStorages() {
  localStorage.clear();
  sessionStorage.clear();

  console.log("LocalStorage after clear:", localStorage.getItem("testKey")); // Output: null
  console.log("SessionStorage after clear:", sessionStorage.getItem("testKey")); // Output: null
}

clearBothStorages();
