const inquirer = require("inquirer");
const fs = require("fs");

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
        name: "officenum",
        message: "Enter manger's office number:",
    },
]