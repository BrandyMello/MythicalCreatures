var assert = require('chai').assert;
var Narwhal = require('../exercises/narwhal');

describe('Narwhal', function() {

  it('should be a function', function () {
    assert.isFunction(Narwhal);
 });

  it('should instantiate our good friend, Narwhal', function() {
    
    var narwhal = new Narwhal();
   
    assert.isObject(narwhal);
  });

  it('should have a name', function() {
  
  var narwhal = new Narwhal('Betty');

  assert.equal(narwhal.name, 'Betty');
  });

  it('should have a colored horn', function() {

    var narwhal = new Narwhal('Lena', 'rainbow');

    assert.equal(narwhal.name, 'Lena');
    assert.equal(narwhal.hornColor, 'rainbow');
  });

  it('should have other narwhal friends', function() {

    var narwhal = new Narwhal('Isaac', 'silver');

    assert.equal(narwhal.friends, true);
  });

  it('should have family', function() {

    var narwhal = new Narwhal('Mertal', 'red', ['Mama', 'Papa', 'Boo']);

    assert.deepEqual(narwhal.family, ['Mama', 'Papa', 'Boo']);
  });

  it('should have a default family', function() {

    var narwhal = new Narwhal('Kevin', 'blue');

    assert.deepEqual(narwhal.family, ['Mama', 'Boo']);
  });

  it('should call out to family when coming home', function(){

    var narwhal = new Narwhal('Kelly', 'turqoise');

    narwhal.helloFam();
    assert.equal(narwhal.helloFam(), 'Hello, Mama,Boo')
  });

});