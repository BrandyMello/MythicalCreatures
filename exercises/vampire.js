class Vampire {
  constructor(name, pet, state){
    this.name = name;
    this.pet = pet || 'bat';
    if(this.thirsty = true){
      return true;
    }
  }
    drink(){
      this.thirsty = false;
  }
 }

module.exports = Vampire;