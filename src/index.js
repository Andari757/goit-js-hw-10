import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from "lodash.debounce"
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;
const ul = document.querySelector(".country-list")
const failureText = 'Oops, there is no country with that name'
const infoText = 'Too many matches found. Please enter a more specific name'
const input = document.querySelector("#search-box")
input.addEventListener("input", debounce(() => {
    if (!input.value) {  
        clear()
        return
    }    
    fetchCountries(input.value.trim())        
    .then(r => {
            showResult(r)
        })
    .catch(er => {
        clear()
        console.log(er)
        Notiflix.Notify.failure(failureText)
        })     
}, DEBOUNCE_DELAY))
function showResult(r) {
    clear()
    if (r.length > 10) {
        Notiflix.Notify.info(infoText);
        return
    } else if (r.length <= 10 && r.length >= 2) {
        renderLi(r)
        return
    } else {
        renderDiv(r)
    }
}
function clear() {
    ul.innerHTML = ""
    ul.nextElementSibling.innerHTML = ""
}
function renderLi(r) {
    const markup = r.map((e) =>`<li><img width="50" src=${e.flags.svg}>${e.name.official}</li>`) .join("")
        ul.insertAdjacentHTML("afterbegin", markup)
}
function renderDiv(r) {
    ul.nextElementSibling.insertAdjacentHTML("afterbegin", `<img width="50" src=${r[0].flags.svg}> ${r[0].name.official}<br> capital: ${r[0].capital}<br> population: ${r[0].population}<br> languages: ${Object.values(r[0].languages)}`)
}