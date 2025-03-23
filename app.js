var redl = document.getElementById("RED");
var yellowl = document.getElementById("YELLOW");
var greenl = document.getElementById("GREEN");

function resetlight() {
    redl.classList.remove("red_light");
    yellowl.classList.remove("yellow_light");
    greenl.classList.remove("green_light");
}

function Red_on() {
    resetlight();
    redl.classList.add("red_light");
}

function Yellow_on() {
    resetlight();
    yellowl.classList.add("yellow_light");
}

function Green_on() {
    resetlight();
    greenl.classList.add("green_light");
}
