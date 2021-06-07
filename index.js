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
// TODO: Create an array of questions for user input  
const questions = [
    ['confirm', 'Do you want to create a README?', 'create'],
    ['input', 'Enter your description', 'descr'],
    ['input', 'Enter your installation guide', 'inst'],
    ['input', 'Enter your usage information', 'usage'],
    ['input', 'Enter your contribution guidelines', 'conmtr'],
    ['input', 'Enter your test instructions', 'test']
];
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
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
        }
    ]). then((response) => {
        const data = JSON.stringify(response, null, 1);
        writeToFile('read.json', data);
    });
}

// // Function call to initialize app
init();