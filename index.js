const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const generateProfiles = require("./src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const {writeFile} = require ("fs");

class Prompts {
    constructor() {
        this.employees = [];
    }

    promptUser() {
        inquirer
        .prompt([
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?"
    }
])
.then(({name, id, email, officeNumber}) => {
    this.employees.push(new Manager(name, id, email, officeNumber));

    this.addEmployee();
})};
 
    addEmployee() {
        inquirer
        .prompt([{
        type: "list",
        name: "confirmAddEmp",
        message: "Would you like to add another employee?",
        choices: ["Add Manager", "Add Engineer", "Add Intern", "I'm finished adding employees"]
        }])
        .then((data) => {
            if (data.confirmAddEmp === "Add Manager") {
                this.addManager();
            } 
            else if (data.confirmAddEmp === "Add Engineer") {
                this.addEngineer();
            }
            else if (data.confirmAddEmp === "Add Intern") {
                this.addIntern();
            }
            else {
                this.writeFile()
            }
        })
    };
      
    addManager() {
        inquirer
           .prompt([
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?"
    }
])
.then(({name, id, email, officeNumber}) => {
    this.employees.push(new Manager(name, id, email, officeNumber));

    this.addEmployee();
})}

addEngineer() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's email?"
    },
    ])
    .then(({name, id, email, github}) => {
        this.employees.push(new Engineer(name, id, email, github));
        
        this.addEmployee();
    })
}

addIntern() {
    inquirer
    .prompt([
        {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school is the intern attending?"
    }
    ])
    .then(({name, id, email, school}) => {
        this.employees.push(new Intern(name, id, email, school));

        this.addEmployee();
    })
}

writeFile() {
    fs.writeFile("./dist/index.html", generateProfiles(this.employees), err => {
        if (err) throw err;
        
        console.log("Team Profiles have been created! Check out index.html to see the output!");
    });

}};

prompt();