let projectNumber = 0;

//access and add project information from STORE
function generateProject () {
    if (projectNumber < STORE.length) {
        return `<div class= ${STORE[projectNumber].project}>
        <div class="project-description">
            <h1 class="js-title">${STORE[projectNumber].title}</h1>
            <p class="js-description">
                ${STORE[projectNumber].description}
            </p>
            <div class = "btn-group">
                <button class="github">Github Repo</button>
                <button class="web-page">Web Page</button>
            </div>
        </div>
        <div class="screenshot-container">
            <img src= ${STORE[projectNumber].screenshot_one}>
            <img src= ${STORE[projectNumber].screenshot_two}>
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
