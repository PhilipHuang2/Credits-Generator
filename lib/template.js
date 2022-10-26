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
                    <li class="list-group-item"><a href = "mailto: ${manager.email}">Send Me an Email!</a></li>
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
    let row = ``;
    for(person of engineer)
    {
        let frag = `
        <div class="col gy-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">
                    <div class="card" style="width: 14rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${person.id}</li>
                            <li class="list-group-item">
                                <a href = "mailto: ${person.email}">Send Me an Email!</a>
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

//expect engineer to be an array of Engineer objects;
function createInternRow(intern){
    let row = ``;
    
    for(person of intern){
        let frag = `
        <div class="col gy-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <p class="card-text">
                    <div class="card" style="width: 14rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${person.id}</li>
                            <li class="list-group-item">
                                <a href = "mailto: ${person.email}">Send Me an Email!</a>
                            </li>
                            <li class="list-group-item">School: 
                        ${person.school}</a>
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
// expect managerInfo = Manager Object
// expect engineers = array of Engineer Object
// expect interns = array of Intern object
function createDocument(managerInfo, engineers, interns){
    const managerCard = createManagerCard(managerInfo);
    const engineerRow = createEngineerRow(engineers);
    const internRow = createInternRow(interns);
    const fullDocument = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <!-- Centered Hero -->
        <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-5 fw-bold">Your Company Here!</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">Let the world knows who makes your products.  Credit your employees here and show off all the excellent talent that you have!</p>
            </div>
        </div>
    
        <!-- Boot strap 3 rows -->
        <div class="container">
            <!-- Manager Row -->
            <div class="row my-1">
                <h2 class="text-center">Meet the Manager</h2>
            </div>
            <div class="row my-5">
                ${managerCard}                
            </div>

            <!-- Engineer Row -->
            <div class="row my-1">
                <h2 class="text-center">Meet the Engineers</h2>
            </div>
            <div class="row my-3 justify-content-start ">
                <!-- Engineer Card -->
                <!-- Name Id Email Github -->
                <div class="col">
                    ${engineerRow}
                </div>
            </div>
    
            <!-- Intern Row -->
            <div class="row my-1">
                <h2 class="text-center bd-title">
                    Meet the Interns
                </h2>
            </div>
            <div class="row my-3 justify-content-start">
                ${internRow}
            </div>
        </div>    
    </div>
    </body>
    </html>
    `;
    return fullDocument;
}

module.exports = {createDocument}
