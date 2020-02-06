const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const Render = require("./lib/htmlRender");
const fs = require('fs');

var teamMembers = [];

//Create Objects of team members
const myTeamApp = async () => {
    // Create Manager object
    const createManager = async () => {
        const managerInfo = await Inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your id',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email',
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'Enter your office number',
            }
        ]);
        const manager = await new Manager(
            managerInfo.name,
            managerInfo.id,
            managerInfo.email,
            managerInfo.officeNum
        );
        await teamMembers.push(manager);
        console.log('team members', teamMembers);
    };

    //Prompt for new types of employees
    const createTeam = async () => {
        const prompt = await Inquirer.prompt({
            type: 'list',
            name: 'member',
            message: 'What type of team member do you want to add?',
            choices: ['Engineer', 'Intern', "I'm done"],
  
        });

        if (prompt.member === 'Engineer') {
            await createEngineer();
            await createTeam();
        } else if (prompt.member === 'Intern') {
            await createIntern();
            await createTeam();
        } else {
            //Return Array of team member objects
            Render(teamMembers);
        }
    };
    //Function to create intern object
    async function createIntern() {
        const internInfo = await Inquirer.prompt([
            {
                type: 'input',
                message: 'Enter your name',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter your id',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter your email',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter your school',
                name: 'school'
            }
        ]);
        const intern = await new Intern(
            internInfo.name,
            internInfo.id,
            internInfo.email,
            internInfo.school
        );

        await teamMembers.push(intern);
    }
    //Function to create Engineer Object
    async function createEngineer() {
        const engineerInfo = await Inquirer.prompt([
            {
                type: 'input',
                message: 'Enter your name',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter your id',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter your email',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter your github',
                name: 'github'
            }
        ]);
        const engineer = await new Engineer(
            engineerInfo.name,
            engineerInfo.id,
            engineerInfo.email,
            engineerInfo.github
        );

        await teamMembers.push(engineer);
    }

    await createManager();
    await createTeam();
};

myTeamApp();
