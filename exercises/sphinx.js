class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;

  }

  collectRiddle(obj) {
    this.riddles.push(obj);
    if (this.riddles.length >= 4) {
      this.riddles.shift();
    }
  }

  attemptAnswer(attempt) {
    for (var i = 0; i < this.riddles.length; i++) {
    //   if (this.riddles[0].answer === attempt && this.riddles[1].answer === attempt) {
    //     this.riddles.pop();
    //     return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
    // }
     if (this.riddles[i].answer === attempt) {
        this.riddles.pop();
    } else {
        this.heroesEaten = 1;
    } 
  }
    return 'That wasn\'t that hard, I bet you don\'t get the next one';   
  }
}

module.exports = Sphinx
































// class Sphinx {
//   constructor() {
// this.riddles = [];
  
// }
// collectRiddle(riddle) {
//   this.riddles.push(riddle);
//   if(this.riddles.length > 3) {
//     this.riddles.shift(riddle);
//   }
// }
//   attemptAnswer(answer) {
//     if(this.riddles[0].answer === answer) {
//       this.riddles.splice([0, 1]);
//     }
//   }
// }

// module.exports = Sphinx;