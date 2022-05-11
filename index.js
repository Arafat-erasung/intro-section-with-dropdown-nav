const openMenu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const featuresButton = document.querySelector('.features-drop')
const featuresContent = document.getElementById('features')
const companyButton = document.querySelector('.company-drop')
const companyContent = document.getElementById('company')
const sidenavigation = document.querySelector('.sidenav')
const featuresArrowDown = document.getElementById('arrow-down')
const companyArrowDown = document.getElementById('com-arrow-down')


openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
featuresButton.addEventListener('click', featuresDropdown)
companyButton.addEventListener('click', companyDropdown)

function featuresDropdown(){
    // console.log("dropped")
    featuresArrowDown.src = "images/icon-arrow-up.svg";

}

function companyDropdown() {
    // console.log("comp-drop")
    companyArrowDown.src = "images/icon-arrow-up.svg";
}


function show() {
    sidenavigation.style.display = 'block';
}

function close() {
    sidenavigation.style.display = 'none';
}