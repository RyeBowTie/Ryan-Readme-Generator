const inquirer = require('inquirer');
const fs = require('fs');

let badge;
let licenseText = "";


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
        type: 'list',
        message: 'What is this application\'s license?',
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
   
    getBadge(response.license);
   
    const template = `# ${response.title}\n<br>***<br>${badge}\n<br>***<br>\n## Description\n<br>***<br>${response.description}<br>***<br>\n## Table of Contents\n<br>***<br>*[Installation](#Installation)<br>*[Usage](#Usage)<br>*[License](#License)<br>*[Contributing](#Contributing)<br>*[Tests](#Tests)<br>*[Questions](#Questions)<br>***<br>\n## Installation\n<br>***<br>${response.install}<br>***<br>\n## Usage\n<br>***<br>${response.usage}<br>***<br>\n## License\n<br>***<br>${licenseText}<br>***<br>\n## Contributions\n<br>***<br>${response.contributions}<br>***<br>\n## Test\n<br>***<br>${response.test}<br>***<br>\n## Questions\n<br>***<br>If you have any questions you can reach me at<br>***<br>${response.email}<br>***<br>or<br>***<br>through my GitHub<br>[${response.github}](https://github.com/${response.github})`;

    writeReadMe(template);
};

function getBadge(license) {
    
    if (license == 'Apache License 2.0') {
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'GNU General Public License v3.0') {
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'MIT License') {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'BSD 2-Clause "Simplified" License') {
        badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'BSD 3-Clause "New" or "Revised" License') {
        badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'Boost Software License 1.0') {
        badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'Creative Commons Zero v1.0 Universal') {
        badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'Eclipse Public License 2.0') {
        badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'GNU Affero General Public License v3.0') {
        badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'GNU General Public License v2.0') {
        badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'GNU Lesser General Public License v2.1') {
        badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'Mozilla Public License 2.0') {
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        licenseText = `This application is covered under ${license}`;
    } else if (license == 'The Unlicense') {
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        licenseText = `This application is covered under ${license}`;
    } else {
        console.log("else")
    };
    return badge
};

function writeReadMe (template) {
    fs.writeFile('README.md', template, (err) => 
    err ? console.error(err) : console.log('Commit logged!'))
};