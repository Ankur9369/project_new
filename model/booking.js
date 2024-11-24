document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const pickup = document.getElementById('pickup').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const ambulanceType = document.getElementById('ambulance-type').value;

    if (pickup === '' || destination === '') {
        alert('Please fill out all the required fields.');
        return;
    }

    alert(
        `Ambulance booked successfully! 
        Pickup Location: ${pickup} 
        Destination: ${destination} 
        Ambulance Type: ${ambulanceType}`
    );

    // Reset the form
    document.getElementById('booking-form').reset();
});
