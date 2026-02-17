document.addEventListener("DOMContentLoaded", function () {
    let box = document.querySelectorAll(".block"); 
    box.forEach(function (item) {
        item.addEventListener("click", function () {
            if (item.style.backgroundColor !== "gold" && item.style.backgroundColor !== "rgb(255, 215, 0)") {
                item.style.backgroundColor = "gold";
                item.style.margin = '3vw';
                console.log("change to gold");
            }
            else {
                item.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                item.style.margin = '1vw';
                console.log("change back to glass");
            }
        });
    });
});
