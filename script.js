// Bio data
const bioData = {
	name: "Myvizhipriya",
	profession: "Student",
	bioText: "Highly motivated and experienced software developer with expertise in JavaScript, HTML, and CSS.",
	email: "myvizhipriya034@.com",
	phone: "9942254298",
	
};

// Populate bio data
document.getElementById("name").textContent = bioData.name;
document.getElementById("profession").textContent = bioData.profession;
document.getElementById("bio-text").textContent = bioData.bioText;
document.getElementById("email").textContent = bioData.email;
document.getElementById("email").href = `mailto:${bioData.email}`;
document.getElementById("phone").textContent = bioData.phone;
document.getElementById("phone").href = `tel:${bioData.phone}`;
document.getElementById("linkedin").textContent = bioData.linkedin;
document.getElementById("linkedin").href = bioData.linkedin;

