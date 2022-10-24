var Employee = require('../lib/Employee');

describe("Employee", () => {
    //Ensures that the 
    describe("Initialization", ()=> {
        it("should return an object with a 'name' property when called with the correct parameters", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect("name"in regEmployee).toEqual(true);
        });

        it("should return an object with a 'id' property when called with the correct parameters", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect("id"in regEmployee).toEqual(true);
        });

        it("should return an object with a 'email' property when called with the correct parameters", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect("email"in regEmployee).toEqual(true);
        });

        it("should have the 'id' property be a type of Number", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect(typeof regEmployee.id ).toEqual("number");
        });

        it("should set 'name' when created", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect(regEmployee.name).toEqual("Philip");
        });

        it("should set 'id' when created", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect(regEmployee.id).toEqual(badge);
        });
        it("should set 'email' when created", ()=>{
            let badge = 123;
            const regEmployee = new Employee("Philip", badge, "Philiphuang2@gmail.com");
            expect(regEmployee.email).toEqual("Philiphuang2@gmail.com");
        });
        // Add function to guarantee that id is a number

    });

    describe("getName", ()=> {
        it("should return a string", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(typeof newEmployee.getName()).toEqual("string");
        });

        it("should return a string which has the same name as the Employee Name", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(newEmployee.getName()).toEqual("Philip");
        })
    });

    describe("getId", ()=> {
        it("should return a number", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(typeof newEmployee.getId()).toEqual("number");
        });

        it("should return a number which has the same name as the Employee Id", ()=> {
            const badge = 123;
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(newEmployee.getId()).toEqual(badge);
        })
    });

    describe("getEmail", ()=> {
        it("should return a string when an Employee calls getEmail", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(typeof newEmployee.getEmail()).toEqual("string");
        });

        it("should return a email which is the same as the one given to the manager", ()=> {
            const badge = 123;
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(newEmployee.getEmail()).toEqual("Philiphuang2@gmail.com");
        });
    });

    describe("getRole", ()=> {
        it("should return a string when an Employee calls getEmail", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(typeof newEmployee.getRole()).toEqual("string");
        });

        it("should return 'Employee' when any Employee calls getRole", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(newEmployee.getRole()).toEqual("Employee");
        });

        it("should return 'Employee' when any Employee calls getRole", ()=> {
            const newEmployee = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            expect(newEmployee.getRole()).toEqual("Employee");
        });

        it("should return the same value when two different Employee call getRole", ()=> {
            const employee1 = new Employee("Philip", "123", "Philiphuang2@gmail.com");
            const employee2 = new Employee("Peter", "4132", "Peterhuang2@gmail.com");
            expect(employee1.getRole()).toEqual(employee2.getRole());
        });
    });


});