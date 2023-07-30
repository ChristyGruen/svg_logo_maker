const Shape = require('./shapes.js');

//https://www.w3.org/TR/SVG/shapes.html#PolygonElement and README
class Triangle extends Shape {

  createSVGContent(){ return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
  <polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}' />
  <text x="150" y="150" font-size="40" text-anchor="middle" fill='${this.textColor}'>${this.text}</text> 
  </svg>`
  }
};

module.exports = Triangle


