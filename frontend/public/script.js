document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded. Starting countdown.");
    const launchDate = new Date().getTime() + (151 * 24 * 60 * 60 * 1000); // 151 days from now

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h1>We're Live!</h1>";
            return; // Stop the function if the countdown is over
        }

        document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }
    
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the countdown immediately
});
