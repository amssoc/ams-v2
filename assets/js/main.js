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
// ===== FIXED DATE & TIME WIDGET =====
function startTimeWidget() {
    const timeEl = document.getElementById("timeValue");
    const dateEl = document.getElementById("dateValue");

    if (!timeEl || !dateEl) return;

    function updateDateTime() {
        const now = new Date();

        timeEl.innerText = now.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        dateEl.innerText = now.toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata",
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
}

document.addEventListener("DOMContentLoaded", startTimeWidget);


