//import dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/shapes')

//might need to save filecounter to local storage to get this to work, or use datetimestamp
let fileCounter = 0

//ask the questions
//reference https://www.npmjs.com/package/inquirer
function start(){
inquirer
.prompt([
  {type: 'input', message:'Enter up to three characters', name: 'inputText', default:'BOB'},
  {type: 'input', message:'Enter a color for the text using a color keyword or hexadecimal number', name: 'inputTextColor',default: 'white'},
  {type: 'list', message:"Choose a shape from the provided list", choices: ['circle', 'triangle', 'square'], name:'inputShape', default:0},
  {type: 'input', message:'Enter a color to fill the shape using a color keyword or hexadecimal number', name: 'inputShapeColor', default:'black'}
]
)
.then((response)=>{
  if(response.inputShape == 'circle'){
    //do circle stuff
    console.log(`you picked a ${response.inputShapeColor} ${response.inputShape} with ${response.inputTextColor} ${response.inputText} initials - circle`)
    //get svg file contents
    let textColor = response.inputTextColor;
    console.log(textColor)
    let text = response.inputText;
    console.log(text)
    let shapeColor = response.inputShapeColor;
    console.log(shapeColor)
    let circley = new Circle(textColor,text,shapeColor)
    console.log(circley.shapeColor)
    let pineapple = circley.createSVGContent()
    console.log(pineapple)

  
    // //write file
    //filecounter reverts to 0 each time, use local storage to save, or use datetime stamp in name, other ideas? use input variables to create name?
    console.log(fileCounter)
    let fileName = `logo${fileCounter}.svg`
    fs.writeFile(fileName, pineapple,(err) => err ? console.error(err): console.log(`Generated ${fileName}`))
    fileCounter = fileCounter +1

  } else if (response.inputShape == 'square'){
    //do square stuff
    console.log(`you picked a ${response.inputShapeColor} ${response.inputShape} with ${response.inputTextColor} ${response.inputText} initials - square`)
  } else if (response.inputShape == 'triangle'){
    //do triangle stuff
    console.log(`you picked a ${response.inputShapeColor} ${response.inputShape} with ${response.inputTextColor} ${response.inputText} initials - triangle`)
  } else{
    console.log('what happened?')
  }

})
}

start()