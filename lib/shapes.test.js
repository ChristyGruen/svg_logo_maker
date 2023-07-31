const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');


describe('Circle',()=>{
  describe('render',() =>{
    it('should provide a render string with the provided properties',() =>{
      const circleString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BOB</text></svg>';
      const shape = new Circle("white","BOB","black");
      expect(shape.render()).toEqual(circleString);
    });
  });
});

describe('Triangle',()=>{
  describe('render',() =>{
    it('should provide a render string with the provided properties',() =>{
      const triangleString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green"/><text x="150" y="150" font-size="40" text-anchor="middle" fill="blue">APP</text></svg>';
      const shape = new Triangle("blue","APP","green");
      expect(shape.render()).toEqual(triangleString);
    });
  });
});

describe('Square',()=>{
  describe('render',() =>{
    it('should provide a render string with the provided properties',() =>{
      const squareString = '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width = "200" height = "200" fill="99ff33" /><text x="200" y="215" font-size="60" text-anchor="middle" fill="800080">CAT</text></svg>';
      const shape = new Square("800080","CAT","99ff33");
      expect(shape.render()).toEqual(squareString);
    });
  });
});




//example from README
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

//from shapes.js
// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
//   <circle cx="150" cy="100" r="80" fill=${this.color} />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text> 
//   </svg>`