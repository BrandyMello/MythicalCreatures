class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    if (this.human === true){
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }
  eat(victim) {
    if (this.human === true){
      return
    } else {
      victim.alive = false;
      this.human = true; 
    }
    
  }
}

module.exports = Werewolf

























// class Werewolf {

//   constructor(name, location) {
//     this.name = name;
//     this.location = location;
//     this.human = true;
//     this.wolf = false;
//     this.hungry = false;
//   }

//   change() {
//     this.human = !this.human;
//     this.wolf = !this.wolf;
//     this.hungry = !this.hungry;
//   }

//   eat(victim) {
//     if (this.human === true) {
//       return;
//     }
//     victim.alive = false;
//     this.human = !this.human;
//   }
// }

// module.exports = Werewolf;