// Simulated ambulance location
let ambulancePosition = { lat: 28.6139, lng: 77.2090 }; // Example coordinates (New Delhi)

function updateTrackingInfo() {
    // Simulate fetching ambulance location
    document.querySelector('.map-placeholder p').innerHTML = `Ambulance is at Latitude: ${ambulancePosition.lat}, Longitude: ${ambulancePosition.lng}`;
}

// Simulate ambulance moving (for demonstration)
function simulateAmbulanceMovement() {
    // Randomly change the ambulance's position every 5 seconds
    setInterval(() => {
        ambulancePosition.lat += (Math.random() - 0.5) * 0.01; // Slightly move latitude
        ambulancePosition.lng += (Math.random() - 0.5) * 0.01; // Slightly move longitude
        updateTrackingInfo();
    }, 5000); // Every 5 seconds
}

// Initialize
window.onload = () => {
    updateTrackingInfo();
    simulateAmbulanceMovement();
};
