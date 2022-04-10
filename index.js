const inquirer = require('inquirer');
const fs = require('fs');
const generatedHTML = require('./dist/generatedHTML');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamInfo =[];
addTeamMember();

//Choose a type of team member to add
function addTeamMember() {
    inquirer.prompt( 
    {
        type: 'choices',
        name: 'role',
        message: "Would you like to add a new employee's role or finish your team?",
        choices: ['Manager', 'Engineer', 'Intern', 'Finish my team']
    })

    .then (function(data) {
        const role = data.role;
        if (role === 'Manager') {
            managerRole();
        }
        else if (role === 'Engineer') {
            engineerRole();
        }

        else if (role === 'Intern') {
            internRole();
        }
        else if (role === 'Finish my team') {
            createTeam();
        }
    });
}

//If manager is chosen, these question will be asked
function managerRole() {
    inquirer.prompt ( 
    {
        type: 'input',
        name: ' name',
        message: "What is the employee's name?"

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?"  
    },
    {
        input: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    })
}

//If engineer is chosen, these questions will be asked
function engineerRole() {
    inquirer.prompt (
    {
        type: 'input',
    name: ' name',
    message: "What is the employee's name?"

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        input: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?"
    })
}

//If intern is chosen, these questions will be asked
function internRole() {
    inquirer.prompt ( 
    {
        type: 'input',
        name: ' name',
        message: "What is the employee's first and last name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        input: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?"
    })
}


// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);
            }
    
        console.log("You can preview your HTML file now!");
    
    });
    };
    
    // Function to initialize app
    function init() {
        inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('./dist/generatedHTML', (userInput));
        });
    };
    
    
    // Function call to initialize app
    init();
    