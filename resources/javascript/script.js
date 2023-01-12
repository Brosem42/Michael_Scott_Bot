// With the Fisher-Yates algorithm, I prefer to break it down piece by piece. The algorithm is similar to when you visit the ice skating rink and swap out your shoes for skates. You take a token, hold ownerhsip of your rentals, & return them whenever you want.

const doors = ['bot', 'reward', 'reward', 'reward'];
let rewardDoorsPicked = 0;
let botPicked = false;
let winningDoor = false;

// Shuffle the elements of the doors array using the Fisher-Yates algorithm
const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // Remaining elements to shuffle
  while (currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

// Resets var & start the next round
const resetRound = () => {
  rewardDoorsPicked = 0;
  botPicked = false;
  winningDoor = false;
}

// start a round 
const startRound = () => {
  resetRound();
  shuffle(doors);
}

// Pick a door
const pickDoor = (doorId) => {
    if (doors[doorId] === 'bot') {
        if (rewardDoorsPicked === doors.length - 1) {
            botPicked = true;
            winningDoor = true;
            return 'you win!';
        } else {
            winningDoor = false;
            return 'you lose! you need to pick all rewards first';
        }
    } else {
        if(botPicked){
            winningDoor = false;
            return 'you lose! you have already picked the bot'
        }
        rewardDoorsPicked++;
        if (rewardDoorsPicked === doors.length - 1) {
            return 'all rewards picked, now you can open the bot door';
        } else {
            return 'you found a reward';
        }
    }
}

// Run the game
startRound();
console.log(pickDoor(0)) 
console.log(pickDoor(1)) 
console.log(pickDoor(2))
console.log(pickDoor(3))
if(winningDoor) {
    console.log('you win!')
} else {
    console.log('you lose!')
}
