



























// class Centaur {

//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//     this.cranky = false;
//     this.standing = true;
//     this.counter = 0;
//     this.standing = true;
//     this.layingDown = false;
//   }

//   shoot() {
//     this.countAction();
//     if (this.cranky === true || this.layingDown === true) {
//       return 'NO!'
//     } else {
//       return 'Twang!!!';
//     }
//   }

//   run() {
//     if (this.layingDown === true) {
//       return 'NO!'
//     } else {
//      this.countAction();
//     return 'Clop clop clop clop!!!' 
//     }  
//   }

//   countAction() {
//     this.counter ++;
//     if (this.counter >=3) {
//       this.cranky = true;
//     }
//   }

//   sleep() {
//     if (this.standing === true) {
//       return 'NO!';
//     } else {
//       this.cranky = false;
//       return 'ZZZZ';
//     }
//   }

//   layDown() {
//     this.standing = false;
//     this.layingDown = true;
//   }

//   standUp() {
//     this.standing = true;
//     this.layingDown = false;
//     this.counter = 0;
//   }

//   drinkPotion() {
//     if (this.cranky === false) {
//       this.cranky = true;
//     } else {
//       this.cranky = false;
//     }
//     if (this.layingDown = true) {
//       return 'Not while I\'m laying down!'
//     } 
//   }
// }

// module.exports = Centaur




























// class Centaur {
//   constructor(name, breed){
//     this.name = name;
//     this.breed = breed;
//     this.cranky = false;
//     this.standing = true;
//     this.counter = 0;
//     this.standing = true;
//     this.layingDown = false;

//   }
//   shoot() {
//     this.checkCranky();
//     if (this.cranky === true) {
//       return 'NO!'
//   } else {
//     return "Twang!!!";
//   }
//   }
//   run() {
//     this.checkCranky();
//     if (this.layingDown === true){
//       return 'NO!'
//     } else {
//       return 'Clop clop clop clop!!!'
//     }
//   }
//   checkCranky() {
//     this.counter ++;
//     if (this.counter >= 3 || this.layingDown === true) {
//       this.cranky = true
//     }
//   }
//     sleep() {
//       if (this.standing === true) {
//         return 'NO!'
//       } else {
//         this.cranky = false;
//         this.counter = 0;
//         return 'ZZZZ';
//       }
//     }
//     layDown() {
//         this.standing = !this.standing;
//         this.layingDown = !this.layingDown
//       }
//     standUp() {
//         this.standing = !this.standing;
//         this.layingDown = !this.layingDown;
//       }
//     drinkPotion() {
//       if (this.standing === true) {
//         this.cranky = !this.cranky;
//       } else {
//         return 'Not while I\'m laying down!';
//       }
//     }
//     }

// module.exports = Centaur;

