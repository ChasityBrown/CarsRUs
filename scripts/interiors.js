import { getInteriors } from "./database.js";

const interiors = getInteriors()

export const carInteriors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.seatType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}