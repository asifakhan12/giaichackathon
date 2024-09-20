function generateResume() {
    // Get the form values
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var year = document.getElementById('year').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    // Collect the resume data
    var resumeData = {
        name: name,
        fathername: fathername,
        phone: phone,
        degree: degree,
        year: year,
        jobTitle: jobTitle,
        company: company,
        duration: duration,
        skills: [skill1, skill2, skill3]
    };
    // Display the resume
    displayResume(resumeData);
    // Hide the form
    var form = document.getElementById('resume-form');
    form.style.display = 'none';
    // Show the resume display
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.style.display = 'block';
}
function displayResume(data) {
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = "\n        <h2>".concat(data.name, "</h2>\n        <p>Father Name: ").concat(data.fathername, "</p>\n        <p>Phone: ").concat(data.phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.degree, ",(").concat(data.year, ")</p>\n        <h3>Experience</h3>\n        <p>").concat(data.jobTitle, " at ").concat(data.company, " (").concat(data.duration, ")</p>\n        <h3>Skills</h3>\n        <ul>\n            <li>").concat(data.skills[0], "</li>\n            <li>").concat(data.skills[1], "</li>\n            <li>").concat(data.skills[2], "</li>\n        </ul>\n    ");
}
