const generateTeamProfiles = (teamProfile) => {
    
const generateManagerProfile = (manager) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class=list-group">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail}</a></li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
    </div>
    </div>
    `;
};

const generateEngineerProfile = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class=list-group">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
    </ul>
    </div>
    </div>
    `;
};

const generateInternProfile = (intern) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class=list-group">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
    </ul>
    </div>
    </div>
    `;
};

const userInput = [];

userInput.push(
    teamProfile
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManagerProfile(manager))
);
userInput.push(
    teamProfile
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineerProfile(engineer))
    .join("")
);
userInput.push(
    teamProfile
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateInternProfile(intern))
    .join("")
);

return userInput.join("");

};

module.exports = (teamProfile) => {
    console.log(teamProfile);
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
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
            ${generateTeamProfiles(teamProfile)}
            </div>
            </div>
            </div>
            </body>
    </html>
    `;
};