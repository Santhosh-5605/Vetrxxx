const doctorsData = {
    Chennai: [
        { name: "Dr. Kumar", specialty: "Pet Surgery",address:"madras veterinary Hospital - Vepery Chooli ", ph:"04425665566",ph: "9876543210",image: "m1.jpesg" },
        { name: "Dr. Meena", specialty: "Animal Nutrition", address:"The Cvz Pet Hospital - sithalapakam", ph:"09962282166",image: "f1.jpeg" },
        { name: "Dr. Ravi", specialty: "Livestock Care",address:"The Cvz Pet Hospital - sithalapakam1", ph:"09962282166", image: "m2.jpeg" },
        { name: "Dr. Priya", specialty: "Wildlife Medicine", image: "f2.jpeg" }
    ],
    Coimbatore: [
        { name: "Dr. Sanjay", specialty: "Farm Animals",address:"Sanchu Animal Hospital - Adaiyar 1", ph:"09445160101",image: "m4.jpeg" },
        { name: "Dr. Nithya", specialty: "Pet Dermatology",address:"The Cvz Pet Hospital - sithalapakam", ph:"09962282166", image: "f4.jpeg" },
        { name: "Dr. Rajesh", specialty: "Birds Specialist",address:"Sanchu Animal Hospital - Adaiyar4 ", ph:"09445160101", image: "m5.jpeg" },
        { name: "Dr. Divya", specialty: "Reptile Care", address:"Sanchu Animal Hospital - Adaiyar 7", ph:"09445160101",image: "f5.jpeg" }
    ],
    Madurai: [
        { name: "Dr. Aravind", specialty: "Canine Care",address:"Sanchu Animal Hospital - Adaiyar 1", ph:"09445160101", image: "m6.jpeg" },
        { name: "Dr. Sneha", specialty: "Equine Medicine",address:"The Cvz Pet Hospital - sithalapakam", ph:"09962282166", image: "f6.jpeg" },
        { name: "Dr. Venkat", specialty: "Feline Health", address:"Sanchu Animal Hospital - Adaiyar 5", ph:"09445160101",image: "m7.jpeg" },
        { name: "Dr. Pooja", specialty: "Exotic Pets",address:"The Cvz Pet Hospital - sithalapakam", ph:"09962282166", image: "f7.jpeg" }
    ],
    Trichy: [
        { name: "Dr. Bala", specialty: "Dairy Cattle",ddress:"Sanchu Animal Hospital - Adaiyar 9", ph:"09445160101", image: "m3.jpeg" },
        { name: "Dr. Ramya", specialty: "Pet Vaccination",address:"The Cvz Pet Hospital - sithalapakam5", ph:"09962282166", image: "f3.jpeg" },
        { name: "Dr. Karthik", specialty: "Poultry Expert",address:"Sanchu Animal Hospital - Adaiyar 1", ph:"09445160101",image: "m8.jpeg" },
        { name: "Dr. Sindhu", specialty: "Zoo Veterinary", address:"Sanchu Animal Hospital - Adaiyar 4", ph:"09445160101",image: "f8.jpeg" }
        
    ]
};

function loadDoctors() {
    const district = document.getElementById("districts").value;
    const doctorsContainer = document.getElementById("doctors-container");
    const backButton = document.getElementById("back-home-btn");

    doctorsContainer.innerHTML = ""; // Clear previous doctors
    backButton.style.display = district ? "block" : "none"; // Show button if district is selected

    if (district && doctorsData[district]) {
        doctorsData[district].forEach(doctor => {
            const doctorCard = document.createElement("div");
            doctorCard.classList.add("doctor-card");

            doctorCard.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}">
                <h3>${doctor.name}</h3>
                <p>${doctor.specialty}</p>
                <p>${doctor.address}</p>
                <p>${doctor.ph}</p>
                <button class="book-btn" onclick="bookAppointment('${doctor.name}')">Book Appointment</button>
            `;
            doctorsContainer.appendChild(doctorCard);
        });
    } else {
        doctorsContainer.innerHTML = "<p>Please select a district to view doctors.</p>";
    }
}

// Function to go back to home (reset page)
function goToHome() {
    document.getElementById("districts").value = ""; // Reset dropdown
    document.getElementById("doctors-container").innerHTML = "<h2>Select a District to View Doctors</h2>";
    document.getElementById("back-home-btn").style.display = "none"; // Hide back button
}
function bookAppointment(doctorName) {
    alert(`Appointment booked with ${doctorName}.`);
}
