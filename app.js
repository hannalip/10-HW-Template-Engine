const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");

const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter manger name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter manger's ID:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manger's email:",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter manger's office number:",
    },
    {
        type: "list",
        name: "hasTeam",
        message: "Do you have any team members?",
        choices: ["Yes", 
        "No"]
    }
]