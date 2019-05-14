class Wizard {

  constructor(object) {
    this.name = object.name;
    this.isRested = true;
    this.counter = 0;
    this.bearded = true;
    if (object.bearded === false) {
      this.bearded = false;
    }
  }
  incantation(spell) {
    return spell.toUpperCase();
  }
  cast() {
    this.counter++;
    if (this.counter >= 3){
      this.isRested = false;
      return "I SHALL NOT CAST!"
    } else {
      return 'MAGIC BULLET';
    }
  }
}

module.exports = Wizard;
























// class Wizard {

//   constructor(obj) {
//     this.name = obj.name;
//     this.bearded = true;
//     this.isRested = true;
//     this.spellCounter = 0;

//     if (obj.bearded === false) {
//       this.bearded = false;
//     }
//   }

//   incantation(spell) {
//     return spell.toUpperCase();
//   }

//   cast() {
//     this.spellCounter ++;
//     if (this.spellCounter >= 3){
//       this.isRested = false;
//       return 'I SHALL NOT CAST!'
//     }
//     return 'MAGIC BULLET';
//   }
// }

// module.exports = Wizard;





// return obj.beareded !== false
// this.bearded = obj.bearded !== false;