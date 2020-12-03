// TODO: Write code to define and export the Employee class
// start of the constructors
// references: https://zoom.us/rec/play/v2dORvoYAVKoV1cShD1a-Z_tuQvBDhqdYKjckoe2y8R5WKUrYmfIJKR181ibfmalpBb_5f_y3uFM6lBm.eNHuZyt1izWsX6GA
// https://www.w3schools.com/jsref/jsref_constructor_class.asp
// https://www.w3schools.com/js/js_object_constructors.asp
class Employee {
    //sets up the employee's name,id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // And now you need to get the values and return them to display what was inputted
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
};



// Just like the last part of the README Gen, these have to go at the end of every js file
module.exports = Employee;