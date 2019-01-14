function LoopDivisor() {
  // Loop from 1 to 100
  for (let loopVar = 1; loopVar < 101; loopVar++) {
    console.log(loopVar);
    if (loopVar % 3 === 0) {
      console.log("Happy");
    }
  }
}
LoopDivisor();
