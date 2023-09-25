const readline = require('readline');

const rl = readline.createInterface

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  if (speed <= speedLimit) {
    return 'Ok';
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
      return 'License suspended';
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

rl.question('Enter the speed of the car (in km/h): ', (input) => {
  const speed = parseFloat(input);

  if (!isNaN(speed)) {
    const result = calculateDemeritPoints(speed);
    console.log(result);
  } else {
    console.log('Invalid input. Please enter a valid speed.');
  }

  rl.close();
});