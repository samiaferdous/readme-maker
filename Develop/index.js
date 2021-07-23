// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'input',
            message: "Describe your project.",
            name: 'description',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'input',
            message: "What is required for installation?",
            name: 'installation',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'input',
            message: "What are the technologies used?",
            name: 'technology',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'input',
            message: "How is your app used?",
            name: 'usage',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'input',
            message: "What are the names of your Team Members?",
            name: 'Team',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'input',
            message: "GitHub Username:",
            name: 'github',
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },
        {
            type: 'list',
            message: "Which license was used?",
            name: 'license',
            choices: ['MIT', 'Apache', 'MPL', 'CPOL', 'GPL', 'None'],
            validate:(value)=>{if (value){returntrue} else {return 'Please enter an answer to continue'}},
        },

    },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
