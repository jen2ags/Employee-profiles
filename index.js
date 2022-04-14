const inquirer = require('inquirer');
const fs = require('fs');
const generatedHTML = require('./src/HTMLmarkdown.js');
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
        name: 'name',
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
    }
]).then (answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamInfo.push(manager);
    addTeamMember();
})
};

//If engineer is chosen, these questions will be asked
function engineerRole() {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
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
    }
]).then (answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamInfo.push(engineer);
    addTeamMember();
})
};

//If intern is chosen, these questions will be asked
function internRole() {
    inquirer.prompt ([ 
    {
        type: 'input',
        name: 'name',
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
    }
]).then (answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamInfo.push(intern);
    addTeamMember();
})
};

function createTeam() {
    fs.writeFileSync('./dist/generatedHTML.html', generatedHTML(teamInfo), 'UTF-8');
    console.log('You have created your HTML for your employees!');
}

    