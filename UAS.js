function bookHotel(hotelName) {
    const userName = prompt("Please enter your name:");
    const userEmail = prompt("Please enter your email:");
    
    if (userName && userEmail) {
        alert(`Thank you, ${userName}! Your booking request for ${hotelName} has been received. We will contact you at ${userEmail}.`);
    } else {
        alert("Booking cancelled. Please provide valid information.");
    }
}
