// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getPositionFromAddress } = require("./exercise-3.2");
const { getIssPosition } = require("./exercise-3.1")
const request = require("request-promise")

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};


const getDistanceFromIss = (address) => {
  const issPosition = getIssPosition()
  const newPosition = getPositionFromAddress(address)

  return Promise.all([issPosition, newPosition])
  .then(([issPosition, newPosition]) => {
    return getDistance(issPosition, newPosition)
  })
  // write a new Promise here...
};

getDistanceFromIss(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
)
.then((result) => console.log(result));
