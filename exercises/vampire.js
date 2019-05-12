class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
}
  drink() {
    this.thirsty = false;
 }
}
module.exports = Vampire;





















  // constructor(name, pet, state){
  //   this.name = name;
  //   this.pet = pet || 'bat';
  //   if(this.thirsty = true){
  //     return true;
  //   }
  // }
  //   drink(){
  //     this.thirsty = false;
  // }