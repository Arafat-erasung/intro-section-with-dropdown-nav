function toggleFeatures() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('dropbtn')) {
  let myDropdown = document.getElementById("dropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

//menubar
function menubar() {
  let menuItems = document.getElementById("navbar");
  if (menuItems.style.display === "block") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "block";
  }
}



function toggleCompany() {
  document.getElementById("com-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.com-dropbtn')) {
  let myDropdown = document.getElementById("com-dropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}