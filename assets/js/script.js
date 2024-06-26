import { courses, menuOptions } from "./service.js";
const navbarList = document.querySelector('.navbar-list')



function setDomMenuOption() {
  const menuElements = menuOptions.map(option => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.classList.add('navbar-link');
    a.href = option.link;
    a.textContent = option.text;
    a.setAttribute('data-nav-link', '')

    li.appendChild(a);

    return li;
  });
  document.querySelector('.navbar-list').append(...menuElements)
}

function setDomCourseCard() {

  courses.forEach(course => {
    const courseCard = `  
    <li>
      <a href="${course.link}">
        <div class="course-card">

          <figure class="card-banner img-holder" style="--width: 370; --height: 220;">
            <img src=${course.img} width="370" height="220" loading="lazy"
              alt=${course.title} class="img-cover">
          </figure>

          <div class="abs-badge">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

            <span class="span">${course.duration}</span>
          </div>

          <div class="card-content">

            <span class="badge">Beginner</span>
            <ul class="card-meta-list">

              <li class="card-meta-item">
                <ion-icon name="reader-outline" aria-hidden="true"></ion-icon>

                <span class="span">${course.modules}</span>
              </li>

            </ul>
            <h3 class="h3 card-title">
               ${course.title} 
            </h3>
            
            <data class="price" value=${course.price}>${course.price}</data>
          </div>
        </div>
      </a>
    </li>        
      `
    document.querySelector('.grid-list').innerHTML += courseCard
  });

}

setDomCourseCard()

setDomMenuOption();

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);
