const userInput = employeeData => {
    i

const generateEmployeeProfile = templateData => {
    return `
    <body>
    <div class="header-wrapper">
    <h1>Team Profiles</h1>
    </div>
    <div class="grid"> 
    ${templateData.map((employee) => {
        return `
        <div>
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
        <p>${employee.getId()}</p>
        <p>Email: <a href="mailto:https://${employee.getEmail()}">${employee.getEmail}</a></p>
        <p>${userInput(employee)}</p>
        </div>
        `
    }).join(' ')}
    </div>
    </body>`
};

module.exports = teamProfile => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
        </head>
            <body>
            <div class="container-fluid">
            <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Teams Profiles</h1>
            </div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateEmployeeProfile(teamProfile)}
            </div>
            </div>
            </div>
            </body>
    </html>
    `
};