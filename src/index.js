import './css/styles.css';
import debounce from "lodash.debounce"
const DEBOUNCE_DELAY = 300;
const input = document.querySelector("#search-box")
input.addEventListener("input", debounce(() => {
    fetchCountries(input.value)
},DEBOUNCE_DELAY))
function fetchCountries(value) {    
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
        .then(r => { return r.json() })
        .then(r => { console.log(r) })
        .catch(er=>{ console.log(er)})
}