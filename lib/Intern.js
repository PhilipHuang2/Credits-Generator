var Employee = require('./Employee');

//extra stuff extending Employee
// variable: school
// function: getSchool()
// getRole()—overridden to return 'Intern'

module.exports = class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

}