// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  let distanceInBlocks = 42 - pickupLocation;
  return Math.abs(distanceInBlocks);
}
function distanceTravelledInFeet(beginning, destination) {
  let distanceInFeet = (beginning - destination) * 264;
  return Math.abs(distanceInFeet);
}
function distanceFromHqInFeet(pickupLocation) {
  let distanceInBlocks = 42 - pickupLocation;
  return Math.abs(distanceInBlocks) * 264;
}
function calculatesFarePrice(beginning, destination) {
  let distanceInFeet = (beginning - destination) * 264;
  let farePrice = Math.abs(distanceInFeet) * .02;
  if (distanceInFeet < 400){
      farePrice = 0;
  } else if ( distanceInFeet >= 400 && distanceInFeetlearn <= 2000) {
    return farePrice - (8.00);
  } else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
    farePrice = 25;
    return farePrice;
  } else {
      return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(43, 42));

