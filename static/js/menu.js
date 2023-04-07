function Rotating() {
    let myClass = document.getElementById("hamburger")

    if (myClass.classList.contains("rotated")) myClass.classList.remove("rotated");
    else myClass.classList.add("rotated");
}

function DropDown(name_1, name_2) {
    // Toggling that the button was clicked
    if (!document.getElementById(name_1).classList.contains("clicked")) {
        document.getElementById(name_1).classList.toggle("clicked");
        document.getElementById(name_2).classList.toggle("show");
    }
    else {
        document.getElementById(name_1).classList.remove("clicked");
        document.getElementById(name_2).classList.remove("show");
    }
}