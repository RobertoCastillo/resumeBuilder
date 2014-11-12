var formattedName = HTMLheaderName.replace("%data%", "Roberto Castillo");
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Community Manager",
			"location" : "Paramus, NJ, US",
			"dates" : "March 2008 - Present",
			"description" : "Designed, maintain and moderate the AT&T Business Community"
		},
		{
			"employer" : "AT&T",
			"title" : "Team Manager",
			"location" : "Paramus, NJ, US",
			"dates" : "January 2002 - March 2008",
			"description" : "Managed and developed Tier I and II employees in several customer service departments"
		}
	]
}

var projects = {
	"projects" : {
		"title" : "AT&T Business Community",
		"dates" : "March 2011 - Present",
		"description" : "The AT&T Business Community is a public forum where professionals can ask questions to other members or Community staff about any AT&T products or services",
		"images" : "/images/bizcommunity.png"
	}
}

var bio = {
	"name" : "Roberto Castillo",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "973-420-4278",
		"email" : "rcastillo1031@gmail.com",
		"github" : "RobertoCastillo"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"skills" : ["Project Management", "Customer Service", "HTML", "CSS", "Javascript", "Computer Hardware"],
	"bioPic" : "/images/contact.JPG"
}

var education = {
	"schools" : {
		"name" : "Dover Business College",
		"city" : "Paramus, NJ, US",
		"degree" : "Certificate",
		"major" : "Networking",
		"graduationYear" : 2002
	},
	"onlineCourses" : [
	{
		"name" : "ONLC Training Centers",
		"degree" : "Certificate",
		"major" : "Web Design",
		"graduationYear" : 2014
	},
	{
		"name" : "Udacity",
		"degree" : "Nanodegree",
		"major" : "Front-End Web Developer",
		"graduationYear" : 2014
	}
	]
}

//coding for skills at a glance
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}

//function to display work experience
function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

//function for clicks locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});

//function changing name to international standard and appending the internationalizeButton
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name(0).slice(1).toLowerCase();
	
	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);


projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
	
	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	}
}
projects.display();
