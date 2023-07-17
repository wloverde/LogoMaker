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