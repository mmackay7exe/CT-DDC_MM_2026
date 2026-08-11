document.addEventListener("DOMContentLoaded", () => {

    // Time spent on page counter (format: hh:mm:ss:ms)
    const timerEl = document.getElementById("timer");
    let startTime = Date.now();

    function updateTimer() {
        const elapsed = Date.now() - startTime;
        
        const hrs = String(Math.floor(elapsed / 3600000)).padStart(2, '0');
        const mins = String(Math.floor((elapsed % 3600000) / 60000)).padStart(2, '0');
        const secs = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');
        const ms = String(Math.floor((elapsed % 1000) / 10)).padStart(2, '0');

        if (timerEl) {
            timerEl.textContent = `${hrs}:${mins}:${secs}:${ms}`;
        }
    }

    setInterval(updateTimer, 30);

    // Smooth Scroll for Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});