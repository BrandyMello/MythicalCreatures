class Hobbit {
  constructor(name){
    this.name = name;
    this.disposition = "homebody";
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    if (this.name === "Frodo") {
      this.hasRing = true;
    }
  }
  celebrateBirthday() {
    this.age ++;
    if (this.age > 32) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;
















































// class Hobbit {
//   constructor(name, age = 0){
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = age;
//     this.isShort = true;
//     this.old = false;
//     this.adult = false;
//   }

//   celebrateBirthday() {
//     this.age ++;
//     if (this.age >= 33) {
//       this.adult = true;
//     }
//     if (this.age >= 101) {
//       this.old = true; 
//     }
//   }
// }

// module.exports = Hobbit;

// if (this.age < 3){

    // } 
  // } else if (this.age <= 32){
  //   this.adult = false;
  // } else if (this.age > 32){
  //   this.adult = true;
  // } else if (this.age >= 101){
  //   this.old = false;
  // }