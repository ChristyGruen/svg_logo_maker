// class Shape {
//   constructor(){
    
// }
// }


class Circle {
  constructor(textColor, text, shapeColor){
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }
  createSVGContent(){ return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
  <circle cx="150" cy="100" r="80" fill='${this.shapeColor}' />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text> 
  </svg>`
  }
};

//https://www.w3.org/TR/SVG/shapes.html#RectElement

class Square {
  constructor(textColor, text, shapeColor){
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }
  createSVGContent(){ return`<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg"> 
  <rect x="100" y="100" width = "200" height = "200" fill='${this.shapeColor}' />
  <text x="200" y="215" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text> 
  </svg>`
  }
};

//https://www.w3.org/TR/SVG/shapes.html#PolygonElement and README
class Triangle {
  constructor(textColor, text, shapeColor){
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }
  createSVGContent(){ return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
  <polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}' />
  <text x="150" y="150" font-size="40" text-anchor="middle" fill='${this.textColor}'>${this.text}</text> 
  </svg>`
  }
};

// can't get multiple module.exports to work,  might have to split out into separate files
module.exports = Circle
// module.exports =  {
//   Circle: Circle,
//   Square: Square,
//   Triangle: Triangle
// }


