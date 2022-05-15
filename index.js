const openMenu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const featuresButton = document.querySelector('.features-drop')
const featuresContent = document.querySelector('.features-content')
const companyButton = document.querySelector('.company-drop')
const companyContent = document.querySelector('.company-content')
const sidenavigation = document.querySelector('.sidenav')
const featuresArrowDown = document.getElementById('arrow-down')
const companyArrowDown = document.getElementById('com-arrow-down')


openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
featuresButton.addEventListener('click', featuresDropdown)
companyButton.addEventListener('click', companyDropdown)





function featuresDropdown(){
    featuresArrowDown.src = "images/icon-arrow-up.svg"
    featuresContent.style.display = 'block'
}



function companyDropdown() {
    companyArrowDown.src = "images/icon-arrow-up.svg"
    companyContent.style.display = 'block'
}


function show() {
    sidenavigation.style.display = 'block'
}

function close() {
    sidenavigation.style.display = 'none'
}