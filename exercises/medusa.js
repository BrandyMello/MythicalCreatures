class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    // console.log(victim);
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.shift(victim);
      this.statues[2].stoned = true;
    }
  }
}

module.exports = Medusa



























// class Medusa {
//   constructor(name) {
//     this.name = name;
//     this.statues = [];
//     // this.stoned = false;

//   }

//   stare(victim) {
//     if(this.statues.length < 3) {
//       this.statues.push(victim);
//       victim.stoned = true;
//     } else {
//       this.statues[0].stoned = false;
//       this.statues.shift(victim);
//       this.statues.push(victim);
//       this.statues[2].stoned = true;
//     } 
//     }
//   }

// module.exports = Medusa;