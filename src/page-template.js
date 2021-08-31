

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
        <p>${user()}</p>
        </div>
        `
    }).join(' ')}
    </div>
    </body>`
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="veiwport" content="width=device-width, initial-scale=1.0">
                    <meta http-equip=X-UA-Compatible" content="ie=edge">
                        <title>Team Profiles</title>
                        <link rel="stylesheet" href="style.css"></link>
        </head>
            ${generateEmployeeProfile(templateData)}
    </html>
    `
};