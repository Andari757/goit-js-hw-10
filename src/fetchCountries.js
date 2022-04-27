const baseUrl = 'https://restcountries.com/v3.1/name/'
export function fetchCountries(value) {   
    return fetch(`${baseUrl}${value}?fields=flags,name,capital,population,languages `)
        .then(r => {            
            if (!r.ok) {
                throw new Error(r.status)
            }
            return r.json()
        })              
}