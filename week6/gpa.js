function getGrades(){
    const gradesInput = document.getElementById("grades"); 
    const gradesString = gradesInput.value;
    console.log(gradesString);

}

function calculateGrade(){
    getGrades();
}

const button = document.getElementById("submitButton"); 
button.addEventListener("click", calculateGrade);