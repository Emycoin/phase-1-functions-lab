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
  let distanceInFeet = Math.abs(beginning - destination) * 264;
  let farePrice = Math.abs(distanceInFeet) * .02;
  if (distanceInFeet < 400){
      farePrice = 0;
      return farePrice;
  } else if ( distanceInFeet >= 400 && distanceInFeet <= 2000) {
    return (distanceInFeet-400)*.02
  } else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
    farePrice = 25;
    return farePrice;
  } else {
      return 'cannot travel that far';
  }
}

