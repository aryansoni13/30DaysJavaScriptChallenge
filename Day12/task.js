//! Task 1

const throwError = () => {
  throw new Error("This is an intentional error");
};

try {
  throwError();
} catch (error) {
  console.error("Caught an error:", error.message);
}

//! Task 2

const divideNumbers = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
};

try {
  console.log(divideNumbers(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}

//! Task 3

const divideNumber = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
};

try {
  console.log(divideNumber(10, 0));
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("This will always run");
}

//! Task 4

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const throwCustomError = () => {
  throw new CustomError("This is a custom error");
};

try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Caught a CustomError:", error.message);
  } else {
    console.error("Caught an error:", error.message);
  }
}

//! Task 5

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateInput = (input) => {
  if (input.trim() === "") {
    throw new ValidationError("Input cannot be empty");
  }
  return "Valid input";
};

try {
  console.log(validateInput(" "));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation error:", error.message);
  } else {
    console.error("Error:", error.message);
  }
}

//! Task 6

const randomPromise = new Promise((resolve, reject) => {
  Math.random() > 0.5
    ? resolve("Promise resolved")
    : reject("Promise rejected");
});

randomPromise
  .then((message) => console.log(message))
  .catch((error) => console.error("Caught an error in promise:", error));

//! Task 7

const asyncFunction = async () => {
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error("Caught an error in async function:", error.message);
  }
};

asyncFunction();

//! Task 8

fetch("https://invalid.url")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error.message));

//! Task 9

const fetchData = async () => {
  try {
    const response = await fetch("https://invalid.url");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

fetchData();
