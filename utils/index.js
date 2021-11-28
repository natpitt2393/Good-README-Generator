// These are the required modules needed to generate the README file
// Inquirer is needed so that the program can prompt questions that the user will answer. The inputted answers will be generated using template literals for the README
const inquirer = require('inquirer');
const fs = require('fs');
// Not sure why the generate markdown relative path caused a compiler error. Had to use this code in order for the program to function properly
const generateMarkdown = require('./generateMarkdown');

// Instead of just having an array, I created a function for the questions that will be called for the init function
const questions = () =>  {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github username? (Do not include @ in your response',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is the title of your project',
            name: 'title'
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
            message: 'Please provide instructions and examples of your project in use for the usage section.',
            name: 'usage'
        },
        {
            type: 'input',
            message:  'Give guidelines on how other developers can contribute to your project and add the contributors to this project.',
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
    ]

    )
}

// This is the code that will add all the user input 
const writeToFile = data => {
    fs.writeFile('EXAMPLEREADME.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You've successfully created your README!");
        }
    }) 
}

// This is the function that when executed will create the README file
const init = () => {
    questions()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();