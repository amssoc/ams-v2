document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("explore-btn");
    const eventsSection = document.getElementById("events");

    if (exploreBtn && eventsSection) {
        exploreBtn.addEventListener("click", function (e) {
            e.preventDefault(); // stop default jump
            eventsSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
// AMS v2 main JavaScript
// ===== FIXED DATE & TIME WIDGET =====
function updateDateTime() {
    const now = new Date();

    const timeOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const dateOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    const timeEl = document.getElementById("timeValue");
    const dateEl = document.getElementById("dateValue");

    if (timeEl && dateEl) {
        timeEl.innerText = now.toLocaleTimeString("en-IN", timeOptions);
        dateEl.innerText = now.toLocaleDateString("en-IN", dateOptions);
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);

