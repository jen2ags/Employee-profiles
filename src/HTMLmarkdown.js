const createTeam = (teamInfo) => {
    console.log(teamInfo);

    const htmlTeamInfo = [];


    //create manager section
    const generateManager = manager => {
        console.log(manager);
        var htmlManager = `
    
    <div>
        <div>
        ${manager.name} <br/>
        ${manager.role}
            <section>
            <ul>
            <li> ID: ${manager.id}</li>
            <li> Email: 
                <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li> Office Number: ${manager.officeNumber}</li>
            </ul>
            </section>
        </div>
    </div>
    `;
        htmlTeamInfo.push(htmlManager);
    };

    //create engineer section
    const generateEngineer = engineer => {
        console.log(engineer);
        var htmlEngineer = `
    
    <div>
        <div>
        ${engineer.name} <br/>
        ${engineer.role}
            <section>
            <ul>
            <li> ID: ${engineer.id}</li>
            <li> Email: 
                <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li> Github: 
                <a href="https://github.com/${engineer.github}">https://github.com/${engineer.github}</a>
            </li>
            </ul>
            </section>
        </div>
    </div>
    `;
        htmlTeamInfo.push(htmlEngineer);
    };

    //create intern section
    const generateIntern = intern => {
        console.log(intern);
        var htmlIntern = `
    
    <div>
        <div>
        ${intern.name} <br/>
        ${intern.role}
            <section>
            <ul>
            <li> ID: ${intern.id}</li>
            <li> Email: 
                <a href="mailto:${intern.email}">${intern.email}</a>
            <li> School: ${intern.school}</li>
            </ul>
            </section>
        </div>
    </div>
    `;
        htmlTeamInfo.push(htmlIntern);
    }

    for (let i = 0; i < teamInfo.length; i++) {
        if (teamInfo[i].getRole() === 'Manager') {
            generateManager(teamInfo[i]);
        }
        if (teamInfo[i].getRole() === 'Engineer') {
            generateEngineer(teamInfo[i]);
        }
        if (teamInfo[i].getRole() === 'Intern') {
            generateIntern(teamInfo[i]);
        }
    }

    return htmlTeamInfo.join(' ');
}

module.exports = teamInfo => {
    return `
    <!Doctype html>
    <html lang="en">
    <head>
        <meta charset = "UTF-8">
        <meta name="viewport" content="widthc=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <title>Employee Profiles</title>
    </head>
    
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">Our Employee Profiles</h1>
            </div>
        </header>
        <main class="container my-5">
            ${createTeam(teamInfo)}
        </main>
    </body>
    </html>
    `;
}




