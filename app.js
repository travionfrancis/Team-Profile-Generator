const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer.js");
// Where is this being used?
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
// Write a function that ask questions related to their roles
// write your code to ask different questions via inquirer depending on employee type.

// make sure to build out your classes first! Remember that your Manager, Engineer, 
// and Intern classes should all extend from a class named Employee

// make a function that allows you to create a HTML file that displays the employee data