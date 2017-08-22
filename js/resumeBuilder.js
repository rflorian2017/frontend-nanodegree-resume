/*
This is empty on purpose! Your code to build the resume will go here.
 */
var education = {
    "schools": [{
            "name": "Politehnica University of Timisoara",
            "location": "Timisoara, Romania",
            "degree": "Bachelor's degree",
            "dates": "2008-2012",
            "url": "http://www.upt.ro",
            "majors": ["Computer Science"]
        },
        {
            "name": "Politehnica University of Timisoara",
            "location": "Timisoara, Romania",
            "degree": "Masters",
            "dates": "2012-2014",
            "url": "http://www.upt.ro",
            "majors": ["Software Engineering", "Computer Science"]
        }
    ],
    "onlineCourses": [{
            "title": "Artificial Intelligence",
            "school": "Udacity",
            "dates": "2011",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Project Management",
            "school": "Berkley",
            "dates": "2015",
            "url": "http://www.coursera.org"
        },
        {
            "title": "Game Development in C#",
            "school": "Coursera",
            "dates": "2015",
            "url": "http://www.coursera.org"
        }
    ]
};

var work = {
    "jobs": [{
        "employer": "Continental Automotive Romania AG",
        "title": "Software Developer",
        "location": "Siemens street, Timisoara, Romania",
        "dates": "2012-present",
        "description": "Continental is a leader in Automotive Solutions worldwide."
    }]
};

var bio = {
    "name": "Robert Suselea",
    "role": "Software Developer",
    "welcomeMessage": "In code we trust!",
    "biopic": "images/profile_picture.jpg",
    "contacts": {
        "mobile": "00400000000",
        "email": "name@yahoo.com",
        "github": "rflorian2017",
        "location": "Rebreanu, Timisoara, Romania"
    },
    "skills": ["C", "C#", "Java", "JavaScript"]
};

var projects = {
    "projects": [{
            "title": "Animal Trading Card",
            "dates": "2017",
            "description": "Project for (re)learning HTML",
            "images": ["images/budgerigar-medium_medium.jpg", "images/budgerigar-medium_medium.jpg"]
        },
        {
            "title": "Responsive Website",
            "dates": "2017",
            "description": "Project for (re)learning HTML",
            "images": ["images/team_mini-medium_medium.jpg"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(item) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", item.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", item.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", item.description));
        item.images.forEach(function(image) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
        });
    });
};

bio.display = function() {
    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    if (bio.contacts.twitter !== undefined) {
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    }
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
};

education.display = function() {
    education.schools.forEach(function(item) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", item.name);
        if (item.url !== undefined) {
            formattedSchoolName = formattedSchoolName.replace("#", item.url);
        }
        $(".education-entry:last").append(formattedSchoolName + HTMLschoolDegree.replace("%data%", item.degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", item.dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", item.location));
        item.majors.forEach(function(major) {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
        });
    });

    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        formattedOnlineTitle = formattedOnlineTitle.replace("#", course.url);
        $(".education-entry:last").append(formattedOnlineTitle + HTMLonlineSchool.replace("%data%", course.school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
    });
};

$(document).click(function(loc) {
    // your code goes here
    logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name) {
    var names = name.trim().split(' ');
    return names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
}

projects.display();
work.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);
