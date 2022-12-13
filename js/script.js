$(window).on("load", function(){
	$(".loader .inner").fadeOut(1000, function(){
		$(".loader").fadeOut(1250);
	});

	$(".items").isotope({
    	filter:'*',
    	animationOptions:{
    		duration:1500,
    		easing:"linear",
    		queue:false 
    	}
    });
})

function changeTab(evt, tab_id) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tab_id).style.display = "block";
	evt.currentTarget.className += " active";
	if(tab_id=="AboutMe"){
		document.getElementById("initialAboutMeTab").click();
	}
	if(tab_id=="Skills"){
		document.getElementById("initialSkillsTab").click();
	}
  }

  
function changeAboutMeTab(evt, tab_id) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("AboutMeTabContent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("AboutMeTablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tab_id).style.display = "block";
	evt.currentTarget.className += " active";
  }

  function changeSkillsTab(evt, tab_id) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("SkillsTabContent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("SkillsTablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tab_id).style.display = "block";
	evt.currentTarget.className += " active";
  }

$(document).ready(function(){
	document.getElementById("initialTab").click();
});

