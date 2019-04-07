class Sphinx {
  constructor() {
this.riddles = [];
  
}
collectRiddle(riddle) {
  this.riddles.push(riddle);
  if(this.riddles.length > 3) {
    this.riddles.shift(riddle);
  }
}
  attemptAnswer(answer) {
    if(this.riddles[0].answer === answer) {
      this.riddles.splice([0, 1]);
    }
  }
}

module.exports = Sphinx;