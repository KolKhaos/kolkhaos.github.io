let day = new Date();
let pancake = document.querySelector("#pancake");

if (day.getDay() == 5) {
    pancake.style.display = "block";
}