import {participantTemplate, successTemplate} from "./templates.js";

function addParticapant(){
    participants += 1;
    const html = participantTemplate(participants);
    const button = document.getElementById("add");
    button.insertAdjacentHTML("beforebegin", html);
    
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    let total = 0;
    feeElements.forEach(e => {
        total += +e.value;
    });

    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    
    // once you have your total make sure to return it!
    return total;
    
}

function submitForm(event) {
    event.preventDefault();
    const theTotal = totalFees();

    const adultNameInput = document.getElementById("adult_name"); 
    const adultName = adultNameInput.value;


    const form = document.getElementById("theform"); 
    form.style.display = "none";

    const infoObject = {
        name: adultName,
        total: theTotal,
        participants: participants
    };

    let successHTML = successTemplate(infoObject);
    let summary = document.getElementById("summary");
    summary.innerHTML = successHTML;
}

let participants = 1;
const button = document.getElementById("add"); 
button.addEventListener("click", addParticapant);

const form = document.getElementById("theform"); 
form.addEventListener("submit", submitForm);