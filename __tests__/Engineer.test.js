var Employee = require('../lib/Employee');
var Engineer = require('../lib/Engineer');

describe("Engineer", ()=> {
    describe('Initialization', ()=> {
        it("should return an object with the 'github' property when called with the correct parameters", ()=> {
            let phone = 43526;
            let profile = "https:/github.com/dummy";
            const smartMan = new Engineer("Toyko", phone, "smartMan@gmail.com", profile);
            expect('github' in smartMan).toEqual(true);
        });

        it("should set github when created", ()=> {
            let phone = 43526;
            let profile = "https:/github.com/dummy";
            const smartMan = new Engineer("Toyko", phone, "smartMan@gmail.com", profile);
            expect(smartMan.github).toEqual(profile);
        })
        // add function to check if only 4 parameters
        // add function ensure number
    });

    describe("getGithub", ()=> {
        it("should return a string when an Engineer calls getGithub", ()=> {
            let phone = 43526;
            let profile = "https:/github.com/dummy";
            const smartMan = new Engineer("Toyko", phone, "smartMan@gmail.com", profile);
            expect(typeof smartMan.getGithub()).toEqual("string");
        });

        it("should return a profile which is the same as the one given to it", ()=> {
            let phone = 43526;
            let profile = "https:/github.com/dummy";
            const smartMan = new Engineer("Toyko", phone, "smartMan@gmail.com", profile);
            expect(smartMan.getGithub()).toEqual(profile);
        });
    });

    describe('getRole',()=> {
        it("should return 'Engineer' when called", ()=>{
            let phone = 43526;
            let profile = "https:/github.com/dummy";
            const smartMan = new Engineer("Toyko", phone, "smartMan@gmail.com", profile);
            expect(smartMan.getRole()).toEqual('Engineer');
        })

        it("should return 'Manager' even when an Employee is called and returns 'Employee'", ()=> {
            let phone = 43526;
            let profile = "https:/github.com/dummy";
            const smartMan = new Engineer("Toyko", phone, "smartMan@gmail.com", profile);
            let otherPhone = 12354;
            const otherEmployee = new Employee("Jerome", otherPhone, "other@gmail.com");
            expect(otherEmployee.getRole()).toEqual('Employee');
            expect(smartMan.getRole()).toEqual('Engineer');  
        })
    });
})