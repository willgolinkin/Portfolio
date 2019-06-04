let projectNumber = 0;

function generateProject () {
    if (projectNumber < STORE.length) {
        return `<section class="${projectNumber}"
        <div class="project-description">
            <h1 class="js-title">${STORE[projectNumber].title}<!--USMC Quiz App--></h1>
            <p class="js-description">
                ${STORE[projectNumber].description};
            </p>
            <div class = "btn-group">
                <button class="github">Github Repo</button>
                <button class="web-page">Web Page</button>
            </div>
        </div>
        <div class="screenshot-container">
            <img src= ${STORE[projectNumber].screenshot_one}>;
            <img src= ${STORE[projectNumber].screenshot_two}>;
        </div>
    </section>`
    } else {
        returnToHomePage ();
    }
}

function changeProjectNumber () {
    projectNumber ++;
}

function viewProject () {
    $('.about').on('click', '.view_projects_button', function(event) {
        $('.about').remove();
        $('.project').css('display', 'block');
    })
}

function renderProject () {
    $('.project').html(generateProject());
}

function renderNextProject () {
    console.log('going to next project');
}

function showProjects () {
    viewProjct ();
    renderProject ();
    renderNextProject ();
}

$(showProjects);
