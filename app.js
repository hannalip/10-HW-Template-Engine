const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const fs = require('fs');

var teamMembers = [];

//Create Objects of team members
const appMenu = async () => {
    // Create Manager object
    const createManager = async () => {
        const answer = await Inquirer.prompt([
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
            this.name,
            this.id,
            this.email,
            this.officeNum
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
            return teamMembers;
        }
    };
    //Function to create intern object
    async function createIntern() {
        const answer = await Inquirer.prompt([
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
        const newIntern = await new Intern(
            this.name,
            this.id,
            this.email,
            this.school
        );

        await teamMembers.push(newIntern);
    }
    //Function to create Engineer Object
    async function createEngineer() {
        const answer = await Inquirer.prompt([
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
        const newEngineer = await new Engineer(
            this.name,
            this.id,
            this.email,
            this.github
        );

        await teamMembers.push(newEngineer);
    }

    await createManager();
    await createTeam();
};

appMenu();
