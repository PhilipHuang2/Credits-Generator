const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inquirer = require('inquirer');

let managerInfo;

Inquirer.prompt(
    [
        // entering the team manager's info
        {
            type: "input",
            message: "Please enter the team manager's Name.",
            name: 'managerName'
        },
        {
            type: "number",
            message: "Please enter the team manager's Employee ID.",
            name: 'managerID'
        },
        {
            type: "string",
            message: "Please enter the team manager's Email",
            name: 'managerEmail'
        },
        {
            type: "number",
            message: "Please enter the team manager's office number",
            name: 'managerOfficeNumber'
        },
        // ask user if they want to add more people
        {
            type: 'list',
            message: "What would you like to do",
            name: "morePeople",
            choices: ["Add an Engineer", "Add an Intern", "Finish Building the team."]
        }
        // then if they do, 

        
    ])
    .then(answers => {
        managerInfo = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);

        console.log("answers:\n:");
        console.log(answers);

    });