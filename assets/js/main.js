// First version of function with if statements
function LoopDivisorIf() {
  // Loop from 1 to 100
  for (let loopVar = 1; loopVar < 101; loopVar++) {
    if (loopVar % 3 === 0 && loopVar % 5 !== 0) {
      console.log("Happy");
    } else if (loopVar % 5 === 0 && loopVar % 3 !== 0) {
      console.log("Sad");
    } else if (loopVar % 5 === 0 && loopVar % 3 === 0) {
      console.log("Both");
    } else if (loopVar % 2 === 0) {
      console.log("Furious");
    } else if (loopVar % 11 === 0 || loopVar % 7 === 0) {
      console.log("Lonely");
    } else {
      console.log(loopVar);
    }
  }
}
// Second version of function (ternary operator)
function LoopDivisorTernary() {
  for (let loopVar = 1; loopVar < 101; loopVar++) {
    loopVar % 3 === 0 && loopVar % 5 !== 0
      ? console.log("Happy")
      : loopVar % 5 === 0 && loopVar % 3 !== 0
      ? console.log("Sad")
      : loopVar % 3 === 0 && loopVar % 5 === 0
      ? console.log("Both")
      : loopVar % 2 === 0
      ? console.log("Furious")
      : loopVar % 11 === 0 || loopVar % 7 === 0
      ? console.log("Lonely")
      : console.log(loopVar);
  }
}
LoopDivisorTernary();
