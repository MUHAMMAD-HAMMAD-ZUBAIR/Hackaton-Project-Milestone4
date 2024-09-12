// Get References To The Form And Dispaly Area
const form = document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;
  
    // Handle Form Submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // prevent page reload

        //collect input values
        const name = (document.getElementById('name')as HTMLInputElement).value;
        const email = (document.getElementById('email')as HTMLInputElement).value;
        const phone = (document.getElementById('phone')as HTMLInputElement).value;
        const education = (document.getElementById('education')as HTMLInputElement).value;
        const experience = (document.getElementById('experience')as HTMLInputElement).value;
        const skills = (document.getElementById('skills')as HTMLInputElement).value;
    
        //Generate The Resume Content Dynamic
        const resumeHTML = `
        <h2><b><u>EDITABLE RESUME</u></b></h2>
        <h3> Personal Information</h3>
        <p><b>Name:</b><span contenteditable="true">${name}</span></p>
        <p><b>Email:</b><span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
        
        <h3> Education</h3>
        <p contenteditable="true">${education}</P>

         <h3> Experience</h3>
        <p contenteditable="true">${experience}</P>

         <h3> Skills</h3>
        <p contenteditable="true">${skills}</P>
        `;

        // Display The Generated Resume
        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        }else{
            console.error('The Resume Display Element Is Missing')
        }
    } );
    