// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const liceOpts = require('./liceOpt.js');
// TODO: Create an array of questions for user input  
const questions = [
    ['input', 'Enter your title?', 'title'],
    ['input', 'Enter your description', 'descr'],
    ['input', 'Enter your installation guide', 'inst'],
    ['input', 'Enter your usage information', 'usage'],
    ['input', 'Enter your contribution guidelines', 'conmtr'],
    ['input', 'Enter your test instructions', 'test'],
    ['list', 'Choose your license:', 'lice', [
        'GNU General Public License v2.0',
        'GNU General Public License v3.0', 'GNU Lesser General Public License v3.0',
        'ISC', 'MIT',
        'Mozilla Public License 2.0', 'SIL Open Font License 1.1'
    ]],
    ['input', 'Enter your github profile link', 'ghProf'],
    ['input', 'Enter your email', 'email'],
];
// // TODO: Create a function to write README file
const writeToFile = (fileName, [...id]) => {
    console.log(id[6]);
    const ch = liceOpts.licenses(id[6]);
    const read = `# ${id[0]}
${ch}
## TOC

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

### Description
${id[1]}
### Installation
${id[2]}
### Usage
${id[3]}
### License
${id[6]}
### Contributing
${id[4]}
### Tests
${id[5]}
### Questions
GitHUb Link: ${id[7]}

${id[8]} : Please contact me through this email!`

    fs.writeFile(fileName, read, (err) =>
        err ? console.error(err) : console.log('Commit logged!'));
}
// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: questions[0][0],
            message: questions[0][1],
            name: questions[0][2]
        },
        {
            type: questions[1][0],
            message: questions[1][1],
            name: questions[1][2]
        },
        {
            type: questions[2][0],
            message: questions[2][1],
            name: questions[2][2]
        },
        {
            type: questions[3][0],
            message: questions[3][1],
            name: questions[3][2]
        },
        {
            type: questions[4][0],
            message: questions[4][1],
            name: questions[4][2]
        },
        {
            type: questions[5][0],
            message: questions[5][1],
            name: questions[5][2]
        },
        {
            type: questions[6][0],
            message: questions[6][1],
            name: questions[6][2],
            choices: questions[6][3]
        },
        {
            type: questions[7][0],
            message: questions[7][1],
            name: questions[7][2]
        },
        {
            type: questions[8][0],
            message: questions[8][1],
            name: questions[8][2]
        }
    ]).then((response) => {

        const id = [response.title, response.descr, response.inst, response.usage, response.conmtr, response.test, response.lice, response.ghProf, response.email];

        console.log([...id]);
        writeToFile('README.md', [...id]);
    });
}

// // Function call to initialize app
init();