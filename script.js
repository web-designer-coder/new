// Initialize total waste and reward points
let totalWaste = 0;
let rewardPoints = 0;

// Function to start the e-waste management process
function startNow() {
    alert("Start managing your e-waste by scheduling a pickup!");
}

// Contact Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you ${name}, we have received your message.`);
        document.getElementById("contactForm").reset(); // Reset form fields
    } else {
        alert("Please fill out all fields.");
    }
});

// Modal for Pickup Scheduling
const modal = document.getElementById("pickupForm");

function openForm() {
    modal.style.display = "flex";
}

function closeForm() {
    modal.style.display = "none";
}

// Handle Pickup Form Submission
document.getElementById("pickupRequestForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const address = document.getElementById("address").value;
    const date = document.getElementById("date").value;
    const wasteAmount = document.getElementById("wasteAmount").value;

    if (address && date && wasteAmount) {
        alert(`Pickup scheduled at ${address} on ${date} for ${wasteAmount} kg of e-waste.`);
        closeForm();
        updateDashboard(wasteAmount);
        document.getElementById("pickupRequestForm").reset(); // Reset form fields
    } else {
        alert("Please fill out all fields.");
    }
});

// Update Dashboard with e-waste data
function updateDashboard(wasteAmount) {
    totalWaste += parseFloat(wasteAmount);
    rewardPoints += parseFloat(wasteAmount) * 10; // 10 points per kg

    document.getElementById("wasteCount").textContent = totalWaste.toFixed(2);
    document.getElementById("rewardPoints").textContent = rewardPoints;
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target === modal) {
        closeForm();
    }
};

// Adding e-waste manually through a button (Optional)
function addWaste() {
    const wasteAmount = prompt("Enter amount of e-waste (kg):");
    if (wasteAmount) {
        const amount = parseFloat(wasteAmount);
        if (!isNaN(amount) && amount > 0) {
            updateDashboard(amount);
        } else {
            alert("Please enter a valid amount.");
        }
    }
}

// Function to redeem rewards (placeholder logic)
function redeemRewards() {
    if (rewardPoints > 0) {
        alert(`You have redeemed your rewards of ${rewardPoints} points!`);
        rewardPoints = 0; // Reset rewards after redeeming
        updateDashboard(0); // Update dashboard to reflect reward redemption
    } else {
        alert("You have no rewards to redeem.");
    }
}

// Additional function to handle the start now button
document.getElementById("startNowButton").addEventListener("click", startNow);

document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block'; // Toggle display
        content.style.transition = 'display 0.3s'; // Smooth transition effect
    });
});

function togglePDF() {
    const pdfContent = document.getElementById('pdfContent');
    if (pdfContent.style.display === "block") {
        pdfContent.style.display = "none";
    } else {
        pdfContent.style.display = "block";
    }
}

// Toggle FAQ answers
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        item.classList.toggle('active'); // Toggle active class

        // Close other FAQs when one is opened (optional)
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});



