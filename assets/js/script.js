'use strict';

const navbarList = document.querySelector('.navbar-list')

const menuOptions = [
  { id: 1, link: '#home', text: 'Home' },
  { id: 2, link: '#about', text: 'About' },
  { id: 3, link: '#courses', text: 'Courses' },
  { id: 4, link: '#blog', text: 'Blog' },
]

const courses = [
  { id: 1, desc: '', img: './assets/images/course-1.jpg', title: 'Competitive Strategy law for all students', price: 'Gratis', modules: '4 Modulos', duration: '5 Meses' },
  { id: 2, desc: '', img: './assets/images/course-2.jpg', title: 'Machine Learning A-Z: Hands-On Python and java', price: 'Gratis', modules: '4 Modulos', duration: '5 Meses' },
  { id: 3, desc: '', img: './assets/images/course-3.jpg', title: 'Achieving Advanced in Insights with Big', price: 'Gratis', modules: '4 Modulos', duration: '5 Meses' },
  { id: 4, desc: '', img: './assets/images/course-4.jpg', title: 'Education Makes A Person A Responsible Citizen', price: 'Gratis', modules: '4 Modulos', duration: '5 Meses' },
  { id: 5, desc: '', img: './assets/images/course-5.jpg', title: 'Building A Better World One Student At A Time', price: 'Gratis', modules: '4 Modulos', duration: '5 Meses' },
  { id: 6, desc: '', img: './assets/images/course-6.jpg', title: 'Education is About Forming Faithful Disciples', price: 'Gratis', modules: '4 Modulos', duration: '5 Meses' },
]

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
          <h3 class="h3">
            <a href="#" class="card-title">${course.title}</a>
          </h3>
          
          <data class="price" value=${course.price}>${course.price}</data>
        </div>
        

      </div>
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



const modalContainer = document.getElementById('modal-container');
const cerrarModal = document.getElementById('cerrar-modal');

cerrarModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

// Función para mostrar el modal
function mostrarModal() {
  modalContainer.style.display = 'block';
}
