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
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
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
    }  
])
.then (generateReadMe)

function generateReadMe(response) {
    console.log(response);
    const template = `# ${response.title}\n## Description\n<br>***<br>${response.description}<br>***<br>\n## Table of Contents\n<br>***<br>*[Installation](#Installation)<br>*[Usage](#Usage)<br>*[License](#Licence)<br>*[Contributing](#Contributing)<br>*[Tests](#Tests)<br>*[Questions](#Questions)<br>***<br>***<br>\n## Installation\n<br>***<br>${response.install}<br>***<br>\n## Usage\n<br>***<br>${response.usage}<br>***<br>\n## Contributions\n<br>***<br>${response.contributions}<br>***<br>\n## Test\n<br>***<br>${response.test}<br>***<br>\n## Questions\n<br>***<br>If you have any questions you can reach me at<br>***<br>${response.email}<br>***<br>or<br>***<br>through my GitHub<br>[${response.github}](https://github.com/${response.github})`;
    writeReadMe(template);
};

function writeReadMe (template) {
    console.log(template);
    fs.writeFile('README.md', template, (err) => 
    err ? console.error(err) : console.log('Commit logged!'))
};