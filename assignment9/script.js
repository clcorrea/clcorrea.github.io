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
        sections[i].style.borderColor = "#FF0000";
}

/* The toggleMain function affects the display of the page. 
It allows the content with the main id to be hidden when 
clicking the title Vegetarian Pad Thai (onclick="toggleMain()").
The color of all elements named Section should have red
borders.*/