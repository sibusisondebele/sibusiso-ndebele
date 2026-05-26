const jobs = [
    {
        title: "Software Developer",
        company: "Tech Botswana",
        category: "IT",
        location: "Gaborone"
    },

    {
        title: "Accountant",
        company: "Finance Hub",
        category: "Finance",
        location: "Francistown"
    },

    {
        title: "Marketing Officer",
        company: "BW Marketing",
        category: "Marketing",
        location: "Maun"
    }
];

function displayJobs() {

    const container =
        document.getElementById("job-container") ||
        document.getElementById("all-jobs");

    if(!container) return;

    container.innerHTML = "";

    jobs.forEach(job => {

        container.innerHTML += `
        
        <div class="job-card">
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>

            <button onclick="applyJob('${job.title}')">
                Apply
            </button>

            <button onclick="saveJob('${job.title}')">
                Save
            </button>
        </div>

        `;
    });
}

displayJobs();

function filterJobs(){

    const category =
        document.getElementById("categoryFilter").value;

    const container =
        document.getElementById("all-jobs");

    container.innerHTML = "";

    const filtered = jobs.filter(job => {

        if(category === "all"){
            return true;
        }

        return job.category === category;
    });

    filtered.forEach(job => {

        container.innerHTML += `
        
        <div class="job-card">
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>

            <button>Apply</button>
        </div>

        `;
    });
}

function searchJobs(){

    const search =
        document.getElementById("searchInput").value.toLowerCase();

    const found = jobs.find(job =>
        job.title.toLowerCase().includes(search)
    );

    if(found){
        alert("Job Found: " + found.title);
    } else{
        alert("No job found");
    }
}

function applyJob(title){
    alert("Application submitted for " + title);
}

function saveJob(title){
    alert(title + " saved successfully");
}

function uploadCV(){

    const file =
        document.getElementById("cvUpload").files[0];

    if(file){
        alert(file.name + " uploaded successfully");
    } else{
        alert("Please select a file");
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const jobsCount =
        document.getElementById("jobs-count");

    const companiesCount =
        document.getElementById("companies-count");

    const candidatesCount =
        document.getElementById("candidates-count");

    if(jobsCount){
        jobsCount.textContent = jobs.length;
    }

    if(companiesCount){
        companiesCount.textContent = 12;
    }

    if(candidatesCount){
        candidatesCount.textContent = 45;
    }

    const menuBtn =
        document.getElementById("menu-btn");

    const navLinks =
        document.querySelector(".nav-links");

    if(menuBtn){

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

    }

    const contactForm =
        document.getElementById("contactForm");

    if(contactForm){

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Message sent successfully");

        });

    }

    const jobForm =
        document.getElementById("jobForm");

    if(jobForm){

        jobForm.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Job posted successfully");

        });

    }

});
/* DARK MODE */

const darkModeBtn =
document.getElementById("darkModeToggle");

darkModeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    /* SAVE MODE */

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme", "dark");

        darkModeBtn.innerText = "Light Mode";

    } else{

        localStorage.setItem("theme", "light");

        darkModeBtn.innerText = "Dark Mode";

    }

});

/* LOAD SAVED THEME */

window.addEventListener("load", () => {

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        if(darkModeBtn){
            darkModeBtn.innerText = "Light Mode";
        }

    }

});
