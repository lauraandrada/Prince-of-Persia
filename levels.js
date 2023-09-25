// getStairsMovementDirection
function getStairsMovementDirection(stairNumber, isClimbingStairs) {
  if (isClimbingStairs === false && stairNumber % 2 === 0) {
    return "down"; 
  } else if (isClimbingStairs === false && stairNumber % 2 === 1){
    return "right";
  } else if(isClimbingStairs === true && stairNumber % 2 === 0) {
    return "up"; 
  } else if (isClimbingStairs === true && stairNumber % 2 === 1){
    return "right";
  }
};

// getZigZagMovementDirection
function getZigZagMovementDirection(step){

  if ([1,2,4,5,7,8].includes(step)) {
    return "right";
  }else if([3,9].includes(step)){
    return "down";
  }else 
  return "up"
};

// manuallyControl
let pressed = 0;
function manuallyControl(key) {
  if (key == "KeyQ") {
    pressed++;
  }
  
  if (pressed % 2 == 0) {
    if (key == "KeyA" ){
      moveDirection("left");
    }else if(key == "KeyW"){
      moveDirection("up");
    }else if(key == "KeyS" ){
      moveDirection("down");
    }else if(key == "KeyD" ){
      moveDirection("right");
    }
  }else { 
    if(key == "ArrowLeft" ){
      moveDirection("left");
    }else if(key == "ArrowUp"){
      moveDirection("up");
    }else if(key == "ArrowDown" ){
      moveDirection("down");
    }else if(key == "ArrowRight" ){
      moveDirection("right");
    }
  }
};

//Potion functions 

function givePotion2Answer(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
};

function givePotion3Answer(arr){
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]){
      num = arr[i];
    }
  }
  return num;
};

function givePotion4Answer(x, y){
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (y.includes(x[i])) {
      result += x[i].toUpperCase();
    } else {
      result += x[i];
    }
  }
  return result;
}

function givePotion5Answer(hours, minutes, seconds, secondsToAdd){
  seconds += secondsToAdd;
  if (seconds > 59) {
    seconds -= 60;
    minutes += 1;
  }
  if (minutes > 59) {
    minutes -= 60;
    hours += 1
  }
  if(hours > 23) {
    hours = 0;
  }
  return `${hours}:${minutes}:${seconds}`;
}

function givePotion6Answer(input){
  let numbers = input.split("*");
  let sum = 0;
  for (const item of numbers) {
    if (typeof Number(item) === "number") {
      sum += Number(item);
    }
  }
  return sum;
}

function givePotion7Answer(txt){
  let splitTxt = txt.split("");
  let sum = 0;
  for (const myTxt of splitTxt) {
    if (isNaN(parseInt(myTxt)) == false) {
      sum += parseInt(myTxt);
    }
    }
    return sum;
   
};

function givePotion8Answer(numbers){
  for (let i = 2; i < numbers - 1; i++) {
    if (numbers % i === 0) {
      return false;
    }
  return true;
  }
};

function givePotion9Answer(array){
  array.sort(function(a, b) {return a - b});
  return array[0] + array[1];
}

function givePotion10Answer(letter,str){
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
};

function givePotion11Answer(arr, toReplace, useInstead){
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === toReplace) {
      res += useInstead;
    } else {
      res += arr[i];
    }
  }
  return res;
};

function givePotion12Answer(list){
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < 0) {
      sum += (-1 * list[i]);
    }else{
      sum += list[i];
    } 
  }
  return sum;
};

// Potion functions ^

let toSkip = "";
// let movement = false;
function level7Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
  // movement = false;
  const arr = [elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince];
  const directions = ["left", "right", "up", "down"];
  const freeSpaces = arr.map(function(item, idx) {return [directions[idx], item]}).filter(function(item) {return item[1] === 11 && item[0] !== toSkip});
  const princessTile = arr.map(function(item, idx) {return [directions[idx], item]}).filter(function(item) {return item[1] === 99});
  if (princessTile.length === 1)  {
    hasMovedToTile(princessTile[0][0], princessTile[0][1]);
  } else if (freeSpaces.length === 2) {
    hasMovedToTile("down", elementDownOfPrince);
  } else if (freeSpaces.length === 1) {
    hasMovedToTile(freeSpaces[0][0], freeSpaces[0][1]);
  }

}

