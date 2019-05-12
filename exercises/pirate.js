class Pirate {

  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.heinousAct = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.heinousAct ++;
    if (this.heinousAct >= 3) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty = 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;

























// class Pirate {
//   constructor(name, job) {
//     this.name = name;
//     this.job = job || 'Scallywag';
//     this.cursed = false;
//     this.heinousActs = 0;
//     this.booty = 0;

//   }
//   commitHeinousAct() {
//     this.heinousActs ++
//       if(this.heinousActs < 3){
//         return this.cursed = false;
//       } else {
//         return this.cursed = true;
//       }
//     }

//   robShip() {
//     this.booty += 100;
//     return "YAARRR!"
//   }
// }
// module.exports = Pirate;
