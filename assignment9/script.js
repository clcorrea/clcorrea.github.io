var isHidden = true;

function toggleMain() {
    var display;
    
    if (isHidden) {
        isHidden = false;
        display = "block";
    } else {
        isHidden = true;
        display = "none";
    }
    var content = document.getElementById("content");
    content.style.display = display;
}
var sections = document.getElementsByTagName("section");

for (var i = 0; i < sections.length; i++) {
    sections[i].style.borderColor = "red";
}