const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeCatalog = []; 

// Asking questions to ask user about their status 
const questions = [
    {
        type: "input",
        name: "name",
        message: "Name of the Employee?"
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
    },
    {
        type: "list",
        name: "role",
        message: "Role of the Employee?",
        choices: ["Engineer", "Intern", "Manager"]
    }
]
