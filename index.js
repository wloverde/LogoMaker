// Include packages needed for this application
const { write } = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const Shape = require('./assets/lib/shapes');
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


// write SVG File
const generateSVG  = ({text,textColor,shape,logoColor}) => {
    if (shape === 'circle') {
        return new Shape.Circle(text, textColor, logoColor).render();
    } else if (shape === 'triangle') {
        return new Shape.Triangle(text, textColor, logoColor).render();
    } else { //return square shape
        return new Shape.Square(text, textColor, logoColor).render();
    }
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