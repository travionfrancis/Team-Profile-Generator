const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./lib/htmlRenderer.js");
// Where is this being used?


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeCatalog = []; 
const teamHTML = "";

// Asking questions to ask user about their status 
const questions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of the Employee?"
        },
        {
            type: "list",
            name: "role",
            message: "Role of the Employee?",
            choices: ["Engineer", "Intern", "Manager"],
        },
        {
            type: "input",
            name: "id",
            message: "ID Number of the Employee?"
        },
        {
            type: "input",
            name: "email",
            messages: "Email Address of the Employee?"
        }    
        // questions specific to the type of employee
    ]).then(function (data) {
        if (data.role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "School of the Intern?"
                }
            ]).then(function (internInfo) {
                // make a new intern with what the user inputs
                // https://www.w3schools.com/jsref/jsref_push.asp
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
                const addedIntern = new Intern(data.name, data.id, data.email, internInfo.school);
                employeeCatalog.push(addedIntern);
            })
        }
        if (data.role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Github Username of Engineer?",
                    
                }
            ]).then(function (engineerEvidence) {
                // make a new engineer with what the user inputs
                const addedEngineer = new Engineer(data.name, data.id, data.email, engineerEvidence.github);
                // push the new manager to the employee array
                employeeCatalog.push(addedEngineer);
            });
        }
        if (data.role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Office Number of Manager?"
                    
                }
            ]).then(function (managerMetadata) {
                // make a new Manager with what the user inputs
                const addedManager = new Manager(data.name, data.id, data.email, managerMetadata.officeNumber);
                employeeCatalog.push(addedManager);
            })
        }
    })
}

// Make a function that allows you to create a HTML file that displays the employee data
// This probably isn't what the line above means but ill save for now https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument
// its prob more along these lines https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
// Just in case https://www.npmjs.com/package/create-html



// Problem with running this function
function createTeam() {
    const htmlMain = fs.readFileSync("templates/main.html");
    teamHTML = eval('`'+ htmlMain +'`');


    fs.writeFile('result/team.html', render(employeeCatalog), function (err) {
        if (err) {
            return console.log("Bad Job!");
        }
        console.log("It Worked!");
    }
}
    
    
    
// only way to run it
questions();

// Write a function that ask questions related to their roles
// changing the questions into a prompt would help
// https://www.npmjs.com/package/inquirer just like the README gen
// write your code to ask different questions via inquirer depending on employee type.

// make sure to build out your classes first! Remember that your Manager, Engineer, 
// and Intern classes should all extend from a class named Employee


