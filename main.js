var _a, _b, _c, _d;
//for the list button
(_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var educationlist = document.getElementById('education-list');
    var neweducation = document.createElement('li');
    neweducation.innerHTML = '<input type="text" name="education[]" placeholder="Enter your education" required>';
    educationlist.appendChild(neweducation);
});
(_b = document.getElementById('add-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var experiencelist = document.getElementById('work-experience-list');
    var newexperience = document.createElement('li');
    newexperience.innerHTML = '<input type="text" name="experience[]" placeholder="Enter your experience" required>';
    experiencelist.appendChild(newexperience);
});
(_c = document.getElementById('add-skills')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var skillslist = document.getElementById('skills-list');
    var newskills = document.createElement('li');
    newskills.innerHTML = ' <input type="text" name="skills[]" placeholder="Enter your skills" required>';
    skillslist.appendChild(newskills);
});
//to generate the resume
(_d = document.getElementById('generate-cv')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission and page reload
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var contact = document.getElementById('Contact').value;
    var educationElements = document.getElementsByName('education[]');
    var experienceElements = document.getElementsByName('experience[]');
    var skillsElements = document.getElementsByName('skills[]');
    var educations = Array.from(educationElements).map(function (input) { return input.value; }).filter(function (value) { return value; });
    var experiences = Array.from(experienceElements).map(function (input) { return input.value; }).filter(function (value) { return value; });
    var skills = Array.from(skillsElements).map(function (input) { return input.value; }).filter(function (value) { return value; });
    var cvcontent = "\n    <h2>Personal Information</h2>\n    <p>Name: <span contenteditable = \"true\">".concat(name, "</span></p>\n    <p>Email: <span contenteditable = \"true\">").concat(email, "</span></p>\n    <p>Contact: <span contenteditable = \"true\">").concat(contact, "</span></p>\n\n    <h2>Education</h2>\n    <ul contenteditable = \"true\">").concat(educations.map(function (education) { return "<li>".concat(education, "</li>"); }).join(''), "</ul>\n\n    <h2>Work Experience</h2>\n    <ul contenteditable = \"true\">").concat(experiences.map(function (experience) { return "<li>".concat(experience, "</li>"); }).join(''), "</ul>\n\n    <h2>Skills</h2>\n    <ul contenteditable = \"true\">").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n");
    // Display the CV content
    var displaycv = document.getElementById('cv-content');
    displaycv.innerHTML = cvcontent;
    // Make the CV section visible
    var resumedisplay = document.getElementById('display-cv');
    resumedisplay.style.display = 'block';
    resumedisplay === null || resumedisplay === void 0 ? void 0 : resumedisplay.scrollIntoView({ behavior: 'smooth' });
});
