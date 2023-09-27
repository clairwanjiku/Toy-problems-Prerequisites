// Function to calculate demerit points based on car speed
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  // Check if the car's speed is within the speed limit
  if (speed < speedLimit) {
      console.log("Speed is within the limit. Ok."); 
      return 0; 
  } else {
     
     // Calculate the number of demerit points
     const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
     console.log("Exceeds the speed limit. Points:", demeritPoints); 

      // Check if the driver's license should be suspended
      if (demeritPoints > 12) {
          console.log("License suspended"); 
      }
      return demeritPoints;
  }
}


const carSpeed = 80; 
const points = calculateDemeritPoints(carSpeed); 

//  result
if (points === 0) {
  console.log("No demerit points. You're driving safely.");
} else if (points <= 12) {
  console.log("You have some demerit points. Drive carefully."); 
} else {
  console.log("License suspended. Please contact authorities."); 
}