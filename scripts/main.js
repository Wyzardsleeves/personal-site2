//Handles the contents of the right bar on all pages
var rightPanel = document.getElementById("more-info");
var threeBar = document.getElementsByClassName("ion-navicon-round")[0];
var centralBody = document.getElementById("about-body");
var projectBody = document.getElementById("project-body");
var rightPanelContents =
    '<div class="option-list">'
  + '    <a href="index.html"><p>Home</p></a>'
  //+ '    <a href="about.html"><p>About</p></a>'
  //+ '    <a href="projects.html"><p>Projects</p></a>'
  + '    <a href="graphics.html"><p>Graphics</p></a>'
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
  //projectBody.style.marginRight = "370px";
});


rightPanel.addEventListener("mouseleave", function(){
  rightPanel.innerHTML = "";
  rightPanel.style.width = "0px";
  centralBody.style.marginRight = "70px";
  //projectBody.style.marginRight = "70px";
});

//adds entries to project list on project.html
var projectList = function(project){
  var contents = '';
  for(var i = 0; i < project.length; i++){
    contents +=
      '<a href=' + project[i].projectUrl + ' target="_blank">'
    + ' <div class="col-md-5 project">'
    + '   <img src=' + project[i].projectImageUrl + '>'
    + '   <div class="project-info">'
    + '     <h5>' + project[i].title + '</h5>'
    + '     <h5>' + project[i].description + '</h5>'
    + '   </div>'
    + ' </div>'
    + '</a>'
    ;
  }
  return contents;
};

var projectContents = document.getElementsByClassName("project-list")[0];

window.onload = function(){

  //updates sidebar during scrolldown (on index page)
  window.addEventListener("scroll", function(event) {
    var scrollDistance = parseInt(window.pageYOffset);
    rightPanel.style.marginTop = scrollDistance.toString() + "px";
    //console.log(scrollDistance);
  });

  //populates a list of projects
  projectContents.innerHTML = projectList(projectEntries);
};
