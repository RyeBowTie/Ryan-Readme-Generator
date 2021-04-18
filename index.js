const inquirer = require('inquirer');
const fs = require('fs');
let badge;
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
    console.log(response.license)
    getBadge(response.license);
    console.log(badge)
    const template = `# ${response.title}\n<br>***<br>${badge}\n<br>***<br>\n## Description\n<br>***<br>${response.description}<br>***<br>\n## Table of Contents\n<br>***<br>*[Installation](#Installation)<br>*[Usage](#Usage)<br>*[License](#Licence)<br>*[Contributing](#Contributing)<br>*[Tests](#Tests)<br>*[Questions](#Questions)<br>***<br>***<br>\n## Installation\n<br>***<br>${response.install}<br>***<br>\n## Usage\n<br>***<br>${response.usage}<br>***<br>\n## Contributions\n<br>***<br>${response.contributions}<br>***<br>\n## Test\n<br>***<br>${response.test}<br>***<br>\n## Questions\n<br>***<br>If you have any questions you can reach me at<br>***<br>${response.email}<br>***<br>or<br>***<br>through my GitHub<br>[${response.github}](https://github.com/${response.github})`;
    writeReadMe(template);
};

function getBadge(licence) {
    console.log(typeof licence)
    
    if (licence == 'Apache License 2.0') {
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        console.log("yes");
    } else if (licence == 'GNU General Public License v3.0') {
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (licence == 'MIT License') {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (licence == 'BSD 2-Clause "Simplified" License') {
        badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (licence == 'BSD 3-Clause "New" or "Revised" License') {
        badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (licence == 'Boost Software License 1.0') {
        badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (licence == 'Creative Commons Zero v1.0 Universal') {
        badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    } else if (licence == 'Eclipse Public License 2.0') {
        badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (licence == 'GNU Affero General Public License v3.0') {
        badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (licence == 'GNU General Public License v2.0') {
        badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    } else if (licence == 'GNU Lesser General Public License v2.1') {
        badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (licence == 'Mozilla Public License 2.0') {
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (licence == 'The Unlicense') {
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    } else {
        console.log("else")
    };
    return badge
};

function writeReadMe (template) {
    fs.writeFile('README.md', template, (err) => 
    err ? console.error(err) : console.log('Commit logged!'))
};