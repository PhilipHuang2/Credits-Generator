var Employee = require('../lib/Employee');
var Intern = require('../lib/Intern');

describe('Intern', ()=> {
    describe('Initialization', ()=> {
        it("should return an object with the 'school' property when called with the correct parameters", ()=> {
            let phone = 43526;
            let school = "Lowell";
            const youngMan = new Intern("Dereck", phone, "skterboi@lowell.com", school);
            expect('school' in youngMan).toEqual(true);
        });

        it("should set school when created", ()=> {
            let phone = 43526;
            let school = "Lowell";
            const youngMan = new Intern("Dereck", phone, "skterboi@lowell.com", school);
            expect(youngMan.school).toEqual(school);
        })
        // add function to check if only 4 parameters
        // add function ensure number
    });

    describe('getSchool', ()=> {
        it("should return a string when an Intern calls getGithub", ()=> {
            let phone = 43526;
            let school = "Lowell";
            const youngMan = new Intern("Dereck", phone, "skterboi@lowell.com", school);
            expect(typeof youngMan.getSchool()).toEqual("string");
        });

        it("should return a string which is the same as the one given to it", ()=> {
            let phone = 43526;
            let school = "Lowell";
            const youngMan = new Intern("Dereck", phone, "skterboi@lowell.com", school);
            expect(youngMan.getSchool()).toEqual(school);
        });
    });

    describe('getRole',()=> {
        it("should return 'Intern' when called", ()=>{
            let phone = 43526;
            let school = "Lowell";
            const youngMan = new Intern("Dereck", phone, "skterboi@lowell.com", school);
            expect(youngMan.getRole()).toEqual('Intern');
        })

        it("should return 'Intern' even when an Employee is called and returns 'Employee'", ()=> {
            let phone = 43526;
            let school = "Lowell";
            const youngMan = new Intern("Dereck", phone, "skterboi@lowell.com", school);
            let otherPhone = 12354;
            const otherEmployee = new Employee("Jerome", otherPhone, "other@gmail.com");
            expect(otherEmployee.getRole()).toEqual('Employee');
            expect(youngMan.getRole()).toEqual('Intern');  
        })
    });

})