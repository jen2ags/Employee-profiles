const inquirer = require('inquirer');
const fs = require('fs');
//const generatedHTML = require('./dist/generatedHTML');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamInfo =[];
addTeamMember();

//Choose a type of team member to add
function addTeamMember() {
    inquirer.prompt( [
    {
        type: 'list',
        name: 'role',
        message: "Would you like to add a new employee's role or finish your team?",
        choices: ['Manager', 'Engineer', 'Intern', 'Finish my team'],

        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log("Please enter your Employee's role!");
                return false;
            }
        }
    }])


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
    inquirer.prompt ( [
    {
        type: 'input',
        name: ' name',
        message: "What is the manager's name?",

        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID number?",
        
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your manager's ID number!");
                return false;
            }
        }
    },
    {
        input: 'input',
        name: 'email',
        message: "What is the manager's email address?",

        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",

        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
                return false;
            }
        }
    }])
}

//If engineer is chosen, these questions will be asked
function engineerRole() {
    inquirer.prompt ([
    {
        type: 'input',
        name: ' name',
        message: "What is the engineer's name?",

    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the engineer's name!");
            return false;
        }
    }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID number?",

        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your engineer's ID number!");
                return false;
            }
        }
    },
    {
        input: 'input',
        name: 'email',
        message: "What is the engineer's email address?",

        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",

        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's github username!");
                return false;
            }
        }
    }])
}

//If intern is chosen, these questions will be asked
function internRole() {
    inquirer.prompt ([ 
    {
        type: 'input',
        name: ' name',
        message: "What is the intern's name?",

        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID number?",

        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your intern's ID number!");
                return false;
            }
        }
    },
    {
        input: 'input',
        name: 'email',
        message: "What is the intern's email address?",

        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?",

        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    }])
}


// Function to write HTML file
//function writeToFile(fileName, data) {
    //fs.writeFile(fileName, data, err => {
            //if (err) {
          //      return console.log(err);
        //    }
    
      //  console.log("You can preview your HTML file now!");
    
    //});
    //};
    
    // Function to initialize app
  //  function init(teamInfo) {
    //    inquirer.prompt()
      //  .then(function (userInput) {
        //    console.log(userInput)
          //  writeToFile('./dist/generatedHTML', generateHTML(userInput));
        //});
    //};
    
    
    // Function call to initialize app
    //init();
    