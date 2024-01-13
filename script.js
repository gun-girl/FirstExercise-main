document.getElementById("actionButton").addEventListener("click", function() {
    alert("Button clicked!");
    paragraph = document.getElementById("description");
    paragraph.style.visibility = "hidden";
});

document.getElementById("year").innerHTML = new Date().getFullYear();





