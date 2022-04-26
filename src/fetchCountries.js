const ul = document.querySelector(".country-list")
import Notiflix from 'notiflix';
export function fetchCountries(value) {    
    value = value.trim();
    if (!value) {  
        clear()
        return
    }        
    fetch(`https://restcountries.com/v3.1/name/${value}?fields=flags,name,capital,population,languages `)
        .then(r => {            
            if (!r.ok) {
                throw new Error(r.status)
            }
            return r.json()
        })
        .then(r => {
            showResult(r)
        })
        .catch(er => {
        clear()
        console.log(er)
        Notiflix.Notify.failure('Oops, there is no country with that name')
                })        
}
function clear() {
    ul.innerHTML = ""
    ul.nextElementSibling.innerHTML = ""
            }
function showResult(r) {              
            clear()
            if (r.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
                return
            }else if (r.length<=10 && r.length>=2) {                
            r.forEach(e => {
                ul.insertAdjacentHTML("afterbegin", `<li><img width="50" src=${e.flags.svg}>${e.name.official}</li>`)
                return
            })     
            } else {
                ul.nextElementSibling.insertAdjacentHTML("afterbegin", `<img width="50" src=${r[0].flags.svg}> ${r[0].name.official}<br> capital: ${r[0].capital}<br> population: ${r[0].population}<br> languages: ${Object.values(r[0].languages)}`)
            }            
        }