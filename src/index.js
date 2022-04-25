import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector("#search-box")
input.addEventListener("input",fetchCountries(input.value))
function fetchCountries(value) {    
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
        .then(r => { return r.json() })
        .then(r => { console.log(r) })
        .catch(er=>{ console.log(er)})
}