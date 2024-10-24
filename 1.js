// Sample data for 10 orphanages in Bangalore
const orphanages = [
    { id: 1, name: "Sunshine Orphanage", location: "Jayanagar", needs: "Vegetables, Fruits" },
    { id: 2, name: "Hope House", location: "Kumaraswamy layout", needs: "Bread, Rice" },
    { id: 3, name: "Little Angels Home", location: "Lalbagh", needs: "Milk, Eggs" },
    { id: 4, name: "Care Foundation", location: "Majestic", needs: "Canned Foods, Water" },
    { id: 5, name: "Love & Care Home", location: "Gandhi bazar", needs: "Pasta, Beans" },
    { id: 6, name: "Harmony House", location: "National College", needs: "Rice, Bread" },
    { id: 7, name: "Heavenly Helpers", location: "KR Market", needs: "Eggs, Butter" },
    { id: 8, name: "Children's Haven", location: "Pattangere", needs: "Meat, Vegetables" },
    { id: 9, name: "Bright Future Home", location: "JP Nagar", needs: "Porridge, Milk" },
    { id: 10, name: "Good Shepherd Orphanage", location: "Banshankari", needs: "Bread, Meat" },
];

const orphanageList = document.getElementById('orphanageList');
const orphanageDetails = document.getElementById('orphanageDetails');
const orphanageName = document.getElementById('orphanageName');
const orphanageLocation = document.getElementById('orphanageLocation');
const orphanageNeeds = document.getElementById('orphanageNeeds');
const backButton = document.getElementById('backButton');
const donationForm = document.getElementById('donationForm');

// Function to render orphanages in boxes
function renderOrphanageList() {
    orphanageList.innerHTML = '';
    orphanages.forEach(orphanage => {
        const orphanageBox = document.createElement('div');
        orphanageBox.classList.add('orphanage-box');
        orphanageBox.innerHTML = `
            <a href="#" onclick="viewOrphanage(${orphanage.id})">${orphanage.name}</a>
            <p>Location: ${orphanage.location}</p>
            <p>Needs: ${orphanage.needs}</p>
        `;
        orphanageList.appendChild(orphanageBox);
    });
}

// Function to view orphanage details
function viewOrphanage(id) {
    const orphanage = orphanages.find(o => o.id === id);
    if (orphanage) {
        orphanageList.style.display = 'none';
        orphanageDetails.classList.remove('hidden');
        orphanageName.textContent = orphanage.name;
        orphanageLocation.textContent = orphanage.location;
        orphanageNeeds.textContent = orphanage.needs;
    }
}

// Go back to orphanage list
backButton.addEventListener('click', () => {
    orphanageList.style.display = 'flex';
    orphanageDetails.classList.add('hidden');
});

// Handle donation form submission
donationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const food = document.getElementById('food').value;

    // Redirect to thank-you page
    window.location.href = 'tq.html';
});

// Initialize orphanage list
renderOrphanageList();
