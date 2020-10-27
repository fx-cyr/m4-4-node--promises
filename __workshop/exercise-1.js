// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  const myPromise = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      resolve(array.map((word) => {
        const capsWord = word.toUpperCase()
        return capsWord
        }))
    }
    else {
      reject("Your array contains a non-string element.")
    }
  })
  return myPromise
};

const sortWords = (array) => {
  return array.sort()
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
