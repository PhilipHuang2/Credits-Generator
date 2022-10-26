// create the html document here.
// create an html manager card from manager info
// create a list of html engineer cards from engineers
// create a list of html intern cards from interns
const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');

// returns a template literal populated with variables from manager Object
function createManagerCard(manager = {}) {
    return `            <div class="card mx-auto" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class="card-text">
            <div class="card" style="width: 14rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">IDA: ${manager.id}</li>
                    <li class="list-group-item"><a href = "mailto: ${manager.email}">Send Email</a></li>
                    <li class="list-group-item">
                Office Number: ${manager.officeNumber}
                </li>
                </ul>
            </div>
        </p>
    </div>
</div>`

}

//expect engineer to be an array of Engineer objects;
function createEngineerRow(engineer) {
    console.log("in a row");
    let row = ``;
    for(person in engineer)
    {
        let frag = `                <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">${person.name}</h6>
            <p class="card-text">
                <div class="card" style="width: 14rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${person.id}</li>
                        <li class="list-group-item">
                            <a href = "mailto: ${person.email}">Send Email</a>
                        </li>
                        <li class="list-group-item">
                            <a href = "https:/Github.com/${person.github}">Github Profile</a>
                    </li>
                    </ul>
                </div>
            </p>
        </div>
    </div>
</div>`;
        row += frag;
    }
    return row;
}


function createDocument(managerInfo, engineers, interns){
    const managerCard = createManagerCard(managerInfo);
    // console.log(managerCard);
    const engineerRow = createEngineerRow(engineers);
    console.log(engineerRow);

    // expect managerInfo = Manager Object
    // expect engineers = array of Engineer Object
    // expect interns = array of Intern object

}

module.exports = {createDocument}
