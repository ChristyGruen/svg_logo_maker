const Shape = require('./shapes.js');

//https://www.w3.org/TR/SVG/shapes.html#RectElement

class Square extends Shape{

  render(){ return`<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width = "200" height = "200" fill="${this.shapeColor}" /><text x="200" y="215" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
};


module.exports = Square



