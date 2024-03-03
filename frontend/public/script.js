document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded. Starting countdown.");

    const countDownDate = new Date("2024-07-07 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h1>We're Live!</h1>";
            return; 
        }

        document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }
    
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); 
});