function hasMovedToTile(direction, tileToCheck) {
  if (tileToCheck === 99) {
    moveDirection(direction);
  } else if (tileToCheck === 11 && direction !== toSkip) {
    moveDirection(direction);
    if (direction === "left") {
      toSkip = "right";
    } else if (direction === "right") {
      toSkip = "left";
    } else if (direction === "up") {
      toSkip = "down";
    } else if (direction === "down") {
      toSkip = "up";
    }
  } else if (tileToCheck === 13) {
    return;
  }
}

function level8Move(gameMap) {
  const directionsArr = [];
  const playerPos = [];
  for (let i = 0; i < gameMap.length; i++) {
    if (gameMap[i].indexOf(10) != -1) {
      playerPos.push(i);
      playerPos.push(gameMap[i].indexOf(10));
      break;
    }
  }
  let neighbours = {
    left: gameMap[playerPos[0]][playerPos[1] - 1], 
    right: gameMap[playerPos[0]][playerPos[1] + 1], 
    up: gameMap[playerPos[0] - 1][playerPos[1]], 
    down: gameMap[playerPos[0] + 1][playerPos[1]]
  }
  while (!Object.keys(neighbours).map((key) => neighbours[key]).includes(99)) {
    const freeSpaces = [];
    for (const key in neighbours) {
      if (neighbours[key] === 11) {
        freeSpaces.push(key);
      }
    }
    if (freeSpaces.length === 2) {
      directionsArr.push("down");
      gameMap[playerPos[0]][playerPos[1]] = 13;
      playerPos[0] += 1;
    } else if (freeSpaces.length === 1) {
      directionsArr.push(freeSpaces[0]);
      gameMap[playerPos[0]][playerPos[1]] = 13;
      if (freeSpaces[0] === "left") {
        playerPos[1] -= 1;
      } else if (freeSpaces[0] === "right") {
        playerPos[1] += 1;
      } else if (freeSpaces[0] === "up") {
        playerPos[0] -= 1;
      } else if (freeSpaces[0] === "down") {
        playerPos[0] += 1;
      }
    }
    neighbours = {
      left: gameMap[playerPos[0]][playerPos[1] - 1], 
      right: gameMap[playerPos[0]][playerPos[1] + 1], 
      up: gameMap[playerPos[0] - 1][playerPos[1]], 
      down: gameMap[playerPos[0] + 1][playerPos[1]]
    };
  }
  if (neighbours.left === 99) {
    directionsArr.push("left");
  } else if (neighbours.right === 99) {
    directionsArr.push("right");
  } else if (neighbours.up === 99) {
    directionsArr.push("up");
  } else {
    directionsArr.push("down");
  }
  return directionsArr;
}


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "getStairsMovementDirection", content: getStairsMovementDirection, type: "function" },
    { name: "getZigZagMovementDirection", content: getZigZagMovementDirection, type: "function" },
    { name: "manuallyControl", content: manuallyControl, type: "function" },
    { name: "givePotion2Answer", content: givePotion2Answer, type: "function" },
    { name: "givePotion3Answer", content: givePotion3Answer, type: "function" },
    { name: "givePotion4Answer", content: givePotion4Answer, type: "function" },
    { name: "givePotion5Answer", content: givePotion5Answer, type: "function" },
    { name: "givePotion6Answer", content: givePotion6Answer, type: "function" },
    { name: "givePotion7Answer", content: givePotion7Answer, type: "function" },
    { name: "givePotion8Answer", content: givePotion8Answer, type: "function" },
    { name: "givePotion9Answer", content: givePotion9Answer, type: "function" },
    { name: "givePotion10Answer", content: givePotion10Answer, type: "function" },
    { name: "givePotion11Answer", content: givePotion11Answer, type: "function" },
    { name: "givePotion12Answer", content: givePotion12Answer, type: "function" },
    { name: "level7Move", content: level7Move, type: "function" },
    { name: "level8Move", content: level8Move, type: "function" },
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };