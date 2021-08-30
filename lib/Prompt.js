const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generatePage = require("../src/page-template");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    promptUser() {
        inquirer
        .prompt([])
    }
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "",
        name: "",
        message: ""
    },
    
    {
        type: "",
        name: "",
        message: ""
    },
    
    {
        type: "",
        name: "",
        message: ""
    },
    
];