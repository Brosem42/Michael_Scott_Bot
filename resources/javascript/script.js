
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





