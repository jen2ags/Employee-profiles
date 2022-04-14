const createTeam = (teamInfo) => {
    console.log(teamInfo);

    const htmlTeamInfo = [];


    //create manager section
    const generateManager = manager => {
        console.log(manager);
        var htmlManager = `
    
    <div class="tile my-5 mx-5">
        <div class="is-child title is-primary">
        ${manager.name} <br>
        Manager
        </div>
            <section class="is-link">
            <ul>
            <li> ID: ${manager.id}</li>
            <li> Email: 
                <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li> Office Number: ${manager.officeNumber}</li>
            </ul>
            </section>
    </div>
    `;
        htmlTeamInfo.push(htmlManager);
    };

    //create engineer section
    const generateEngineer = engineer => {
        console.log(engineer);
        var htmlEngineer = `
    
    <div class="tile my-3">
        <div class="is-child title is-primary">
        ${engineer.name} <br>
        Engineer
        </div>
            <section class="is-link">
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
    `;
        htmlTeamInfo.push(htmlEngineer);
    };

    //create intern section
    const generateIntern = intern => {
        console.log(intern);
        var htmlIntern = `
    
    <div class="tile my-3">
        <div class="is-cheild title is-primary">
        ${intern.name} <br>
        Intern
        </div>
            <section class="is-link">
            <ul>
            <li> ID: ${intern.id}</li>
            <li> Email: 
                <a href="mailto:${intern.email}">${intern.email}</a>
            <li> School: ${intern.school}</li>
            </ul>
            </section>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Employee Profiles</title>
    </head>
    
    <body>
        <header class="hero is-med is-danger">
            <div class="hero-body">
                <h1 class="title is1 has-text-centered">Our Employee Profiles</h1>
            </div>
        </header>
        <main class="tile is-ancestor"> 
            ${createTeam(teamInfo)}        
        </main>
    </body>
    </html>
    `;
}




