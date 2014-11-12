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
	"projects" : [
	{
		"title" : "AT&T Business Community",
		"dates" : "March 2011 - Present",
		"description" : "The AT&T Business Community is a public forum where professionals can ask questions to other members or Community staff about any AT&T products or services",
		"images" : ["images/bizcommunity.png"]
	}
	]
}

var bio = {
	"name" : "Roberto Castillo",
	"role" : "Web Developer",
	"contacts" : [
		{
		"mobile" : "973-420-4278",
		"location" : "Clifton, NJ, US",
		"email" : "rcastillo1031@gmail.com",
		"github" : "RobertoCastillo"
		}
	],
	"welcomeMessage" : "Hello Everyone! Here is just a little more info about me.",
	"skills" : ["Project Management", "Customer Service", "HTML", "CSS", "Javascript", "Computer Hardware"],
	"bioPic" : ["/images/contact.JPG"]
}

var education = {
	"schools" : [
		{
		"name" : "Dover Business College",
		"location" : "Paramus, NJ, US",
		"degree" : "Certificate",
		"major" : "Networking",
		"dates" : 2002
		}
	],
	"onlineCourses" : [
	{
		"title" : "Web Design",
		"school" : "ONLC Training Centers",
		"degree" : "Certificate",
		"dates" : 2014,
		"url" : "www.onlc.com/"
	},
	{
		"title" : "Front-End Web Developer",
		"name" : "Udacity",
		"degree" : "Nanodegree",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/nd001"
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
work.display = function() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

//coding for projects
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

//function to display education
education.display = function() {
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedNameDegree = formattedName + formattedDegree;
	$(".education-entry:last").append(formattedNameDegree);
		
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);
		
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
	}
	
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
	}
}
education.display();

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

//coding for map
$("#mapDiv").append(googleMap);

