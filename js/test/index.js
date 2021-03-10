// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it. V
✅ The text of the title should change when the mouse is leaves it. V
✅ When the window is resized the title should change. V
✅ On right click the title should also change. V
✅ The colors of the title should come from a color from the colors array. V
✅ DO NOT CHANGE .css, or .html files. V
✅ ALL function handlers should be INSIDE of "superEventHandler" V
*/

const handleElement = document.querySelector("h2");

handleElement.style.display = "inline-block";

function elementMouseEnter(event) {
    handleElement.innerHTML = "The mouse is here!";
    handleElement.style.color = colors[0];
}

function elementMouseLeave(event) {
    handleElement.innerHTML = "The mouse is gone";
    handleElement.style.color = colors[1];
}

function elementResize(event) {
    handleElement.innerHTML = "You just resized!";
    handleElement.style.color = colors[2];
}

function elementContextMenu(event) {
    handleElement.innerHTML = "That was a right click!";
    handleElement.style.color = colors[4];
}

const superEventHandler = () => {
    handleElement.addEventListener("mouseenter", elementMouseEnter, false),
        handleElement.addEventListener("mouseleave", elementMouseLeave, false),
        window.addEventListener("contextmenu", elementContextMenu, false),
        window.addEventListener("resize", elementResize, false);
};

superEventHandler();
