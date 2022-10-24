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


    })
});