document.addEventListener('DOMContentLoaded', () => {
            const loadingScreen = document.getElementById('loading-screen');
            const mainContent = document.getElementById('main-content');
            let currentText = 0;
            const loadingTexts = document.querySelectorAll('.loading-text');

            function showNextText() {
                loadingTexts.forEach(text => text.classList.remove('active'));
                loadingTexts[currentText].classList.add('active');
                currentText = (currentText + 1) % loadingTexts.length;
            }

            // Start text rotation
            showNextText();
            const textInterval = setInterval(showNextText, 1000);

            // Hide loading screen after 4 seconds
            setTimeout(() => {
                clearInterval(textInterval);
                loadingScreen.style.opacity = '0';
                mainContent.classList.add('visible');
                setTimeout(() => loadingScreen.style.display = 'none', 1000);
            }, 4000);
        });
        document.addEventListener('DOMContentLoaded', () => {
            const contactForm = document.getElementById('contact-form');
            const sentMessage = document.getElementById('sent-message');
        
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault(); // Prevent actual form submission
        
                // Simulate sending message
                setTimeout(() => {
                    // Show "Message Sent" with the paper airplane animation
                    sentMessage.classList.remove('hidden');
        
                    // Reset form after showing the animation
                    contactForm.reset();
        
                    // Hide the sent message after 5 seconds
                    setTimeout(() => {
                        sentMessage.classList.add('hidden');
                    }, 5000);
                }, 500); // Delay to simulate "sending" process
            });
        });
let timer = null;
const left = document.getElementById("circuit-left");
const right = document.getElementById("circuit-right");

window.addEventListener("scroll", () => {
    left.classList.add("shrink");
    right.classList.add("shrink");

    clearTimeout(timer);
    timer = setTimeout(() => {
        left.classList.remove("shrink");
        right.classList.remove("shrink");
    }, 150); // Reset after scroll stops
});
        
