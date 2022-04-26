import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from "lodash.debounce"
const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box")
input.addEventListener("input", debounce(() => {
    fetchCountries(input.value)
},DEBOUNCE_DELAY))
