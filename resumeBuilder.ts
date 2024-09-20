interface ResumeData {
    name: string;
    fathername: string;
    phone: string;
    degree: string;
    year: string;
    jobTitle: string;
    company: string;
    duration: string;
    skills: string[];
}

function generateResume(): void {
    // Get the form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLSelectElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;

    // Collect the resume data
    const resumeData: ResumeData = {
        name,
        fathername,
        phone,
        degree,
        year,
        jobTitle,
        company,
        duration,
        skills: [skill1, skill2, skill3]
    };

    // Display the resume
    displayResume(resumeData);

    // Hide the form
    const form = document.getElementById('resume-form') as HTMLElement;
    form.style.display = 'none';

    // Show the resume display
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
    resumeDisplay.style.display = 'block';
}

function displayResume(data: ResumeData): void {
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

    resumeDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p>Father Name: ${data.fathername}</p>
        <p>Phone: ${data.phone}</p>
        <h3>Education</h3>
        <p>${data.degree},(${data.year})</p>
        <h3>Experience</h3>
        <p>${data.jobTitle} at ${data.company} (${data.duration})</p>
        <h3>Skills</h3>
        <ul>
            <li>${data.skills[0]}</li>
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
        </ul>
    `;
}
