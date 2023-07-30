const shape = new Circle("blue","APP");
expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  <circle cx="150" cy="100" r="80" fill="blue" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">APP</text> </svg>')


//example from README
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
  <circle cx="150" cy="100" r="80" fill=${this.color} />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text> 
  </svg>`