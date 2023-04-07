let schemes = ["space-theme", "light-theme", "dark-theme"];
let buttons = ["space-btn", "light-btn", "dark-btn"];
let storageKey = "currentTheme";

function removeColorScheme(element) {
    schemes.forEach(item => {
        if (element.classList.contains(item)) {
            element.classList.remove(item);
        }
    });
}

function addColorScheme(element, scheme) {
    removeColorScheme(element);
    element.classList.add(scheme);
    localStorage.setItem(storageKey, scheme);
}

function removeActive() {
    buttons.forEach(item =>{
        document.getElementById(item).classList.remove("active");
    });
}

let currentColorScheme = localStorage.getItem(storageKey);
if (currentColorScheme === null) {
    currentColorScheme = schemes[0];
    document.getElementById(buttons[0]).classList.add("active");
}

addColorScheme(document.querySelector("body"), currentColorScheme);

if (localStorage.getItem(storageKey) === schemes[0]) {
    document.getElementById(buttons[0]).classList.add("active");
} 
else if (localStorage.getItem(storageKey) === schemes[1]) {
    document.getElementById(buttons[1]).classList.add("active");
} 
else if (localStorage.getItem(storageKey) === schemes[2]) {
    document.getElementById(buttons[2]).classList.add("active");
}

function themeToggle(index) {
    removeActive();
    document.getElementById(buttons[index]).classList.add("active");
    addColorScheme(document.querySelector("body"), schemes[index]);
}