/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sectionContent = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");



/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function createNavbar() {
    sectionContent.forEach((section) => {
      console.log(section);
      const listItem = document.createElement('li');
      const listItemLink = document.createElement('a');
      listItemLink.textContent = section.id;
      listItem.appendChild(listItemLink);
      navbarList.appendChild(listItem);
    });
};
createNavbar();

function addActiveState(section) {
    const id = section.getAttribute("id");
    document.querySelector(`#${id}`).classList.add("your-active-class");
};

function removeActiveState(section) {
    const id = section.getAttribute("id");
    document.querySelector(`#${id}`).classList.remove("your-active-class");
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function checkIfActive() {
    sectionContent.forEach((section) => {
      let check = section.getBoundingClientRect();
      if (check.top <= 150 && check.bottom >= 150) {
        addActiveState(section);
      };
      else {
        removeActiveState(section);
      };

    });
};
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
