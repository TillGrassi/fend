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
*/
// build the nav
function createNavbar() {
    sectionContent.forEach((section, i) => {
      const listItem = document.createElement("li");
      const listItemLink = document.createElement("a");
      listItemLink.textContent = section.id;
      listItemLink.classList.add("menu__link");
      listItemLink.classList.add("section"+(i+1));
      listItem.appendChild(listItemLink);
      navbarList.appendChild(listItem);
    });
};
createNavbar();

// Checking for active State Helperfunctions
function addActiveState(section) {
    const id = section.getAttribute("id");
    document.querySelector(`#${id}`).classList.add("your-active-class");
    document.querySelector(`.${id}`).classList.add("active");
};

function removeActiveState(section) {
    const id = section.getAttribute("id");
    document.querySelector(`#${id}`).classList.remove("your-active-class");
    document.querySelector(`.${id}`).classList.remove("active");
};

// Add class 'active' to section when near top of viewport
function checkIfActive() {
    sectionContent.forEach((section) => {
      let check = section.getBoundingClientRect();
      if (check.top <= 150 && check.bottom >= 150) {
        addActiveState(section);
      }
      else {
        removeActiveState(section);
      }

    });
};
document.addEventListener("scroll", checkIfActive);



// Scroll to anchor ID using scrollTO event
let navbarItems = document.querySelectorAll("li");
function scrollToSection() {
    navbarItems.forEach((item, i) => {
        item.addEventListener("click", function() {
            event.preventDefault();
            let element = document.getElementById("section"+(i+1));
            element.scrollIntoView({behavior: "smooth"});
        });
    });

};
scrollToSection();
