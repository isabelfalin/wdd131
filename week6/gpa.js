function getGrades() {
    const gradesInput = document.getElementById("grades"); 
    const gradesString = gradesInput.value;


    const gradeList = gradesString.split(",")

    gradeList.forEach((item, index) => {
        gradeList[index] = item.trim().toUpperCase();

    });

    return gradeList;

}

function convertGrade(grade) {
    if (grade == "A") {
        return 4;
    }
    if (grade == "B") {
        return 3;
    }
    if (grade == "C") {
        return 2;
    }
    if (grade == "D") {
        return 1;
    }
    else {
        return 0;
    }
}

function calculateAverage(gradeList){

    let numberList = [];
    gradeList.forEach((item, index) => {
        const theNumber = convertGrade(item);
        
        numberList.push(theNumber);
    });

    let total = 0;
    numberList.forEach((number, index) => {
        total += number;
    });


    const average = total / numberList.length;
    return average;
}

function displayGpa(gpa){
    const outputElement = document.getElementById("output");
    outputElement.textContent = gpa.toFixed(2);
}





function calculateGrade(){
    const gradeList = getGrades();
    const theAverage = calculateAverage(gradeList);
    displayGpa(theAverage);
}

const button = document.getElementById("submitButton"); 
button.addEventListener("click", calculateGrade);