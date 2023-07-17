// Include packages needed for this application
const { write } = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// array that in input into inquirer.prompt() for terminal input
const questions = () => {
    return inquirer
        .prompt([
            // WHEN I am prompted for text
            {
                type: 'input',
                message: 'Enter text to be set within Logo (3 characters maximum): ',
                name: 'text',
            },
            // WHEN I am prompted for text color
            {
                type: 'input',
                message: 'What color would you like your text to be?(Keyword or Hexadecimal): ',
                name: 'textColor',
            },
            // WHEN I am prompted for the Logo Shape
            {
                type: 'list',
                message: 'Which Shape would you like your logo to be: ',
                name: 'shape',
                choices: ['circle', 'triangle', 'square'],
            },
            // WHEN I am prompted for the Logo Color
            {
                type: 'input',
                message: 'What color would you like your Logo to be?(Keyword or Hexadecimal): ',
                name: 'logoColor',
            },
        ])
};
// returns value based off shape selection
const shapeChoice = shape => {
    if (shape === 'circle') {
        return '<circle cx="150" cy="100" r="80"';
    } else if (shape === 'triangle') {
        return '<polygon points="150, 18 244, 182 56, 182"'
    } else { //return square shape
        return '<rect x="75" y="25" width="150" height="150"'
    }
}

// shifts text down to fit triangle background
const textPlacement = shape => {
    if (shape === 'triangle') {
        return 160
    } else { 
        return 125
    }
}

// write SVG File
const generateSVG  = ({text,textColor,shape,logoColor}) => {

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeChoice(shape)}
fill="${logoColor}" />
  
<text x="150" y="${textPlacement(shape)}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
</svg>`


}

// Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeFile(`logo.svg`, generateSVG(answers)))
    .then(() => console.log(`Generated logo.svg`))
    .catch((err) => console.error(err))
}

// Function call to initialize app
init();