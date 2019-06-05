let projectNumber = 0;

//access and add project information from STORE
function generateProject () {
    if (projectNumber < STORE.length) {
        let project = STORE[projectNumber];
        return `<div class= ${project.project_div}>
        <div class="project-description">
            <h1 class="js-title">${project.title}</h1>
            <p class="js-description">
                ${project.description}
            </p>
            <div class = "btn-group">
                <form action="${project.github_repo}" class="github">
                    <input type="submit" value="Github Repo"/>
                </form>
                <form action="${project.web_page}" class="web-page">
                    <input type="submit" value="Live Page"/>
                </form>
            </div>
        </div>
        <div class="screenshot-container">
            <img src= "${project.screenshot_one}" alt="screenshotOne">
            <img src= "${project.screenshot_two}" atl="screenshotTwo">
        </div>
        <button type="submit" class="returnHomeButton">Home</button>
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

/*function renderNextProject () {
    console.log('going to next project');
    //add event listener for click of next project and generate next project html
}*/

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
    //renderNextProject ();
    returnToHomePage ();
}

$(showProjects);
//potentially bring everything underneath the showProjects function IOT eliminate global variables
