var Employee = require('../lib/Employee');
var Manager = require('../lib/Manager');

describe('Manager',()=> {
    describe('Initialization', ()=> {
        it("should return an object with the 'officeNumber property when called with the correct parameters", ()=> {
            let phone = 43526;
            let officePhone = 145134;
            const bigBoi = new Manager("James", phone, "BigMan@gmail.com", officePhone);
            expect('officeNumber' in bigBoi).toEqual(true);
        });

        it("should set officeNumber when created", ()=> {
            let phone = 43526;
            let officePhone = 145134;
            const bigBoi = new Manager("James", phone, "BigMan@gmail.com", officePhone);
            expect(bigBoi.officeNumber).toEqual(officePhone);
        })
        // add function to check if only 4 parameters
        // add function ensure number
    });

    describe("getOfficeNumber", ()=> {
        it("should return a number when a Manager calls getOfficeNumber", ()=> {
            let phone = 43526;
            let officePhone = 145134;
            const bigBoi = new Manager("James", phone, "BigMan@gmail.com", officePhone);
            expect(typeof bigBoi.getOfficeNumber()).toEqual("number");
        });

        it("should return a number which is the same as the one given to it", ()=> {
            let phone = 43526;
            let officePhone = 145134;
            const bigBoi = new Manager("James", phone, "BigMan@gmail.com", officePhone);
            expect(bigBoi.getOfficeNumber()).toEqual(officePhone);
        });
    });

    describe('getRole',()=> {
        it("should return 'Manager' when called", ()=>{
            let phone = 43526;
            let officePhone = 145134;
            const unknownManager = new Manager("David", phone, "newMan@gmail.com", officePhone);
            expect(unknownManager.getRole()).toEqual('Manager');
        })

        it("should return 'Manager' even when an Employee is called and returns 'Employee'", ()=> {
            let phone = 43526;
            let officePhone = 145134;
            const unknownManager = new Manager("David", phone, "newMan@gmail.com", officePhone); 
            let otherPhone = 12354;
            const otherEmployee = new Employee("Jerome", otherPhone, "other@gmail.com");
            expect(otherEmployee.getRole()).toEqual('Employee');
            expect(unknownManager.getRole()).toEqual('Manager');  
        })
    });
});