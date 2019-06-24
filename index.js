let projectNumber = 0;

//access and add project information from STORE
//create three buttons, two of which contain links and are styled as buttons
function generateProject () {
    if (projectNumber < STORE.length) {
        let project = STORE[projectNumber];
        return `<div class= ${project.project_div}>
        <div class="project-description">
            <h1 class="js-title">${project.title}</h1>
            <ul class="project_tech">
                ${project.technologies_used}
            </ul>
            <p class="js-description">
                ${project.description}
            </p>
            <div class = "btn-group">
                <a href="${project.github_repo}" target="_blank" class="github">Github Repo</a>
                <a href="${project.web_page}" target="_blank" class="web-page">Live Page</a>   
            </div> 
        </div>
        <div class="screenshot-container">
            <img src= "${project.screenshot_one}" alt="screenshotOne">
            <img src= "${project.screenshot_two}" atl="screenshotTwo">
        </div>
        <div class="next_home_group">
            <button type="submit" class="nextProjectButton">Next Project</button>
            <button type="submit" class="returnHomeButton">Home</button>
        </div>
    </div>`
    } else {
        returnToHomePage ();
    }
}

//once I have additional projects, increment in order to display next project
function changeProjectNumber () {
    projectNumber ++;
}

//hide about section
//unhide/show project div
function viewProject () {
    $('.about').on('click', '.viewProjectsButton', function(event) {
        $('.about').remove();
        //not sure if this adds value for this script
        //$('.project').css('display', 'block');
        renderProject();
    });
}

//render first project to the DOM
function renderProject () {
  $('.project').html(generateProject());
}

function renderNextProject () {
    console.log('going to next project');
    //add event listener for click of next project and generate next project html
    $('main').on('click', '.nextProjectButton', function (event) {
        changeProjectNumber();
        generateProject();
        renderProject();
    })
}

function returnToHomePage () {
    //console.log('returning to Home Page');
    $('main').on('click', '.returnHomeButton', function (event) {
        console.log ('returning home');
        //reloads the current resource, like the refresh button; could be improved
        location.reload(true);
    });
}

function showProjects () {
    viewProject ();
    //renderProject ();
    renderNextProject ();
    returnToHomePage ();
}

$(showProjects);
//potentially bring everything underneath the showProjects function IOT eliminate global variables
