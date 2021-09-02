// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeamProfiles = require("../src/page-template");

// lib modules
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const employeesData = [];


const questions = async () => {
    const employeeAnswers = await inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee's Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is your employee's role?",
        choices: ["Manager", "Engineer","Intern"],
    }
])
    if (employeeAnswers.role === "Manager") {
        const officeNumberAnswer = await inquirer
        .prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
            },
        ])
        // creates a new Manager object and is added to the employees array
        const roleOfManager = new Manager(
            employeeAnswers.name,
            employeeAnswers.id,
            employeeAnswers.email,
            officeNumberAnswer.officeNumber
        );
        employeesData.push(roleOfManager);
    }
    else if (employeeAnswers.role === "Engineer") {
        const githubUserName = await inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
            },
        ])
        // creates a new Engineer object and is added to the employees array
        const roleOfEngineer = new Engineer(
            employeeAnswers.name,
            employeeAnswers.id,
            employeeAnswers.email,
            githubUserName.github
        );
        employeesData.push(roleOfEngineer);
    }
    else if (employeeAnswers.role === "Intern") {
        const internSchool = await inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What University/College does the intern attend?",
            },
        ])
        // creates a new Intern object and is added to the employees array
        const roleOfIntern = new Intern(
            employeeAnswers.name,
            employeeAnswers.id,
            employeeAnswers.email,
            internSchool.school
        );
        employeesData.push(roleOfIntern);
    }
};

async function promptQuestions() {
    await questions()

        const addMoreRoles = await inquirer
        .prompt([
        {
            type: "list",
            name: "addRoles",
            message: "What would you like to do?",
            choices: ["Add another role", "Generate Profiles"]
        }
        ])

        if(addMoreRoles.addRoles === "Add another role") {
            return promptQuestions();
        }
        return generateProfiles();
}

promptQuestions();

function generateProfiles () {
    console.log("Team Profiles have been created! Check out index.html to see the output!");
    fs.writeFileSync("./dist/index.html", generateTeamProfiles(employeesData));
}

module.exports = Prompts;