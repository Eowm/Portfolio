var firstRight = document.getElementById('first-right');
var firstLeft = document.getElementById('first-left');
var aboutRight = document.getElementById('about-right');
var aboutLeft = document.getElementById('about-left');
var projectsRight = document.getElementById('projects-right');
var projectsLeft = document.getElementById('projects-left');
var technologyRight = document.getElementById('technology-right');
var technologyLeft = document.getElementById('technology-left');
var constactRight = document.getElementById('contact-right');
var contactLeft = document.getElementById('contact-left');


var projectOne = document.getElementById('box1');
var projectTwo = document.getElementById('box2');
var projectThree = document.getElementById('box3');
var projectFour = document.getElementById('box4');
var projectFive = document.getElementById('box5');
var projectSix = document.getElementById('box6');
var projectSeven = document.getElementById('box7');
var projectEight = document.getElementById('box8');




var projectLeft = document.querySelectorAll('.project-left');

for(let i =0; i< projectLeft.length; i++) {
    projectLeft[i].addEventListener('click', event => {
        projectLeft[i].parentElement.parentElement.classList.add('hide');
        projectsDisplay('.projects');
    })
}



/*
var project = document.querySelectorAll('.project');
for(let i = 0; i< project.length; i++){
    project[i].addEventListener('click', event => {
        project[i].parentElement.parentElement.classList.add('hide');
        projectsDisplay('.'project[i])
    })
}
*/

var addDisplay = (hide, show) => {
    document.querySelector(hide).classList.add('hide')
    document.querySelector(show).classList.remove('hide');
}

var projectsDisplay = (show) => {
    document.querySelector(show).classList.remove('hide')
}


/*const hiding = (event, selector) => {
    event.preventDefault;
    addDisplay('.projects', selector)
} 

projectOne.addEventListener('click', hiding(event, '.projectOne'));
projectOne.addEventListener('click', hiding(event, '.projectTwo'));
projectOne.addEventListener('click', hiding(event, '.projectThree'));
projectOne.addEventListener('click', hiding(event, '.projectFour'));
projectOne.addEventListener('click', hiding(event, '.projectFive'));
projectOne.addEventListener('click', hiding(event, '.projectSix'));
projectOne.addEventListener('click', hiding(event, '.projectSeven'));
projectOne.addEventListener('click', hiding(event, '.project'));
*/

projectOne.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectOne');
})

projectTwo.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectTwo');
})

projectThree.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectThree');
})

projectFour.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectFour');
})

projectFive.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectFive');
})

projectSix.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectSix');
})

projectSeven.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectSeven');
})

projectEight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.projectEight');
})



firstRight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.first', '.second');
})

firstLeft.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.second', '.first');
})

aboutRight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.second', '.about');
})

aboutLeft.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.about','.second');
})

projectsRight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.second','.projects');
})

projectsLeft.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.projects', '.second');
})

technologyRight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.second', '.technology');
})

technologyLeft.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.technology', '.second');
})

constactRight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.second', '.contact');
})

contactLeft.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.contact', '.second');
})