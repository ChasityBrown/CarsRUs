import { carsrus } from "./cars-r-us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsrus()
}

renderAllHTML()