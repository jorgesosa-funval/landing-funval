import { courses } from "./service.js";
const params = new URLSearchParams(location.search)
const index = courses.findIndex(course => course.id === parseInt(params.get('id')))

document.querySelector('h1').textContent = courses[index].title