

const generateEmployeeProfile = templateData => {
    return `
    <body>
    <div class="header-wrapper">
    <h1>Team Profiles</h1>
    </div>
    <div class="grid"> 
    ${templateData.map(() => {
        return `
        <div>
        <h2>${.getName()}</h2>
        <h3>${.getRole()}</h3>
        <p>${.getId()}</p>
        <p>Email: <a href="mailto:https://${.getEmail()}">${.getEmail}</a></p>
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