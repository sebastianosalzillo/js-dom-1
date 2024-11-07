const lampadaSpenta = document.getElementById("img-1");
const lampadaStatus = document.querySelector("#btn");

lampadaStatus.addEventListener("click", function() {
    if (lampadaSpenta.src.includes("white_lamp.png")) {
        lampadaSpenta.src = "./img/yellow_lamp.png"; 
    } 
});
