// Set the target date 60 days from now
        const now = new Date();
        const targetDate = new Date();
        targetDate.setDate(now.getDate() + 60);

        function updateCountdown() {
            const currentTime = new Date();
            const timeRemaining = targetDate - currentTime;

            if (timeRemaining <= 0) {
                document.getElementById('countdown').innerText = "Time's up!";
                clearInterval(timerInterval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerText = 
                `${days} days ${hours} hrs ${minutes} mins ${seconds} secs remaining`;
        }

        const timerInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Call immediately to avoid delay