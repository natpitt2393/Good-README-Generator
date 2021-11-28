// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username? (Do not include @ in your response',
        name: 'github'
    },
    { 
        type: 'input',
        message: 'What is the name of your github repo?',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'What is the title of your project',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe the installation requirements and steps for setup.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples of your project in use for the Usage section.',
        name: 'usage'
    },
    {
        type: 'input',
        message:  'Give guidelines on how other developers can contribute to your project.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Provide your contact info (email)',
        name: 'contact'
    }
];

// TODO: Create a function to write README file
function writeToFile('ExampleREADME.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();