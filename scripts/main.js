//Handles the contents of the right bar on all pages
var rightPanel = document.getElementById("more-info");
var threeBar = document.getElementsByClassName("ion-navicon-round")[0];
var centralBody = document.getElementById("about-body");
var hiremeBody = document.getElementById("hireme-body");
var projectBody = document.getElementById("project-body");
var graphicsBody = document.getElementById("graphics-body");

var rightPanelContents =
    '<div class="option-list">'
  + '    <p id="home-ele">Home</p>'
  + '    <p id="graphics-ele">Graphics</p>'
  + '    <p id="hireme-ele">Hire Me</p>'
  + '</div>'
  + '<div class="options-bottom">'
  /* Youtube phase out
  + '    <a href="https://www.youtube.com/channel/UCLn0jCRt_zJfsMhR1WFswzw" target="_blank"><p>Youtube</p></a>'
  */
  + '    <a href="https://www.linkedin.com/in/justin-lattimore-90387445" target="_blank"><p>LinkedIn</p></a>'
  + '    <a href="https://github.com/Wyzardsleeves" target="_blank"><p>Github</p></a>'
  + '    <a href="https://www.instagram.com/justinlattimore/" target="_blank"><p>Instagram</p></a>'
  + '    <a href="http://codepen.io/Wyzardsleeves/" target="_blank"><p>CodePen</p></a>'
  + '    <a href="https://steemit.com/@justinthedev" target="_blank"><p>Steemit Blog</p></a>'
  + '</div>'
;

let scrollAction = () => {  //scroll from click
  let homeButton = document.getElementById("home-ele");
  let graphicsButton = document.getElementById("graphics-ele");
  let hiremeButton = document.getElementById("hireme-ele");


  homeButton.addEventListener('click', function(){
      var homeElement = document.getElementById("about-body");
      homeElement.scrollIntoView("smooth");
  });

  graphicsButton.addEventListener('click', function(){
      var graphicsElement = document.getElementById("graphics-body");
      graphicsElement.scrollIntoView("smooth");
  });

  hiremeButton.addEventListener('click', function(){
      var hiremeElement = document.getElementById("hireme-body");
      hiremeElement.scrollIntoView("smooth");
  });
}

threeBar.addEventListener("click" , function(){
  if(rightPanel.style.width == 0){
    rightPanel.innerHTML = rightPanelContents;
    rightPanel.style.width = "300px";
    rightPanel.style.display = "block";
    centralBody.style.marginRight = "370px";
    hiremeBody.style.marginRight = "370px";
    projectBody.style.marginRight = "370px";
    graphicsBody.style.marginRight = "370px";

    scrollAction();
  }
  else if(centralBody.style.marginRight == "70px"){
    rightPanel.innerHTML = rightPanelContents;
    rightPanel.style.width = "300px";
    rightPanel.style.display = "block";
    hiremeBody.style.marginRight = "370px";
    centralBody.style.marginRight = "370px";
    projectBody.style.marginRight = "370px";
    graphicsBody.style.marginRight = "370px";

    scrollAction();
  }
  else{
    rightPanel.innerHTML = "";
    rightPanel.style.width = "0px";
    hiremeBody.style.marginRight = "70px";
    centralBody.style.marginRight = "70px";
    projectBody.style.marginRight = "70px";
    graphicsBody.style.marginRight = "70px";

    scrollAction();
  }
});

rightPanel.addEventListener("mouseleave", function(){
  rightPanel.innerHTML = "";
  rightPanel.style.width = "0px";
  centralBody.style.marginRight = "70px";
  hiremeBody.style.marginRight = "70px";
  projectBody.style.marginRight = "70px";
  graphicsBody.style.marginRight = "70px";
});

//adds entries to project list on project.html
var projectList = function(project){
  var contents = '';
  for(var i = 0; i < project.length; i++){
    contents +=
      '<a href=' + project[i].projectUrl + ' target="_blank">'
    + ' <div class="project">'  //col-md-5
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
  projectContents.innerHTML = projectList(projectEntries);
};
