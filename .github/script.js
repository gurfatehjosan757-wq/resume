function updateResume(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let summary = document.getElementById("summary").value;
let experience = document.getElementById("experience").value;
let education = document.getElementById("education").value;



document.getElementById("preview-name").innerText = name;
document.getElementById("preview-contact").innerText = email + " | " + phone;
document.getElementById("preview-summary").innerText = summary;
document.getElementById("preview-experience").innerText = experience;
document.getElementById("preview-education").innerText = education;
}