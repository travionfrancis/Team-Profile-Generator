// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// requires the Employee.js file
const Employee = require("./lib/Employee.js");

// Going to help me with understanding the Syntax from the preview I looked at
// Using both W3Schools, even though I know that MDN is superior 
// https://www.w3schools.com/jsref/jsref_class_extends.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
// https://www.w3schools.com/jsref/jsref_class_super.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    // returning Github data crap like how I did with the Employee stuff
    getGithub() {
        return this.github;
    }
};

// Just like the last part of the README Gen, these have to go at the end of every js file with the file name
module.exports = Engineer;