const Employee = require("../lib/Employee");

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
        
    });
    // describe("Member Variables", ()=>{
    //     it("should return the same number")
    // })

});