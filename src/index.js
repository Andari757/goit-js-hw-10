import './css/styles.css';
import debounce from "lodash.debounce"
const DEBOUNCE_DELAY = 300;
const ul = document.querySelector(".country-list")
const input = document.querySelector("#search-box")
input.addEventListener("input", debounce(() => {
    fetchCountries(input.value)
},DEBOUNCE_DELAY))
function fetchCountries(value) {    
    fetch(`https://restcountries.com/v3.1/name/${input.value}?fields=flags,name,capital,population,languages `)
        
        .then(r => {            
            return r.json()
        })
        .then(r => {
            console.log(r)
            r.forEach(e => {
               console.log(Object.values(e.languages))
                ul.insertAdjacentHTML("afterbegin", `<li>${e.name.official}${e.capital}${e.population}${e.languages}</li>`)
            });
            
            
        })
        .catch(er=>{ console.log(er)})
}