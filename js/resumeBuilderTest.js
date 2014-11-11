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
		"description" : "The AT&T Business Community is a public forum where professionals can ask questions to other members or Community staff about any AT&T products or services"
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
	"bioPic" : "/images/contact.jpg"
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
	
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.job[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);
}
