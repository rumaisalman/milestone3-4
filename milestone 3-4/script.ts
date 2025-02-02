const form = document.getElementById("resume-form") as HTMLFormElement;
const resumePreview = document.getElementById("resume-preview") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
	event.preventDefault();


	const name = (document.getElementById("name") as HTMLInputElement).value;
	const email = (document.getElementById("email") as HTMLInputElement).value;
	const phone = (document.getElementById("phone") as HTMLInputElement).value;
	const education = (document.getElementById("education") as HTMLTextAreaElement).value;
	const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;


	const resumeHTML = `
    <h2><b>Resume</b></h2>
		<br>
    <h3><b>Personal Information</b></h3>
		<br>
    <p><b>Name:</b> ${name}</p>
		<br>
    <p><b>Email:</b> ${email}</p>
		<br>
    <p><b>Phone No:</b> ${phone}</p>
		<br>
    <h3>Education:</h3>
    <p>${education}</p>
				<br>
    <h3>Experience:</h3>
    <p>${experience}</p>
  `;


	if (resumePreview) {
		resumePreview.innerHTML = resumeHTML;
	} else {
		console.error("The resume preview container is missing.");
	}
});
