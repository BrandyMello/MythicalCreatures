class Narwhal {

  constructor(name, color, family) {
    this.name = name;
    this.hornColor = color;
    this.friends = true;
    this.family = family || ['Mama', 'Boo'];
  }

  helloFam() {
    var strFam = this.family.toString();
    return `Hello, ${strFam}`;
  }
}

module.exports = Narwhal