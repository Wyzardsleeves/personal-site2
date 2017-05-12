var rightBar = document.getElementById("more-info");
var threeBar = document.getElementsByClassName("ion-navicon-round")[0];
var centralBody = document.getElementById("main-body");


threeBar.addEventListener("click" , function(){
    rightBar.style.width = "300px";
    rightBar.style.display = "block";
    centralBody.style.marginRight = "370px";
});

rightBar.addEventListener("mouseleave", function(){
    rightBar.style.width = "0px";
    rightBar.style.display = "none";
    centralBody.style.marginRight = "70px";
});
