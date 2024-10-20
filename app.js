function calculate() {
    var currentYear = parseInt(document.getElementById("current-year-input").value);
    var birthYear = parseInt(document.getElementById("birth-year-input").value);
    
    if (isNaN(currentYear) || isNaN(birthYear) || currentYear < birthYear) {
        alert("Please enter valid years.");
        return;
    }

    var age = currentYear - birthYear;
    var ageNextYear = age + 1;

    document.getElementById("age-result").innerText = 
        "Your age is either " + age + " or " + ageNextYear + ".";
};
