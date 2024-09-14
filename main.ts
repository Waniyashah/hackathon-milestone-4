//for the list button
document.getElementById('add-education')?.addEventListener('click', function(){
    let educationlist=document.getElementById('education-list')
    let neweducation=document.createElement('li')
    neweducation.innerHTML='<input type="text" name="education[]" placeholder="Enter your education" required>';
    educationlist.appendChild(neweducation)
 })
 document.getElementById('add-experience')?.addEventListener('click', function(){
    let experiencelist=document.getElementById('work-experience-list')
    let newexperience=document.createElement('li')
    newexperience.innerHTML='<input type="text" name="experience[]" placeholder="Enter your experience" required>';
   experiencelist.appendChild(newexperience)
 })
 document.getElementById('add-skills')?.addEventListener('click', function(){
    let skillslist=document.getElementById('skills-list')
    let newskills=document.createElement('li')
    newskills.innerHTML=' <input type="text" name="skills[]" placeholder="Enter your skills" required>';
    skillslist.appendChild(newskills)
 })
 
 //to generate the resume
 document.getElementById('generate-cv')?.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form submission and page reload
 
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const contact = (document.getElementById('Contact') as HTMLInputElement).value;
 
    const educationElements = document.getElementsByName('education[]') as NodeListOf<HTMLInputElement>;
    const experienceElements = document.getElementsByName('experience[]') as NodeListOf<HTMLInputElement>;
    const skillsElements = document.getElementsByName('skills[]') as NodeListOf<HTMLInputElement>;
 
    const educations = Array.from(educationElements).map((input) => input.value).filter(value => value);
    const experiences = Array.from(experienceElements).map((input) => input.value).filter(value => value);
    const skills = Array.from(skillsElements).map((input) => input.value).filter(value => value);
 
   
    let cvcontent = `
    <h2>Personal Information</h2>
    <p>Name: <span contenteditable = "true">${name}</span></p>
    <p>Email: <span contenteditable = "true">${email}</span></p>
    <p>Contact: <span contenteditable = "true">${contact}</span></p>

    <h2>Education</h2>
    <ul contenteditable = "true">${educations.map(education => `<li>${education}</li>`).join('')}</ul>

    <h2>Work Experience</h2>
    <ul contenteditable = "true">${experiences.map(experience => `<li>${experience}</li>`).join('')}</ul>

    <h2>Skills</h2>
    <ul contenteditable = "true">${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
`;

 
    // Display the CV content
    const displaycv = document.getElementById('cv-content');
    displaycv!.innerHTML = cvcontent;
 
    // Make the CV section visible
    const resumedisplay = document.getElementById('display-cv');
    resumedisplay!.style.display = 'block';
    resumedisplay?.scrollIntoView({behavior:'smooth'})
 });