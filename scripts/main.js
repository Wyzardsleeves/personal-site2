//Handles the contents of the right bar on all pages
var rightPanel = document.getElementById("more-info");
var threeBar = document.getElementsByClassName("ion-navicon-round")[0];
var centralBody = document.getElementById("main-body");
var rightPanelContents =
              '<div class="option-list">'
            + '    <a href=\"index.html\"><p>Home</p>'
            + '    <a href="about.html"><p>About</p></a>'
            + '    <a href="projects.html"><p>Projects</p></a>'
            + '    <a href="https://sites.google.com/site/jlattimor3/concept-art/motion-graphics-and-design" target="_blank"><p>Graphics</p></a>'
            + '    <a href="hireme.html"><p>Hire Me</p></a>'
            + '</div>'
            + '<div class="options-bottom">'
            + '    <a href="https://www.linkedin.com/in/justin-lattimore-90387445" target="_blank"><p>LinkedIn</p></a>'
            + '    <a href="https://github.com/Wyzardsleeves" target="_blank"><p>Github</p></a>'
            + '    <a href="https://www.instagram.com/justinlattimore/" target="_blank"><p>Instagram</p></a>'
            + '    <a href="http://codepen.io/Wyzardsleeves/" target="_blank"><p>CodePen</p></a>'
            + '    <a href="http://jlattimoreweb.blogspot.com/" target="_blank"><p>Blog</p></a>'
            + '</div>'
            ;

threeBar.addEventListener("click" , function(){
    rightPanel.innerHTML = rightPanelContents;
    rightPanel.style.width = "300px";
    rightPanel.style.display = "block";
    centralBody.style.marginRight = "370px";
});


rightPanel.addEventListener("mouseleave", function(){
    rightPanel.innerHTML = "";
    rightPanel.style.width = "0px";
    rightPanel.style.display = "none";
    centralBody.style.marginRight = "70px";
});

var projectList = function(name, desc, image, url){
  
};
