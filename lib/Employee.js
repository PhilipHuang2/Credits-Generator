module.exports = class Employee {
    // add function to guarantee id is a number later
    // functions, getName, getId, getEmail, getRole
    constructor(name, id, email) {
        this.name = name,
        this.id = parseInt(id),
        this.email = email
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

// function Employee(name, id, email) {
//     this.name = name,
//     this.id = parseInt(id),
//     this.email = email
// // add function to guarantee id is a number later
// // functions, getName, getId, getEmial, getRole
// }

// Employee.prototype.getName = function(){
//     return this.name;
// }

// Employee.prototype.getId = function(){
//     return this.id;
// }
// Employee.prototype.getEmail = function(){
//     return this.email;
// }

// Employee.prototype.getRole = function(){
//     return 'Employee';
// }
