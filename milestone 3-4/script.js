var form = document.getElementById("resume-form");
var resumePreview = document.getElementById("resume-preview");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collecting input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    // Resume dynamic content
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone No:</b> ").concat(phone, "</p>\n    <h3>Education:</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience:</h3>\n    <p>").concat(experience, "</p>\n  ");
    // Displaying resume preview
    if (resumePreview) {
        resumePreview.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume preview container is missing.");
    }
});
