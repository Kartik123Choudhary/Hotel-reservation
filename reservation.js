
document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const roomType = document.getElementById('roomType').value;
    const duration = parseInt(document.getElementById('duration').value);
    const pricePerNight = getPricePerNight(roomType);

    const totalCost = pricePerNight * duration;
    alert(`Total Cost: $${totalCost}`);

    // Update room availability status
    updateRoomAvailability(roomType);
});

function getPricePerNight(roomType) {
    switch (roomType) {
        case 'single':
            return 100;
        case 'double':
            return 150;
        case 'suite':
            return 200;
        default:
            return 0;
    }
}

function updateRoomAvailability(roomType) {
    const roomRow = document.querySelector(`[data-room-type="${roomType}"]`);
    roomRow.querySelector('td:last-child').textContent = 'Booked';
}
