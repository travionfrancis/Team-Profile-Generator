// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// requires the Employee.js file
const Employee = require("./Employee.js");

// Going to help me with understanding the Syntax from the preview I looked at
// Using both W3Schools, even though I know that MDN is superior 
// https://www.w3schools.com/jsref/jsref_class_extends.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
// https://www.w3schools.com/jsref/jsref_class_super.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

class Intern extends Employee {
    //samething with Engineer and the others but with School instead of Github
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    // same as the previous ones
    getSchool() {
        return this.school;
    }
    //to differentiate between the employee roles
    getRole() {
        return "Intern";
    }
};
// Just like the last part of the README Gen, these have to go at the end of every js file with the file name
module.exports = Intern;