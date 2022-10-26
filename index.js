const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inquirer = require('inquirer');

let managerInfo;
let internInfo = [];
let engineerInfo = [];

const managerQuestions = [
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
        type: "input",
        message: "Please enter the team manager's Email",
        name: 'managerEmail'
    },
    {
        type: "number",
        message: "Please enter the team manager's office number",
        name: 'managerOfficeNumber'
    },    
];


function addMember(){
    Inquirer.prompt([
        {
            type: 'list',
            message: "Who would you like to add",
            name: "personType",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: 'personName',
            message(answers){
                return `Please enter the ${answers.personType}'s Name.`;
            }
        },
        {
            type: "number",
            name: 'personID',
            message(answers){
                return `Please enter the ${answers.personType}'s Employee ID.`;
            } 
        },
        {
            type: "input",
            name: 'personEmail',
            message(answers){
               return `Please enter the ${answers.personType}''s Email`;
            }
        },
        // ask only if the member is an Engineer
        {
            type: "input",
            message: "Please enter the Engineer's github username.",
            name: 'personGithub',
            when(answers) {
                return answers.personType === "Engineer";
            }
        },
        // ask only if the user is an Intern
        {
            type: "input",
            message: "Please enter the Intern's school.",
            name: 'personSchool',
            when(answers) {
                return answers.personType === "Intern";
            }
        },
        {
            type: "confirm",
            message: "Would you like to add another member",
            name: "morePeople",
        }
        // need to ask a reconfirmation ..
    ])
    .then(answers => {
        console.log(answers)
        if(answers.personType == 'Intern')
            internInfo.push(new Intern(answers.personName, answers.personID, answers.personID, answers.personSchool));

        if(answers.personType == 'Engineer')
            engineerInfo.push(new Engineer(answers.personName, answers.personID, answers.personID, answers.personGithub));
        
        // repeat until all the people are inserted.
        if(answers.morePeople)
            addMember();
        // else
        // format to file and create html page.
    }) 
}

// given an Manager Object, an array of Interns, and an array of Engineer
// build a html web page that display all of them with links and clean styling


Inquirer.prompt(managerQuestions)
    .then(answers => {
        managerInfo = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        // add additional Interns and Engineers until completion
        addMember();
        // At this point managerInfo, internInfo, and engineer Info is solved
        

        // console.log("answers:\n:");
        // console.log(answers);

    });

// I want a recursive call function
// 