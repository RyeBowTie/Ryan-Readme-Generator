const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        name:'title',
        type: 'input',
        message: 'What is the title of your Project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a brief description of your project.'
    },
    {
        name: 'install',
        type: 'input',
        message: 'Are there any installation instructions?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How do you use this application?'
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'How can others help contribute to this project?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'How can others test your application?'
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'What is this application\'s licence?',
        choices: 
        [ 
            'Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]    
    },
])
.then (generateReadMe)

function generateReadMe(response) {
    console.log(response);
    const template = `something`;
    writeReadMe(template);
};

function writeReadMe (template) {
    console.log(template);
}